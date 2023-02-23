import React, {useCallback, useState, useEffect} from 'react'
import {View, Text, Pressable} from 'react-native'
import FullBtn from '../../components/fullbtn'
import { useFocusEffect } from '@react-navigation/native';
import { getUser } from "../../globals/userUtils";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Spinner } from 'native-base';

const UserWelcome = ({navigation}) => {

  const [Trainee, setTrainee] = useState(null)
  const [loading, setLoading] = useState(true)

  const getTrainee = useCallback(async (id) => {
    
    let url = `https://fetch-your-body.herokuapp.com/public/trainee/${id}`;
    const response = await fetch(url, {
        headers: {
        "Content-Type": "application/json",
        },
    });

    const {trainee} = await response.json()
    if(response.status !== 400) {
      const jsonValue = JSON.stringify(trainee)
      await AsyncStorage.setItem('trainee', jsonValue)
      navigation.navigate('Dashboard')
    } else {
      setLoading(false)
    }
  },[])

  useFocusEffect(
    useCallback(() => {
      getUser().then(u => getTrainee(u.id))
    }, [])
  )


  return (
    <View>
      {
        loading ? 
        <Spinner size="lg" style={{height: '100%'}} />
        :
        <>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Start</Text>
        <Text style={{fontSize: 30, textAlign: 'center'}}>Your Goal</Text>
        <View style={{marginHorizontal: 30, alignContent: 'center'}}>
          <FullBtn navigation={navigation} dest='gender' content="Lose fat" extraContent={{goal: "LOSE_FAT"}} info='burn fat quickly with lots of cardio and others'/>
          <FullBtn navigation={navigation} dest='gender' content="Build Muscle"  extraContent={{goal: "BUILD_MUSCLE"}}  info='get buff and look good'/>
          <FullBtn navigation={navigation} dest='gender' content="Get Stronger"  extraContent={{goal: "GET_STRONG"}}  info='become a heavy weight lifter'/>
        </View>
        </>
      }
      
    </View>
  )
}

export default UserWelcome