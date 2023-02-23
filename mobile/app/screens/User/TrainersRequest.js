import React from 'react'
import {View, Text} from 'react-native'
import { List, Button } from 'react-native-paper';


const TrainerRequest = ({navigation}) => {
  return (
        <View>
          <Text>step 3</Text>
          <Text style={{fontSize: 20, textAlign: 'center'}}>Get</Text>
          <Text style={{fontSize: 20, textAlign: 'center'}}>An Approved Trainer</Text>

          <List.Item
            title="First Item"
            description="Item description"
            right={props => <View><Button onPress={() => console.log('Pressed')}>Request</Button></View>}
          />
        </View>
  )
}

export default TrainerRequest