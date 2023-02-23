import React from 'react'
import {View, Text} from 'react-native'
import FullBtn from '../../components/fullbtn'
import { Icon, Select, Button, ScrollView } from 'native-base';
import { Avatar, Card, Title, Paragraph, Badge, List} from 'react-native-paper';
import { getTrainee } from '../../globals/userUtils';


const beginner_weight = [
  {
    title: 'The 5 month weight loss by Nyiko',
    sub: 'Follow this schedule for good results',
    tags: ['weight loss', 'beginner', '6 months', 'belly'],

    plan: [
      {
        day: 1,
        title: 'Leg Day',
        desription: 'develop core function',
        schedule: '[1,2,3,5]',
        duration: 120,
        type: 'EX',
        tools: 'YOGA MATT - BENCH - DUMBELS'
      },
      {
        day: 3,
        title: 'YOGA',
        desription: 'develop core function',
        schedule: '[10,21,13,15]',
        duration: 60,
        type: 'EX',
        tools: 'YOGA MATT - BENCH - DUMBELS'
      },
      {
        day: 5,
        title: 'Chest',
        desription: 'develop core function',
        schedule: '[10,21,13,15]',
        duration: 60,
        type: 'EX',
        tools: 'YOGA MATT - BENCH - DUMBELS'
      },
      {
        day: 7,
        title: 'Cardio',
        desription: 'develop core function',
        schedule: '[10,21,13,15]',
        duration: 60,
        type: 'EX',
        tools: 'YOGA MATT - BENCH - DUMBELS'
      },
    ],
  },
  {
    title: 'The Ultimate Weight loss in 8 months',
    sub: 'get in shape for summer',
    tags: ['weight', 'toning', 'summer body', 'butt', 'beginner'],

    plan: [
      {
        day: 1,
        desription: 'develop core function',
        title: 'Bench day',
        schedule: '[1,2,3,5]',
        duration: 120,
        type: 'EX',
        tools: 'YOGA MATT - BENCH - DUMBELS'
      },
      {
        day: 3,
        title: 'Back',
        desription: 'develop core function',
        schedule: '[10,21,13,15]',
        duration: 60,
        type: 'EX',
        tools: 'YOGA MATT - BENCH - DUMBELS'
      },
      {
        day: 5,
        title: 'Dumbels',
        desription: 'develop core function',
        schedule: '[10,21,13,15]',
        duration: 60,
        type: 'EX',
        tools: 'YOGA MATT - BENCH - DUMBELS'
      },
      {
        day: 7,
        title: 'Leg Day',
        desription: 'develop core function',
        schedule: '[10,21,13,15]',
        duration: 60,
        type: 'EV',
        tools: 'YOGA MATT - BENCH - DUMBELS'
      },
    ]
  }
]

const DefaultSchedules = ({navigation}) => {

  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  const startJourney = async (goal) => {
    
    const trainee = await getTrainee()

    console.log()

    const schedule = goal.plan.map(p => ({...p, TraineeId: trainee.id}))

    let url = `https://fetch-your-body.herokuapp.com/public/bulkaddSchedule`;
    const response = await fetch(url, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(schedule)
    });

    const res = await response.json()
    if(res.schedules.length > 0 && response.status === 201){
      navigation.navigate('Dashboard')
    } else {
      console.log('Not here ', response.json())
    }
  }
  
  return (
        <ScrollView>
          <Text>step 3</Text>
          <Text style={{fontSize: 30, textAlign: 'center'}}>Get Up and running</Text>
          <View style={{marginHorizontal: 30, alignContent: 'center'}}>

          <Button icon="camera" mode="contained" onPress={() => navigation.navigate('TrainerRequest')}>
            Get Bespoke Goal from trainer
          </Button>

            {
              beginner_weight.map((goal, index) => (
                <Card style={{marginTop: 15}} key={index}>
                <Card.Content>
                  <Title>{goal.title}</Title>
                  <Paragraph>{goal.sub}</Paragraph>

                  <List.Section>
                    <List.Accordion title="View Schedule">
                      {goal.plan.map((p, i) => <List.Item title={p.title +' | '+ p.duration + ' min'} key={i}/>)}
                      
                    </List.Accordion>
                  </List.Section>
                </Card.Content>

                <Card.Actions>
                  <Button onPress={() => startJourney(goal)}>Begin</Button>
                  <View style={{paddingLeft: 40, flexDirection: 'row', justifyContent: 'space-evenly'}}>
                    {goal.tags.map(t => <Badge key={t}>{t}</Badge>)}
                  </View>
                </Card.Actions>
              </Card>
              ))
            }
          </View>
        </ScrollView>
  )
}

export default DefaultSchedules