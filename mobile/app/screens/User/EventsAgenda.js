import React, {useCallback, memo, useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Moment from 'moment'
import { useFocusEffect } from '@react-navigation/native';

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};



// const GymAgenda = memo(({navigation, route}) => {
const GymAgenda = memo(({navigation}) => {
  let goalStart = '2022-08-07'
  const dat = new Date(goalStart).toISOString().split('T')[0];
  const route = {params:{id: 1}}
  // const dat = new Date(route.params.goalStart).toISOString().split('T')[0];

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
    console.log('SCHEDULE ', schedule)
    setSchedule(schedule)
  },[])

  useEffect(() => {
    getUserSchedule()
  }, [getUserSchedule])

  //   useFocusEffect(
  //   useCallback(() => {
  //     getUserSchedule()
  //   }, [])
  // )


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
        onPress={() => navigation.navigate('WorkoutDay')}
        // onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{fontSize, color}}>{reservation.name}</Text>
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
        console.log('-----', s)
        const day = timeToString(Moment(dat).add(s.day, 'days').format())
        console.log('sssssssssssssss     ', s)
        items[day] = [{
          name: s.title + '\n' + s.duration + 'mins',
          height: 50,
          day: day,
          dots: "workout"
        }]
      })
      
      // console.log('ITEMS ', items)
      const newItems = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });

      setItems(newItems)
    }, 1000);
  },[schedule])

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text>Rest Day!</Text>
      </View>
    );
  }

  // const getCurrentDay = useCallback(() => Moment().format('DD MM YYYY'),[])

  // console.log('MOMENT ', Moment('2022-08-07').format('DD MM YYYY'))

  // useEffect(() => {
  //     getUserSchedule()
  //   }, [getUserSchedule])
  // useFocusEffect(
  //   useCallback(() => {
  //     getUserSchedule()
  //   }, [])
  // )
// console.log(items)


const getMarkedDates = useCallback(() => {
  if(items){
    const working = Object.fromEntries(Object.entries(items).filter(([key, val]) => val.length > 0));  
    let dates = Object.keys(working);
    const ret =  dates.reduce((acc,curr)=> (acc[curr]={dots: [workout]},acc),{});
    

    console.log('CLEAN ', ret)
    
    return ret
  }
},[items])

    return (
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