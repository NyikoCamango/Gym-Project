import React, { useState, useCallback, useRef } from "react";
import {View, Alert} from "react-native";
import { Text, Button,  Dialog, Portal, Card, Title, Paragraph } from 'react-native-paper';
import YoutubePlayer from "react-native-youtube-iframe";

// const data = {
// 		id: 1,
// 		title: "Barbell Squats (High Bar)",
// 		description: "Barbell Squats (High Bar)",
// 		video: "https://www.youtube.com/watch?v=-bJIpOq-LWk",
// 		tips: " 1. Rest the bar on your rear shoulder muscles and carefully unrack the barbell, stepping back from the rack\n\n2. Take a deep breath in and brace.",
// 		points: 15,
// 		category: 1,
// 	}

  const categories = ["LEGS", "CHEST", "FULL BODY", "BACK", "ARMS"]

const ExerciseScreen = ({navigation, data}) => {
  const [playing, setPlaying] = useState(false);

  const [visible, setVisible] = useState(true);

  const hideDialog = () => setVisible(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      // Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);


  return (

    <View style={{flex: 1}}>
    <Text style={{fontSize: 20, textAlign: 'center', paddingVertical: 10}}>{data.title}</Text>
    <YoutubePlayer
      height={200}
      play
      mute
      showinfo={0}
      loop={1}
      initialPlayerParams={{controls: false,loop: true, color: 'transparent', preventFullScreen: true, preventFullScreen: true	}}
      videoId={"iee2TATGMyI"}
      onChangeState={onStateChange}
    />
      <Card>
    <Card.Content>
      <Title>{data.description}</Title>
      <Paragraph><Title>{categories[data.category]}</Title></Paragraph>
      <Paragraph>Points: {data.points}</Paragraph>
      <Paragraph>{data.tips}</Paragraph>
    </Card.Content>
    <Card.Actions>
    
    <Paragraph>
    <Title>{`tips and errors to avoid\n`}</Title>
      <Paragraph>{data.tips}</Paragraph>
      </Paragraph>
    </Card.Actions>

  </Card>
      {/* <Button icon="clock" mode="contained" onPress={() => console.log('Pressed')} style={{width: '50%', position: 'absolute', bottom: 20, left: 20}}>
          Start
      </Button> */}
  </View>
  )
}


export default ExerciseScreen