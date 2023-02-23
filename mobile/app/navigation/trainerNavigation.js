import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/userManagement/Login';
import Register from '../screens/userManagement/Register';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Events from '../home/Events';
import Profile from '../home/Profile';
import Diets from '../home/Diets';
import Workouts from '../home/Workouts';

import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Home from '../home/Home';
import Exercise from '../screens/workout/Exercise';
import MembersList from '../screens/Trainer/MembersList';
import EventsList from '../screens/Trainer/EventsList';
import ScheduleEvent from '../screens/Trainer/ScheduleEvent';
import TrainerWelcome from '../screens/Trainer/Welcome'
import GymAgenda from '../screens/User/GymAgenda'

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MemberStack = () => {

  return (
    <Stack.Navigator>
      <Stack.Screen name="MembersScreen" component={MembersList} options={{ headerShown: false }}/>
      <Stack.Screen name="MemberSchedule" component={GymAgenda} options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}


const HomeTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Members" component={MemberStack} options={{ headerShown: false }}/>
      <Tab.Screen name="ScheduleEvent" component={ScheduleEvent} options={{ headerShown: false }}/>
      <Tab.Screen name="EventsList" component={EventsList} options={{ headerShown: false }}/>
    </Tab.Navigator>
  )
}

const MainTrainerStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="TrainerHome" component={HomeTabs} options={{headerShown: false}} />
        <Stack.Screen name="welcomeTrainer" component={TrainerWelcome} options={{ headerShown: false }}/>
    </Stack.Navigator>
)

const TrainerNavigation = () => {
  return (<MainTrainerStack/>);
}

export default TrainerNavigation;