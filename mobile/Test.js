import React, {useCallback, memo, useState, useEffect} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Moment from 'moment'
// import { useFocusEffect } from '@react-navigation/native';

const vacation = {key: 'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key: 'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key: 'workout', color: 'green'};


const dat = '2022-08-07'

const AgendaScreen = memo(() => {

  const [items, setItems] = useState(undefined)
  const [schedule,setSchedule] = useState(null)


  const getUserSchedule = useCallback(async () => {
    
    let url = `https://fetch-your-body.herokuapp.com/public/userSchedule/1`;
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
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text style={{fontSize, color}}>{reservation.name}</Text>
      </TouchableOpacity>
    );
  },[])

  const loadItems = useCallback((day) => {
    const items = items || {};

    console.log('DAYYY -----------------------------------------------------', day)

    setTimeout(() => {
    //   for (let i = -15; i < 85; i++) {
    //     const time = day.timestamp + i * 24 * 60 * 60 * 1000;
    //     const strTime = timeToString(time);

    //     if (!items[strTime]) {
    //       items[strTime] = [];
          
    //       const numItems = Math.floor(Math.random() * 3 + 1);
    //       for (let j = 0; j < numItems; j++) {
    //         items[strTime].push({
    //           name: 'Item for ' + strTime + ' #' + j,
    //           height: Math.max(50, Math.floor(Math.random() * 150)),
    //           day: strTime
    //         });
    //       }
    //     }
    //   }

      schedule?.map(s => {
        console.log(schedule.length + ' --->>>')
        const day = timeToString(Moment(dat).add(s.day -1, 'days').format())
        items[day] = {
          name: s.title + '\n' + s.duration + 'mins',
          height: 50,
          day: day
        }
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
        <Text>This is empty date!</Text>
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
  let dates = Object.keys(items);

  const ret =  dates.reduce((acc,curr)=> (acc[curr]={dots: [workout]},acc),{});

  
  return ret
},[items])
    return (
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        // selected={new Date().toJSON().slice(0, 10)}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        showClosingKnob={true}
        markingType={'multi-dot'}
        pastScrollRange={10}
        futureScrollRange={10}
        refreshing={true}
        markedDates={getMarkedDates()}
        // markedDates={{
        //    '2022-05-08': {textColor: '#43515c',  dots: [vacation, massage, workout]},
        //    '2022-05-09': {textColor: '#43515c',  dots: [vacation, massage, workout]},
        //    '2022-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2022-05-21': {startingDay: true, color: 'blue'},
        //    '2022-05-22': {endingDay: true, color: 'gray'},
        //    '2022-05-24': {startingDay: true, color: 'gray'},
        //    '2022-05-25': {dots: [vacation, massage, workout]},
        //    '2022-05-26': {endingDay: true, color: 'gray'}}}
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

export default AgendaScreen