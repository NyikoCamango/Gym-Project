import React, {useRef, useCallback} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {ExpandableCalendar, AgendaList, CalendarProvider, WeekCalendar} from 'react-native-calendars';
import AgendaItem from './widgets/AgendaItem';
import {getTheme, themeColor, lightThemeColor} from './widgets/themes';

const today = new Date().toISOString().split('T')[0];
const fastDate = getPastDate(3);
const futureDates = getFutureDates(12);
const dates = [fastDate, today].concat(futureDates);

function getFutureDates(numberOfDays) {
  const array = [];
  for (let index = 1; index <= numberOfDays; index++) {
    let d = Date.now();
    if (index > 3) {
      // set dates on the next month
      const newMonth = new Date(d).getMonth() + 1;
      d = new Date(d).setMonth(newMonth);
    }
    const date = new Date(d + 864e5 * index); // 864e5 == 86400000 == 24*60*60*1000
    const dateString = date.toISOString().split('T')[0];
    array.push(dateString);
  }
  return array;
}
function getPastDate(numberOfDays) {
  return new Date(Date.now() - 864e5 * numberOfDays).toISOString().split('T')[0];
}

const getMarkedDates = () => {
  const marked = {};

  agendaItems.forEach(item => {
    // NOTE: only mark dates with data
    if (item.data && item.data.length > 0 && item.data[0]) {
      marked[item.title] = {marked: true};
    } else {
      marked[item.title] = {disabled: true};
    }
  });
  return marked;
}

const agendaItems = [
  {
    title: dates[0],
    data: [{hour: '12am', duration: '1h', title: 'First Yoga'}]
  },
  {
    title: dates[1],
    data: [
      {hour: '4pm', duration: '1h', title: 'Pilates ABC'},
      {hour: '5pm', duration: '1h', title: 'Vinyasa Yoga'}
    ]
  },
  {
    title: dates[2],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'}
    ]
  },
  {
    title: dates[3],
    data: [{hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}]
  },
  {
    title: dates[4],
    data: [{}]
  },
  {
    title: dates[5],
    data: [
      {hour: '9pm', duration: '1h', title: 'Middle Yoga'},
      {hour: '10pm', duration: '1h', title: 'Ashtanga'},
      {hour: '11pm', duration: '1h', title: 'TRX'},
      {hour: '12pm', duration: '1h', title: 'Running Group'}
    ]
  },
  {
    title: dates[6], 
    data: [
      {hour: '12am', duration: '1h', title: 'Ashtanga Yoga'}
    ]
  },
  {
    title: dates[7], 
    data: [{}]
  },
  {
    title: dates[8],
    data: [
      {hour: '9pm', duration: '1h', title: 'Pilates Reformer'},
      {hour: '10pm', duration: '1h', title: 'Ashtanga'},
      {hour: '11pm', duration: '1h', title: 'TRX'},
      {hour: '12pm', duration: '1h', title: 'Running Group'}
    ]
  },
  {
    title: dates[9],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'}
    ]
  },
  {
    title: dates[10], 
    data: [
      {hour: '12am', duration: '1h', title: 'Last Yoga'}
    ]
  },
  {
    title: dates[11],
    data: [
      {hour: '1pm', duration: '1h', title: 'Ashtanga Yoga'},
      {hour: '2pm', duration: '1h', title: 'Deep Stretches'},
      {hour: '3pm', duration: '1h', title: 'Private Yoga'}
    ]
  },
  {
    title: dates[12], 
    data: [
      {hour: '12am', duration: '1h', title: 'Last Yoga'}
    ]
  },
  {
    title: dates[13], 
    data: [
      {hour: '12am', duration: '1h', title: 'Last Yoga'}
    ]
  }
];

const ITEMS = agendaItems;


const GymCalender = ({navigation}) => {

  const {weekView} = false;
  const marked = useRef(getMarkedDates());
  const theme = useRef(getTheme());
  const todayBtnTheme = useRef({
    todayButtonTextColor: 'red'
  });

  const onDateChanged = useCallback((/* date, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
  }, []);

  const onMonthChange = useCallback((/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  }, []);

  const renderItem = useCallback(({item}) => {
    return <AgendaItem item={item}/>;
  }, []);

  return (
    <View>
      <Text>Gym calander</Text>
      <Pressable onPress={() => navigation.navigate('ExWidget')}> 
        <Text>Pick Day</Text>
      </Pressable>

      {/* <CalendarList
    // Callback which gets executed when visible months change in scroll view. Default = undefined
    onVisibleMonthsChange={(months) => {console.log('now these months are visible', months);}}
    // Max amount of months allowed to scroll to the past. Default = 50
    pastScrollRange={50}
    // Max amount of months allowed to scroll to the future. Default = 50
    futureScrollRange={50}
    // Enable or disable scrolling of calendar list
    scrollEnabled={true}
    // Enable or disable vertical scroll indicator. Default = false
    showScrollIndicator={false}
/> */}





<CalendarProvider
      date={ITEMS[1].title}
      onDateChanged={onDateChanged}
      onMonthChange={onMonthChange}
      showTodayButton
      disabledOpacity={0.6}
      theme={todayBtnTheme.current}
      // todayBottomMargin={16}
    >
      {weekView ? (
        <WeekCalendar firstDay={1} markedDates={marked.current}/>
      ) : (
        <ExpandableCalendar
          // horizontal={false}
          // hideArrows
          // disablePan
          // hideKnob
          initialPosition={ExpandableCalendar.positions.OPEN}
          // calendarStyle={styles.calendar}
          // headerStyle={styles.calendar} // for horizontal only
          // disableWeekScroll
          theme={theme.current}
          disableAllTouchEventsForDisabledDays
          firstDay={1}
          markedDates={marked.current}
          // leftArrowImageSource={leftArrowIcon}
          // rightArrowImageSource={rightArrowIcon}
          animateScroll
        />
      )}
      <AgendaList
        sections={ITEMS}
        renderItem={renderItem}
        scrollToNextEvent
        sectionStyle={styles.section}
        dayFormat={'YYYY-MM-d'}
      />
    </CalendarProvider>





    </View>
  )
}

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20
  },
  section: {
    backgroundColor: 'red',
    color: 'blue',
    textTransform: 'capitalize'
  }
});

export default GymCalender