import React, {useEffect, useCallback, useState} from "react"
import { ScrollView, Pressable} from "native-base"
import { List, Button, Divider, Avatar, Card, Paragraph, Title  } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';
import TopBar from "../components/Topbar";

const Events = ({ navigation }) => {

  // const [agendaItens, setAgendaItens] = useState({
  //   "2019-09-17": [
  //     {
  //       bookDescription:
  //         "Ex in pariatur aliqua cupidatat ut proident id in nisi ad aliqua sit sint.",
  //       bookingTitle: "Make-up w/ Daniela",
  //       color: "#f8c291",
  //       status: "cancelled",
  //     },
  //     {
  //       bookDescription:
  //         "Ex in pariatur aliqua cupidatat ut proident id in nisi ad aliqua sit sint.",
  //       bookingTitle: "Make-up w/ Bruna",
  //       color: "#82ccdd",
  //       status: "done",
  //     },
  //   ],
  //   "2019-09-19": [
  //     {
  //       bookDescription:
  //         "Ex in pariatur aliqua cupidatat ut proident id in nisi ad aliqua sit sint.",
  //       bookingTitle: "Make-up w/ Esperança",
  //       color: "#fad390",
  //       status: "cancelled",
  //     },
  //   ],
  //   "2019-09-20": [
  //     {
  //       bookDescription:
  //         "Ex in pariatur aliqua cupidatat ut proident id in nisi ad aliqua sit sint.",
  //       bookingTitle: "Make-up w/ Esperança",
  //       color: "#b8e994",
  //       status: "cancelled",
  //     },
  //   ],
  //   // https://flatuicolors.com/palette/fr
  // });

  // const renderItem = useCallback(
  // () => (item) => (
  //   <TouchableOpacity
  //       onPress={() => onPress}
  //       style={{
  //         marginRight: 13,
  //         borderRadius: 0,
  //         height: 90,
  //         marginVertical: 10,
  //       }}
  //     >
  //       <Box
  //         colors={["#54B8C1", "#2A828E"]}
  //         style={{
  //           flex: 1,
  //           padding: 15,
  //           borderRadius: 16,
  //           width: "100%",
  //         }}
  //       >
  //         <View style={{ flex: 1, width: "100%" }}>
  //           <Text
  //             numberOfLines={2}
  //             style={{ color: 'red', marginBottom: 8 }}
  //           >
  //             YOGA Session: Mr Somebody
  //           </Text>
  //           <Text numberOfLines={1} style={{ color: 'red' }}>
  //             9:30am - 10:00am @ 123
  //           </Text>
  //         </View>
  //       </Box>
  //     </TouchableOpacity>
  // ),
  // );

  // const rowHasChanged = useCallback(() => (r1, r2) => r1.name !== r2.name, []);

  // const renderEmptyDate = useCallback(() => () => <View />, []);

  // const setEmptyKey = useCallback(
  //   () => (obj) => {
  //     if (!_.hasIn(agendaItens, `${obj.dateString}`)) {
  //       const clone = Object.assign({}, agendaItens, { [obj.dateString]: [] });
  //       setAgendaItens({ ...clone });
  //     }
  //   },
  //   []
  // );


  const [events,setEvents] = useState([])

    const getEvents = async () => {
        let url = `https://ourbackend.onrender.com/public/events`;
        const response = await fetch(url, {
            method: "GET",
            headers: {
            "Content-Type": "application/json",
            },
        });
    
        const {events} = await response.json();
        setEvents(events);
    }
    useFocusEffect(
        useCallback(() => {
          getEvents();
        }, [])
      )


  

  return (

        <ScrollView>
                <List.Section>
                    <List.Subheader>Attend Events</List.Subheader>
                    <Pressable>
                        {
                            events.map(event => (<Card>
                              <Card.Cover source={{ uri: 'https://library.kissclipart.com/20180905/flq/kissclipart-exercise-clip-art-png-clipart-exercise-clip-art-0b9802fdebbf4ee7.jpg' }} />
                              <Card.Content>
                              <Title>{event.title}</Title>
                              <Paragraph>{event.description}</Paragraph>
                            </Card.Content>
                                <Card.Actions>
                                  <Button>Attend</Button>
                                  </Card.Actions>
                              </Card>)
                            )
                        }
                    </Pressable>
                </List.Section>
            </ScrollView>
    // <View style={{ flex: 1 }}>
    //   <CalendarView
    //     items={agendaItens}
    //     selected={"2019-09-17"}
    //     renderItem={renderItem()}
    //     renderEmptyDate={renderEmptyDate()}
    //     rowHasChanged={rowHasChanged()}
    //     onDayPress={setEmptyKey()}
    //     onDayChange={setEmptyKey()}
    //     theme={{
    //     //   calendarBackground: 'green',
    //       selectedDayBackgroundColor: 'yellow',
    //       dotColor: 'gray',
    //     }}
    //     // style={{ backgroundColor: 'red' }}
    //   />

    
    // </View>
  );
};

export default Events;