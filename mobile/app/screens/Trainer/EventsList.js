import React, {useEffect, useCallback, useState, useContext} from "react"
import { ScrollView, Pressable} from "native-base"
import { List, Divider, Avatar, Card, IconButton } from 'react-native-paper';
import TopBar from "../../components/Topbar";
import { useFocusEffect } from '@react-navigation/native';
import Moment from 'moment'
import { UserContext } from "../../context/UserContext";
import { getUser } from "../../globals/userUtils";

const filterEvents = (events) => {
    let result = events.filter(event => event.status !== 'REJECTED')
    console.log("BEFORE ", result)
    result = result.sort((a, b) => b.eventDate - a.eventDate)
    console.log("SORTED ", result)
    return result;
}

const EventsList = () => {

    const { user, setUser } = useContext(UserContext);
    const [events,setEvents] = useState([])

    const getTrainerEvents = async (id) => {
        let url = `https://fetch-your-body.herokuapp.com/public/getTrainerEvents/${id}`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });
        
        const {events} = await response.json();
        setEvents(filterEvents(events));
    }
    useFocusEffect(
        useCallback(() => {
            getTrainerEvents(1);
        }, [])
    )
    getUser().then(u => console.log('User ', u))
        

    return (
        <>
            <TopBar title="Events"/>
      
                <ScrollView>
                <List.Section>
                    <List.Subheader>My Events</List.Subheader>
                    <Pressable>
                        {
                            events.map(event => <Card.Title
                                title={Moment(event.eventDate).format('ddd DD MMM')}
                                // title={Moment(event.eventDate).format('ddd DD MMM YY')}
                                subtitle={event.title + ' - ' +  event.description}
                                left={(props) => <Avatar.Icon {...props} icon="calendar" />}
                                right={(props) => <IconButton {...props} icon={event.status === 'COMING' ? "check" : "account-clock"} onPress={() => {}} />}
                            />)
                        }
                   
                    </Pressable>
                </List.Section>
            </ScrollView>
        </>
    )
}

export default EventsList