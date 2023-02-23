import React from 'react'
import {View, Text} from 'react-native'
import FullBtn from '../../components/fullbtn'


const SelectGender = ({navigation, route}) => {

  return (
        <View>
        <Text style={{fontWeight: 'bold', color: 'green', padding: 10}}>Step 2</Text>
      <Text style={{fontSize: 30, textAlign: 'center'}}>Select Gender</Text>
      <Text style={{fontSize: 12, textAlign: 'center', paddingVertical: 10}}>This helps in curating the right weights and exercises</Text>
      <View style={{marginHorizontal: 30, alignContent: 'center'}}>
        <FullBtn navigation={navigation} dest='level' content="Male" extraContent={{...route.params, gender: "MALE"}}/>
        <FullBtn navigation={navigation} dest='level' content="Female" extraContent={{...route.params, gender: "FEMALE"}}/>
        <FullBtn navigation={navigation} dest='level' content="Skip" extraContent={{...route.params, gender: "N/A"}}/>
      </View>
        </View>
  )
}

export default SelectGender