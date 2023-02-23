import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import React, { useState } from 'react';
import {View, Text, Button} from 'react-native'

const DatePicker = ({triggerOpen}) => {
    const [date, setDate] = useState(new Date(1598051730000));

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
      };
    
      const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
          value: date,
          onChange,
          mode: currentMode,
          is24Hour: true
        })
      };
    
      const showDatepicker = () => {
        showMode('date');
      };
    
      const showTimepicker = () => {
        showMode('time');
      };

    return (
        <View>
        <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
        </View>
        <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
        </View>
        <Text>selected: {date.toLocaleString()}</Text>
    </View>
    )
}

export default DatePicker;