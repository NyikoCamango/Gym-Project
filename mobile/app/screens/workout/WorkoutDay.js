import React, {useState, useCallback, useEffect, useRef} from 'react'
import {View, Text, Pressable} from 'react-native'
import { List, Surface, Button, Snackbar  } from 'react-native-paper';
import {Box, AspectRatio, Center, Heading, ScrollView, Stack, Image, useDisclose, Actionsheet, Modal, FormControl, Input} from 'native-base'
import ExerciseScreen from './ExerciseScreen';
import GymLevels, { JNR, MID, SNR, fomatSet } from '../../globals/weightreps';
import { useFocusEffect } from '@react-navigation/native';
import { getTrainee } from '../../globals/userUtils';

const WorkoutDay = ({navigation, route}) => {


  const [exercises, setExecises] = useState()
  const [workoutDay,setWorkoutDay] = useState(route?.params?.reservation?.todo)
  const [data, setData] = useState()
  const [progress, setProgress] = useState()
  const [levels, setLevels] = useState()
  const [weightLevel, setWeightLevel] = useState(0)
  const [snackbar, setSnackbar] = useState(false)
  const [done, setDone] = useState()
  const [loading, setLoading] = useState(false)

  const gymLevelRef = useRef()
  const snackbarRef = useRef()

  const [startEx, setStart] = useState()

  const [showModal, setShowModal] = useState(false);

  const addProgress = useCallback(async (ex, levels, reps) => {
    setLoading(true)


    //duplicate
    const trainee = await getTrainee()
    if( trainee?.level === 'JNR') {
      gymLevelRef.current = JNR
    } else if (trainee?.level === 'MID') {
      gymLevelRef.current = MID
    } else {
      gymLevelRef.current = SNR
    }
    const prog = {
      points: ex.points,
      exercise: ex.title,
      day: workoutDay?.day,
      totalWeight: gymLevelRef.current?.total[weightLevel],
      TraineeId: workoutDay?.TraineeId
    }

    // console.log('progress  ----------------  ', prog)

    let url = `https://fetch-your-body.herokuapp.com/public/userProgress`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({...prog})
    });

    const {userEvent} = await response.json()
    if (response.status === 201) {
        snackbarRef.current = (userEvent?.length - route.params.reservation.ids.split(',').length)
        if(snackbarRef.current === 0) {
          setSnackbar(true)
        }
        setLoading(false)
    }
  },[])

  const getUserWorkoutDay = useCallback(async () => {
    
    let url = `https://fetch-your-body.herokuapp.com/public/getDayWorkOuts`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
      "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ids: route.params.reservation.ids
      })
  });

    const trainee = await getTrainee()
    
    if( trainee?.level === 'JNR') {
      gymLevelRef.current = JNR
    } else if (trainee?.level === 'MID') {
      gymLevelRef.current = MID
    } else {
      gymLevelRef.current = SNR
    }
    
    // console.log('traineeeeeee   ', trainee, ' >>>>    ', gymLevelRef.current)
    const {exercises} = await response.json()
    setExecises(exercises)
  },[])

  
  const completeDay = useCallback(async() => {
    if(startEx) {
      const trainee = await getTrainee()
      const streak = snackbarRef?.current === 0 ? trainee?.streak + 1 : 0

      // console.log('STREWAK  ', streak)
      let url = `https://fetch-your-body.herokuapp.com/public/trainee/${trainee?.id}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({streak})
      });

      if(response.status === 204) {
        setSnackbar(true)
      }
    }
    setStart(!startEx)
  })

// console.log('Level ', gymLevelRef.current)

  useFocusEffect(
    useCallback(() => {
      getUserWorkoutDay()
    }, [])
  )
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

      return <ScrollView >
      <Box alignItems="center" bg={{
      linearGradient: {
        colors: ['lightBlue.300', 'violet.800'],
        start: [0, 0],
        end: [1, 0]
      }
    }}>
      


      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Body>
            <ExerciseScreen data={data}/>
          </Modal.Body>
        </Modal.Content>
      </Modal>


        <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
        borderColor: "coolGray.600",
        backgroundColor: "gray.700"
      }} _web={{
        shadow: 2,
        borderWidth: 0
      }} _light={{
        backgroundColor: "gray.50"
      }}>
          <Box>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image source={{
              uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
            }} alt="image" />
            </AspectRatio>
            <Center bg="violet.500" _dark={{
            bg: "violet.400"
          }} _text={{
            color: "warmGray.50",
            fontWeight: "700",
            fontSize: "xs"
          }} position="absolute" bottom="0" px="3" py="1.5">
              Day { workoutDay?.day }
            </Center>
          </Box>
          <Stack p="4" space={3}>
          <Surface style={{padding: 20}} elevation={4}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                { workoutDay?.title}
              </Heading>
            </Stack>
            <Text fontWeight="400">
              <Button icon="timer" color="black">
                { workoutDay?.duration } min
              </Button>
            </Text>
            <Text fontWeight="400">
              <Button icon="tools" color="black">
                { workoutDay?.tools}
              </Button>
            </Text>
            </Surface>
            
            
                <List.AccordionGroup>
                  {exercises?.map(ex => (
                  <List.Accordion key={ex.id} title={ex.title} description="5 sets" onLongPress={() => {
                    setData(ex)
                    setShowModal(true)}} id={ex.id} left={props =><Pressable ><List.Icon {...props} icon="dumbbell" /></Pressable>}>
                    <List.Item title="Set 1" description="Warm up" right={props => <Text>{fomatSet(gymLevelRef.current?.setOne, weightLevel)}</Text>}/>
                    <List.Item title="Set 2"  description="Warm up" right={props => <Text>{fomatSet(gymLevelRef.current?.setTwo, weightLevel)}</Text>}/>
                    <List.Item title="Set 3" right={props => <Pressable onPress={onOpen}><Text>{fomatSet(gymLevelRef.current?.setThree, weightLevel)}</Text></Pressable>} left={props => <List.Icon {...props} icon="check-circle" />}/>
                    <List.Item title="Set 4" right={props => <Pressable onPress={onOpen}><Text>{fomatSet(gymLevelRef.current?.setFour, weightLevel)}</Text></Pressable>} left={props => <List.Icon {...props} icon="check-circle" />}/>
                    <List.Item title="Set 5" right={props => <Pressable onPress={onOpen}><Text>{fomatSet(gymLevelRef.current?.setFive, weightLevel)}</Text></Pressable>} left={props => <List.Icon {...props} icon="check-circle" />}/>
                    {
                      startEx ? <List.Item right={props => <Button loading={loading} size="sm" mode="outlined" icon="check" onPress={() => addProgress(ex, gymLevelRef.current, {setThree: 0, setFour: 0, setFive: 0})}>
                      Complete All
                    </Button>}/> : null
                    }
                  </List.Accordion>
                  ))}
                </List.AccordionGroup>

                <Actionsheet isOpen={isOpen} onClose={onClose}>
                  <Actionsheet.Content>
                    <Actionsheet.Item onPress={() => {
                      setLevels({...levels}, {setOne: 0})
                      setWeightLevel(0)
                      onClose()
                    }}>{fomatSet(gymLevelRef.current?.setOne, 0)}</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => {
                      setLevels({...levels}, {setOne: 1})
                      setWeightLevel(1)
                      onClose()
                    }}>{fomatSet(gymLevelRef.current?.setOne, 1)}</Actionsheet.Item>
                    <Actionsheet.Item onPress={() => {
                      setLevels({...levels}, {setOne: 2})
                      setWeightLevel(2)
                      onClose()
                    }}>{fomatSet(gymLevelRef.current?.setOne, 2)}</Actionsheet.Item>
                  </Actionsheet.Content>
                </Actionsheet>

                <Box alignItems="center">
                  <Button size="sm" mode="contained" icon="play" onPress={completeDay}>
                  {startEx ? 'Complete Day' : 'Start'}
                </Button>
                </Box>
          </Stack>
        </Box>
      </Box>

      <Snackbar
              visible={snackbar}
              duration={5000}
              onDismiss={() => setSnackbar(false)}
              style={{
                marginBottom: 15,
              }}
              >
             {snackbarRef?.current === 0 ? 'you were on fire today streak++' : `today schedule not done, your streak is reset`}
            </Snackbar>
<View style={{marginBottom:50}}>

</View>
    
      </ScrollView>;
  };

export default WorkoutDay