import React, {useCallback, memo, useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Moment from 'moment'
import { Avatar } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';


const colors = [
  {key: 'vacation', color: 'red', selectedDotColor: 'blue'},
  {key: 'massage', color: 'blue', selectedDotColor: 'blue'},
]
const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};

const GymAgenda = memo(({navigation, route}) => {

  console.log('GOAL start == ', route?.params?.goalStart )
  const goalStart = new Date(route?.params?.goalStart).toISOString().split('T')[0];

  const [items, setItems] = useState(undefined)
  const [schedule,setSchedule] = useState(null)

  const getUserSchedule = useCallback(async () => {
    let url = `https://fetch-your-body.herokuapp.com/public/userSchedule/${route?.params?.id}`;
    const response = await fetch(url, {
        headers: {
        "Content-Type": "application/json",
        },
    });

    const {schedule} = await response.json()
    setSchedule(schedule)
  },[])

    useFocusEffect(
    useCallback(() => {
      getUserSchedule()
    }, [])
  )


  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }

  const  renderItem = useCallback((reservation, isFirst) => {
    const fontSize = isFirst ? 16 : 14;
    const color = isFirst ? 'black' : '#43515c';

    return (
      <TouchableOpacity
        style={[styles.item, {height: reservation.height}]}
        onPress={() => navigation.navigate('WorkoutDay', {...route?.params, reservation})}
      >
        {console.log('  rr ', reservation)}
        <View style={{flexDirection: 'row', alignContent: 'baseline'}}>
          <Avatar.Text size={24} label={reservation?.type} style={{marginRight: 10}} />
          <Text style={{fontSize, color}}>{reservation.name}</Text>
        </View>
      </TouchableOpacity>
    );
  },[])

  const loadItems = useCallback((day) => {
    const items = items || {};

    setTimeout(() => {
        for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime] = []
          }
        }
      }

      schedule?.map(s => {
        const day = timeToString(Moment(goalStart).add(s.day, 'days').format())
        items[day] = [{
          name: s.title + '\n' + s.duration + 'mins',
          height: 50,
          day: day,
          dots: 1,
          dn: s.day,
          ids: s.schedule,
          type: s.type,
          todo: s
        }]
      })
      
      console.log('ITEMS ', items)
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      console.log('NEW NEW NEW ', newItems)
      setItems(newItems)
    }, 1000);
  },[schedule])

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>Rest Day!</Text>
        <Text>Very important to rest muscles</Text>
      </View>
    );
  }

const getMarkedDates = useCallback(() => {
  if(items){
    const working = Object.fromEntries(Object.entries(items).filter(([key, val]) => val.length > 0));  
    let dates = Object.keys(working);
    const ret =  dates.reduce((acc,curr)=> {
      console.log('KANYE ', curr)
      return  (acc[curr]={dots: colors},acc)
    },{});
    

    console.log('CLEAN ', working)
    
    return ret
  }
},[items])

    return (
      <>
      <Text style={{fontSize: 20, textAlign: 'center', padding: 10}}>Body Goal Plan</Text>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        showClosingKnob={true}
        markingType={'multi-dot'}
        pastScrollRange={5}
        futureScrollRange={5}
        refreshing={true}
        markedDates={getMarkedDates()}
        />
      </>
    );
})

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

export default GymAgenda