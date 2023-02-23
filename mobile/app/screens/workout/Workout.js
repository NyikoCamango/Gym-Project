import React, {useState, useCallback} from 'react'
import {View, Pressable, StyleSheet, Image } from 'react-native'
import {FAB, Portal, TextInput, Text, Modal, Button, Banner } from 'react-native-paper'
import { useFocusEffect } from '@react-navigation/native'
import { getUser } from '../../globals/userUtils'
// import { Modal } from 'native-base'

const containerStyle = {backgroundColor: 'white', padding: 20};

const Workouts = ({navigation}) => {

  const [trainee, setTrainee] = useState(null)
  const [user, setUser] = useState()
  const [cap, setCap] = useState()

  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  const [modalContent, setModalContent] = useState()
  const [msg, setMsg] = useState()
  
  
  const [visible, setVisible] = useState(false);

  const [isLoading, setLoading] = useState(false)

  const [bvisible, setbVisible] = useState(true);

  const complain = () => {
    setModalContent('Log a suggestion / complain')
    setVisible(true)
  }
  const attend = () => {
    setModalContent('Enter Attendence code')
    setVisible(true)
  }
  const hideModal = () => {
    setLoading(true)
    setVisible(false)};


  const gymcomplain = async () => {
    if (modalContent.includes('Enter')) {
      let url = `https://fetch-your-body.herokuapp.com/public/attendGym`;
      const response = await fetch(url, {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
            traineeId: trainee.id
          })
      });
  
      const res = await response.json()
      if(response.status === 201 || res) {
        setLoading(false)
        setVisible(false)
      }

    } else {

      setLoading(true)
      let url = `https://fetch-your-body.herokuapp.com/public/complain`;
      const response = await fetch(url, {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
             title: msg, status: "NEW"
          })
      });
  
      const res = await response.json()
      if(response.status === 201 || res) {
        setLoading(false)
        setVisible(false)
      }
    }
  }


  const getTrainee = useCallback(async (id) => {
    
    let url = `https://fetch-your-body.herokuapp.com/public/trainee/${id}`;
    const response = await fetch(url, {
        headers: {
        "Content-Type": "application/json",
        },
    });

    const {trainee} = await response.json()
    if(response.status !== 400) {
      console.log({trainee})
      setTrainee(trainee)
    } else {
    }
  },[])

  const getCapacity = useCallback(async () => {
    
    let url = `https://fetch-your-body.herokuapp.com/public/getCapacity`;
    const response = await fetch(url, {
        headers: {
        "Content-Type": "application/json",
        },
    });

    const {cap} = await response.json()
    if(response.status !== 400) {
      setCap(cap)
    } else {
    }
  },[])

  useFocusEffect(
    useCallback(() => {
      getUser().then(u => {
        setUser(u)
        getTrainee(u.id)
      })
      getCapacity()
    }, [])
  )

  return (
    <View style={styles.container}>
      <Banner
      visible={bvisible}
      actions={[
        {
          label: 'Okay',
          onPress: () => setbVisible(false),
        },
      ]}
      icon={({size}) => (
        <Image
          source={{
            uri: 'https://image.shutterstock.com/image-vector/traffic-light-icon-stoplight-semaphore-260nw-321683180.jpg',
          }}
          style={{
            width: size,
            height: size,
          }}
        />
      )}>
      <Text style={{fontSize: 40, textAlign: 'center'}}>{cap}%</Text>
      <Text style={{fontSize: 20, textAlign: 'center'}}>{' '}Capacity</Text>
    </Banner>
    <Text style={{fontSize: 30, textAlign: 'center'}}>Welcome  {user?.name}</Text>
      <View>
      <Pressable onPress={() => navigation.navigate("FreestyleCategories", {category: 'Quick Workouts', ids: [1,2,7,8,3,4,9, 5,6]})}>
        <Text style={{paddingLeft: 20, fontSize: 20}}>Quick Workouts</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate("Agenda",{
          ...trainee,
        })}>
        <Text style={{paddingLeft: 20, fontSize: 20}}>Plan</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("GymCalender")}>
        </Pressable>
      </View>
      <View>
        <Text style={{paddingLeft: 10, fontSize: 30}}>Freestyle Excercises</Text>
        <View>
          <Pressable onPress={() => navigation.navigate("FreestyleCategories", {category: 'Build Muscle', ids: [1,2,3,4,5,6]})}>
          <Text style={{paddingLeft: 20, fontSize: 17}}>Build Muscle</Text>
          </Pressable>
          <Pressable  onPress={() => navigation.navigate("FreestyleCategories", {category: 'Toning', ids: [7,8,9,10,11,12,13]})}>
            <Text style={{paddingLeft: 20, fontSize: 17}}>Toning</Text>
          </Pressable>
          <Pressable  onPress={() => navigation.navigate("FreestyleCategories", {category: 'Streching', ids: [11,12,13]})}>
            <Text style={{paddingLeft: 20, fontSize: 17}}>Strech</Text>
          </Pressable>
        </View>
      </View>

      <Portal style={{flex: 1}}>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Uj Gym</Text>
          <TextInput
            mode="outlined"
            label={modalContent}
            placeholder="Type here"
            onChangeText={text => setMsg(text)}
          />
          <Button loading={isLoading} onPress={gymcomplain}>Send</Button>
        </Modal>
      </Portal>


      <Portal>
        <FAB.Group
          open={open}
          icon={open ? 'chat' : 'plus'}
          actions={[
            {
              icon: 'star',
              label: 'Attend',
              onPress: attend,
            },
            {
              icon: 'email',
              label: 'Suggest',
              onPress: complain,
            }
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      </Portal>
    </View>
  );
};

export default Workouts

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  fabStyle: {
    bottom: 26,
    right: 16,
    position: 'absolute',
  },
});
