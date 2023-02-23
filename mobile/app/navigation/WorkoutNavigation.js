import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Workouts from '../screens/workout/Workout';
import GymCalender from '../screens/workout/GymCalender';
import ExWidget from '../screens/workout/widgets/ExWidget';
import FreestyleCategories from '../screens/workout/widgets/FreestyleCategories';
import GymSchedule from '../screens/workout/GymSchedule';
import ExScreen from '../screens/workout/ExScreen';
import ExcerModal from '../screens/workout/widgets/ExcerModal';
import GymAgenda from '../screens/User/GymAgenda';
import WorkoutDay from '../screens/workout/WorkoutDay';

const Stack = createNativeStackNavigator();

const ExcersizeStack = () => (
  <Stack.Navigator>
      <Stack.Screen name="Workout" component={Workouts} options={{ headerShown: false }}/>
      <Stack.Screen name="WorkoutSchedule" component={GymSchedule} options={{ headerShown: false }}/>
      <Stack.Screen name="Excersize" component={ExScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="ExcersizeModal" component={ExcerModal} options={{ headerShown: false }}/>
      <Stack.Screen name="Agenda" component={GymAgenda} options={{ headerShown: false }}/>
      <Stack.Screen name="WorkoutDay" component={WorkoutDay} options={{ headerShown: false }}/>
  </Stack.Navigator>
)


const WorkoutStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="WorkoutScreen" component={ExcersizeStack} options={{ headerShown: false }}/>
        <Stack.Screen name="GymCalender" component={GymCalender} options={{ headerShown: false }}/>
        <Stack.Screen name="ExWidget" component={ExWidget} options={{ headerShown: false }}/>
        <Stack.Screen name="FreestyleCategories" component={FreestyleCategories} options={{ headerShown: false }}/>
    </Stack.Navigator>
)

const WorkoutNavigation = () => {
  return (<WorkoutStack/>);
}

export default WorkoutNavigation;