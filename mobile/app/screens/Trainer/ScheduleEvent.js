import React, {useState} from "react"
import { Box, Select , TextArea , Heading, VStack, FormControl, Input, Link, Button, HStack, Center, ScrollView } from "native-base";
import DatePicker from "../../components/DateTimePicker";

import DateTimePicker, {DateTimePickerAndroid} from '@react-native-community/datetimepicker';

const thumbnail = 'https://toppng.com/uploads/preview/event-accepted-filled-icon-event-icon-11553508126tpo9z8k2ym.png'
const ScheduleEvent = ({navigation}) => {
    const [eventDate, setDate] = useState(new Date());
    const [category, setCategory] = useState('')
    const [title, setTitle] = React.useState("");
    const [description, setDescription] = React.useState("");
    const [maxAttendees, setMax] = React.useState("");

    const onSelectChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: eventDate,
            onChange: onSelectChange,
            mode: 'date',
            is24Hour: true
        })
    };

    const scheduleGymEvent = async () => {
        let url = `https://fetch-your-body.herokuapp.com/public/addEvent`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title, 
                description, 
                eventDate, 
                category, 
                thumbnail, 
                eventHost: 1,
                maxAttendees: 0, 
            })
        });
    }

    return (
        <Center w="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
          <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Create A GYM Event
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            get your trainees on their goals
          </Heading>
  <ScrollView>
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Title</FormControl.Label>
              <Input onChangeText={text => setTitle(text)} />
            </FormControl>
            <FormControl>
              <FormControl.Label>Description</FormControl.Label>
              <TextArea  onChangeText={text => setDescription(text)} />
            </FormControl>
            {/* <FormControl>
              <FormControl.Label>Max Attendees</FormControl.Label>
              <Input type="number-pad" onChangeText={text => setMax(text)} />
            </FormControl> */}
            <FormControl>
              <FormControl.Label>Date</FormControl.Label>
              <Input editable={false} value={eventDate.toLocaleString()}/>
              <Button onPress={showMode} editable={false} />
            </FormControl>
            <FormControl>
              {/* <FormControl.Label>Add Thumbnail</FormControl.Label> */}
              <Select
                placeholder="Select Category"
                selectedValue={category}
                width={150}
                onValueChange={(itemValue) => setCategory(itemValue)}
                >
                <Select.Item label="YOGA" value="YOGA" />
                <Select.Item label="DANCING" value="DANCING" />
                </Select>
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={scheduleGymEvent}>
              Request Event Schedule
            </Button>
          </VStack>
          </ScrollView>
        </Box>
      </Center>
      )
}

export default ScheduleEvent