
import TopBar from '../../components/Topbar'

import React, {useEffect, useCallback, useState} from "react"
import { ScrollView, Pressable} from "native-base"
import { List, Avatar, Card } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import Moment from 'moment'

const GymEvents = () => {

  const [events,setEvents] = useState([])
  const getTrainerEvents = async (id) => {
      let url = `https://fetch-your-body.herokuapp.com/public/events`;
      const response = await fetch(url, {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          },
      });
  
      const {events} = await response.json();
      console.log(events)
      setEvents(events);
  }
  useFocusEffect(
      useCallback(() => {
          getTrainerEvents(1);
      }, [])
    )


  return (
    <>
    {/* <TopBar title="Recurring Events"/> */}

        <ScrollView>
        <List.Section>
            <List.Subheader>Recurring Events</List.Subheader>
            <Pressable>
                {
                    events.map((event, index) => <Card.Title
                        key={index}
                        title={`${event.category} - ${event.title}`}
                        subtitle={`${event.description} - ${Moment(event.eventDate).format("DD MMM")}`}
                        left={(props) => <Avatar.Icon {...props}  />}
                        // right={(props) => <IconButton {...props} icon={event.status === 'COMING' ? "check" : "times"} onPress={() => {}} />}
                    />)
                }
           
            </Pressable>
        </List.Section>
    </ScrollView>
</>
  )
}

export default GymEvents