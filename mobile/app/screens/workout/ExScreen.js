import { Button } from 'native-base'
import React from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native'
import FullBtn from '../../components/fullbtn'


const ExScreen = ({navigation}) => {
  return (
        <View>
        <Text>Today's Workouts</Text>
        <FullBtn navigation={navigation} extraContent={{type: '10 Push ups x 5'}} dest='ExcersizeModal' content="10 Push ups x 5"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: '10 Push ups x 5'}}  content="10 Reps Bumbell bench press x 5 sets"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: '10 Reps Barbel Curl x 5 sets'}}  content="10 Reps Barbel Curl x 5 sets"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: 'Plank x 10 min'}}  content="Plank x 10 min"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: '10 Push ups x 5'}}  content="10 Push ups x 5"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: '10 Reps Bumbell bench press x 5 sets'}}  content="10 Reps Bumbell bench press x 5 sets"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: '10 Reps Barbel Curl x 5 sets'}}  content="10 Reps Barbel Curl x 5 sets"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: 'Plank x 10 min'}}  content="Plank x 10 min"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: '10 Push ups x 5'}}  content="10 Push ups x 5"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: '10 Reps Bumbell bench press x 5 sets'}}  content="10 Reps Bumbell bench press x 5 sets"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: '10 Reps Barbel Curl x 5 sets'}}  content="10 Reps Barbel Curl x 5 sets"/>
        <FullBtn navigation={navigation} dest='ExcersizeModal'  extraContent={{type: '10 Push ups x 5'}}  content="Plank x 10 min"/>
        
        {/* <FullBtn navigation={navigation} dest='ExcersizeModal' content="Start"/> */}

      
        </View>
  )
}

export default ExScreen