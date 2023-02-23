import { Button } from 'native-base'
import React from 'react'
import {View, Text, Image} from 'react-native'
import { Headline } from 'react-native-paper';


const ExcerModal = ({route, navigation}) => {

  const addGym = async () => {
    
    let url = `https://fetch-your-body.herokuapp.com/public/addWorkout`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({
           userId: 1, points: 5, type: route?.params?.type
        })
    });

    
    const res = await response.json()
    if( res ) {
      navigation.goBack()
    }
  }

  return (
        <View>
          {console.log(route)}
        <Headline>{route?.params?.type}</Headline>
        <Headline>How it's Done</Headline>
        <Image
        style={{ width: 400,
    height: 258,}}
        source={{
          uri: 'https://static.strengthlevel.com/images/illustrations/bench-press-1000x1000.jpg',
        }}
      />
      <Headline>Weight</Headline>
      <Text>Beginner: 5KG</Text>
      <Text>Intermediate: 15KG</Text>
      <Text>Advanced: 55KG</Text>
          <Button onPress={addGym}>Complete</Button>
        </View>
  )
}

export default ExcerModal