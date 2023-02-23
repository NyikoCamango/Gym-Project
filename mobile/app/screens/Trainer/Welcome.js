import React from 'react'
import {View, Text, Pressable} from 'react-native'
const TrainerWelcome = ({navigation}) => {


  return (
    <View>
      <Pressable onPress={() => navigation.navigate('TrainerHome')}>
      <Text>Welcome Trainer</Text>
      </Pressable>
    </View>
  )
}

export default TrainerWelcome