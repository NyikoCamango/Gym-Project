import React, {useState, useCallback} from 'react'
import {View, Pressable, StyleSheet} from 'react-native'
import { Surface, Text } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native'

const FreestyleCategories = ({navigation, route}) => {

  const [exercies, setEx] = useState([])

  // console.log(route?.params.ids)
  
  const getEx = useCallback(async () => {
    
    let url = `https://fetch-your-body.herokuapp.com/public/exercise-schedule`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({ids: route?.params.ids})
    });

    const {exs} = await response.json()
    // console.log('HERE ', exs)
    if(response.status !== 400) {
      setEx(exs)
    } else {
    }
  },[])

  useFocusEffect(useCallback(() => {getEx()}, []))


  return (
    <>
      <Text style={{fontSize: 30, padding: 20}}>{route?.params?.category}</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly', flexWrap: 'wrap'}}>
      {
        exercies?.map(e => (
          <Pressable onPress={() => {}} key={e.id}>
            <Surface style={styles.surface} elevation={4}>
              <Text>{e.title}</Text>
            </Surface>
          </Pressable>
        ))
      }
      </View>
    </>
  )
}

export default FreestyleCategories

const styles = StyleSheet.create({
  surface: {
    padding: 8,
    height: 120,
    width: 120,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});