import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import UserWelcome from '../screens/User/Welcome';
import WorkoutNavigation from './WorkoutNavigation';
import SelectGender from '../screens/User/SelectGender';
import Level from '../screens/User/Level';
// import UserDashboard from '../screens/User/UserDashboard';
import GymEvents from '../screens/User/GymEvents';
import GymStats from '../screens/workout/GymStats';
import BodySuff from '../screens/User/BodyStuff';
import DefaultSchedules from '../screens/User/DefaultScedules';
import TrainerRequest from '../screens/User/TrainersRequest';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const DashBoard = () => (
  <Tab.Navigator>
    <Tab.Screen name="Workouts" component={WorkoutNavigation} options={{ headerShown: false, tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="weight-lifter" color={color} size={26} />)}}/>

    <Tab.Screen name="Stats" component={GymStats} options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="chart-bar-stacked" color={color} size={26} />)}}/>
    <Tab.Screen name="GymEvents" component={GymEvents}  options={{tabBarIcon: ({ color }) => (<MaterialCommunityIcons name="calendar" color={color} size={26} />)}} />
  </Tab.Navigator>
)

const MainTrainerStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="WelcomeUser" component={UserWelcome} options={{ headerShown: false }}/>
        <Stack.Screen name="gender" component={SelectGender} options={{ headerShown: false }}/>
        <Stack.Screen name="level" component={Level} options={{ headerShown: false }}/>
        <Stack.Screen name="BodyStuff" component={BodySuff} options={{ headerShown: false }}/>
        <Stack.Screen name="DefaultSchedules" component={DefaultSchedules} options={{ headerShown: false }}/>
        <Stack.Screen name="TrainerRequest" component={TrainerRequest} options={{ headerShown: false }}/>
        <Stack.Screen name="Dashboard" component={DashBoard} options={{ headerShown: false }}/>
    </Stack.Navigator>
)

const UserNavigation = () => {
  return (
       <MainTrainerStack/>
  );
}

export default UserNavigation;