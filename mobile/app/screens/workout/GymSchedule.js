import React from 'react'
import { List  } from 'react-native-paper';

//OLD

const GymSchedule = ({navigation}) => {
  return (
        <List.Section>
        <List.Subheader>7 Days Schedule</List.Subheader>
        <List.Item onPress={() => navigation.navigate('Excersize')} title='Monday - Full Body' left={() => <List.Icon icon="folder" />} />
        <List.Item onPress={() => navigation.navigate('Excersize')} title='Tuesday - Rest' left={() => <List.Icon icon="folder" />} />
        <List.Item onPress={() => navigation.navigate('Excersize')} title='Wednesday - fullbody' left={() => <List.Icon icon="folder" />} />
        <List.Item onPress={() => navigation.navigate('Excersize')} title='Thursday - Rest' left={() => <List.Icon icon="folder" />} />
        <List.Item onPress={() => navigation.navigate('Excersize')} title='Friday - Legs' left={() => <List.Icon icon="folder" />} />
        <List.Item onPress={() => navigation.navigate('Excersize')} title='Saturday - Rest' left={() => <List.Icon icon="folder" />} />
        <List.Item onPress={() => navigation.navigate('Excersize')} title='Sunday - Rest' left={() => <List.Icon icon="folder" />} />
      </List.Section>
  )
}

export default GymSchedule