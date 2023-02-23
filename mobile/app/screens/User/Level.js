import React from 'react'
import {View, Text} from 'react-native'
import FullBtn from '../../components/fullbtn'


const Level = ({navigation, route}) => {

  console.log(route.params)

  return (
        <View>
          <Text style={{fontWeight: 'bold', color: 'green', padding: 10}}>step 3</Text>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Gym</Text>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Knowledge</Text>
          <Text style={{fontSize: 12, textAlign: 'center', paddingVertical: 10}}>give us an idea of how aquainted you are with gym</Text>
          <View style={{marginHorizontal: 30, alignContent: 'center'}}>

          <FullBtn navigation={navigation} dest='BodyStuff' content="Beginner" extraContent={{...route.params, level: "JNR"}} info='I have never been into a gym facility before' />
          <FullBtn navigation={navigation} dest='BodyStuff' content="Intermediate" extraContent={{...route.params, level: "MID"}} info='I have friends who gym and have been before' />
          <FullBtn navigation={navigation} dest='BodyStuff' content="Advanced" extraContent={{...route.params, level: "SNR"}} info='I know my stuff' />
          </View>
        </View>
  )
}

export default Level