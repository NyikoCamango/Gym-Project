import React, {useState, useRef, useCallback} from 'react'
import {View, Text, Pressable, Image} from 'react-native'
import {Modal, ScrollView, Spinner} from 'native-base';
import { Avatar, Button, Card, Title, Banner, IconButton, ProgressBar, List } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import { getUser } from '../../globals/userUtils';
import Moment from 'moment'
import { getUserWeights, getStatsMaxWeight, getDirection } from '../../globals/weightStats';

const streakMsg = [
  '80% of new junior members with good streak achieve goals quicker and better',
  'A good streak means your muscles get constant rest and strain',
  '100% of new Mid members with good streak achieve goals quicker and better',
  '80% of new junior members with good streak achieve goals quicker and better',
]

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const GymStats = () => {
  const [showModal, setShowModal] = useState(false);
  const [history, setHistory] = useState()

  const [trainee, setTrainee] = useState(null)
  const [gymstats, setGymstats] = useState([])
  const [bvisible, setbVisible] = useState(true);
  const progressref = useRef()
  const [loading, setLoading] = useState(false)
  const [loadingW, setLoadingW] = useState(true)
  const fomtedWeightRef = useRef()

  const getStats = useCallback(async (trp) => {

    setLoading(true)
    
      setTrainee(trp)
      let url = `https://fetch-your-body.herokuapp.com/public/userProgress/${trp.id}`;
      const response = await fetch(url, {
          headers: {
          "Content-Type": "application/json",
          },
      });
  
      const {userProgress} = await response.json()
     
      if(userProgress) {
        setGymstats(userProgress)
        progressref.current = userProgress?.reduce((agg, c) => agg + c.points, 0)
        setLoading(false)
        fomtedWeightRef.current = getUserWeights(userProgress)
        if(fomtedWeightRef.current) {
          setLoadingW(false)
        }
      } else {
      }
  },[])

  const getTrainee = async (user) => {
    try {
      let url = `https://fetch-your-body.herokuapp.com/public/trainee/${user.id}`;
      const response = await fetch(url, {
          headers: {
          "Content-Type": "application/json",
          },
      });
      const {trainee} = await response.json()
      return trainee
  
    } catch(e) {
      console.log('DAMN')
    }
  }

  useFocusEffect(
    useCallback(() => {
      getUser().then(user => getTrainee(user).then(trainee => getStats(trainee)))
    }, [getStats])
  )

  const getPercentage = () => {
    let res = 0
    if(progressref?.current && trainee?.points) {
      res = progressref?.current/trainee?.points
    }
    return res
  }

  return (
    <ScrollView style={{padding: 12}}>
      <Banner
      visible={bvisible}
      actions={[
        {
          label: 'Close',
          onPress: () => setbVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://previews.123rf.com/images/homoerectuss/homoerectuss1507/homoerectuss150700011/42522331-body-builder-icon-logo.jpg',
          }}
          style={{
            width: 100,
            height: 100,
          }}
        />
      )}>
      <Text style={{fontSize: 20, textAlign: 'center'}}>{streakMsg[getRandomInt(4)]}</Text>
    </Banner>
      <Text style={{fontSize: 30, padding: 12}}>Stats</Text>
      <Card>
        <Card.Title
         subtitle={`${trainee?.goal.replace('_', ' ')}  | ${Moment(trainee?.goalStart).add(trainee?.duration, 'M').fromNow()}`}
         left={(props) => <Avatar.Icon {...props} icon="calendar"/>}
       />
       {
        trainee ?
        <Card.Title
          title="Streak"
          subtitle="this is the number of gym days completed"
          left={(props) => <Avatar.Icon {...props} icon={`numeric-${trainee?.streak}`} />}
        />: null
       }
        
      </Card>
      {
        loading ? 
        <Spinner size="lg"/>
        : null
      }
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Body>
            {
              history && <Card>
              <Card.Title
                subtitle={`Hello`}
                />
            </Card>
            }
          </Modal.Body>
        </Modal.Content>
      </Modal>

      <Card style={{marginTop: 12}}>
        <Card.Title
          title={`${progressref?.current || 0}/${trainee?.points || 0} Points`}
          subtitle="Complete more exersices & continued streak"
        />
        <Card.Content>
            <ProgressBar progress={getPercentage()} color='green' />
        </Card.Content>
        </Card>
        
        {
          loadingW ? 
            <Spinner size="lg"/>
          : null
        }
        <Text style={{fontSize: 30, padding: 12}}>Weights</Text>
        {
          fomtedWeightRef?.current?.map(p => (
              <Pressable onPress={(p) => {
                  setHistory(p)
                  setShowModal(true)
                }} key={p[0].id}>
                <List.Item
                  title={p[0].exercise}
                  description={`${getStatsMaxWeight(p)} KG | from ${getDirection(p).beg} to ${getDirection(p).last}`}
                  right={props => <List.Icon {...props} icon={getDirection(p).dir > 0 ? 'arrow-up' : 'arrow-down'} />}
                />
              </Pressable>
          ))
        }
      
    </ScrollView>
  )
}

export default GymStats