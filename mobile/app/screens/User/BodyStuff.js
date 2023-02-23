import React, {useState} from 'react'
import {View, Text, Pressable} from 'react-native'
import FullBtn from '../../components/fullbtn'
import { TextInput, Button } from 'react-native-paper';
import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import Moment from 'moment'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getUser } from '../../globals/userUtils';
import {useDisclose, Actionsheet, Icon, Select} from 'native-base'

const focusPoints = ['Chest', 'Arms', 'Back', 'Belly']

const cBmi = (w,h) => {
  if(w && h) {
    console.log('---------------------------- ', w, h)
    return w * (h*h)
  }
  return '0'
}

const BodySuff = ({navigation, route}) => {

  const [text, setText] = useState('');
  const [eventDate, setDate] = useState(new Date());

  const [bodyStuff, setBodyStuff] = useState({...route.params, goalStart: Date.now()})

  const onSelectChange = (event, selectedDate = Date.now()) => {
    const currentDate = selectedDate;
    setDate(currentDate);
    setBodyStuff({...bodyStuff, goalStart: currentDate})
};

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
        value: eventDate,
        onChange: onSelectChange,
        mode: 'date',
        is24Hour: true
    })
};

    const becomeTrainee = async () => {

      const user = await getUser()
        
      let url = `https://fetch-your-body.herokuapp.com/public/trainee`;
      const response = await fetch(url, {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify({
            streak: 0, names: user.name, UserId: user.id, trainer: 2, points: 500, bmi: (bodyStuff?.weight/(bodyStuff?.height * bodyStuff?.height)).toFixed(2),...bodyStuff
          })
      });

      const {trainee} = await response.json()
      if( trainee ) {
        try {
          const jsonValue = JSON.stringify(trainee)
          await AsyncStorage.setItem('trainee', jsonValue)
          await navigation.navigate('DefaultSchedules')
        } catch (e) {
        }
        console.log('done ', trainee)
      }else{
        console.log('not done ', response)
      }
    }

     const {
        isOpen,
        onOpen,
        onClose
      } = useDisclose();

  return (
        <View>
          <Text style={{fontWeight: 'bold', color: 'green', padding: 10}}>step 4</Text>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Body Stuff</Text>
          <Text style={{fontSize: 12, textAlign: 'center', paddingVertical: 10}}>last bits of information</Text>
          <View style={{marginHorizontal: 30, alignContent: 'center'}}>

          <TextInput
              mode="outlined"
              label="Weight"
              placeholder="Latest Body weight"
              onChangeText={text => setBodyStuff({...bodyStuff, weight: text})}
            />
          <TextInput
            mode="outlined"
            label="Height"
            placeholder="Latest Body height"
            onChangeText={text => setBodyStuff({...bodyStuff, height: text})}
          />
          <TextInput
            mode="outlined"
            label="Body Focus"
            showSoftInputOnFocus={false}
            onFocus={onOpen}
            value={bodyStuff?.focus}
            placeholder="Body Focus"
            onChangeText={text => setBodyStuff({...bodyStuff, height: text})}
          />
          
          <TextInput
            mode="outlined"
            label="BMI"
            editable={false}
            value={cBmi(bodyStuff?.weight && bodyStuff?.height)}
            placeholder="Latest Body Mass Index"
          />
          <Pressable onPress={showMode}>
              <TextInput
                editable={false}
                mode="outlined"
                label="Goal Start Date"
                value={Moment(eventDate).format('DD MMMM')}
                left={<TextInput.Affix text="From " />}
              />
            </Pressable>
          
            <TextInput
              mode="outlined"
              label="Goal Duration"
              placeholder="Goal duration"
              right={<TextInput.Affix text=" Months" />}
              onChangeText={text => setBodyStuff({...bodyStuff, duration: text})}
            />

            <View style={{paddingTop: 10}}></View>

          <Button icon="account-cowboy-hat" mode="contained" onPress={becomeTrainee} >
            Begin
          </Button>

          <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content>
              {focusPoints.map((fp, i) => (
                <Actionsheet.Item 
                key={fp}
                onPress={() => {
                  setBodyStuff({...bodyStuff, focus: fp})
                  onClose()
                }}>{fp}</Actionsheet.Item>
              ))}
            </Actionsheet.Content>
          </Actionsheet>
              
          </View>
        </View>
  )
}

export default BodySuff