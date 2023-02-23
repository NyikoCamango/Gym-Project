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
import TrainerNavigation from './trainerNavigation';
import UserNavigation from './userNavigation';

const Stack = createNativeStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const WorkoutStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeTabs} options={{ headerShown: false }}/>
        <Stack.Screen name="addWorkout" component={Exercise} options={{ headerShown: false }}/>
    </Stack.Navigator>
)

const HomeTabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}
                options={{
                tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Events" component={Events}
                options={{
                tabBarLabel: 'Event',
                    tabBarIcon: ({ color }) => (
                        <MaterialIcons name="event" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Profile" component={Profile} 
                options={{
                tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Diets" component={Diets}
                options={{
                tabBarLabel: 'Workouts',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="fast-food" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen name="Workouts" component={Workouts}
             options={{
                tabBarLabel: 'Workouts',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="calendar" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const AuthStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }}/>
        <Stack.Screen name="Trainer" component={TrainerNavigation}  options={{ headerShown: false }}/>
        <Stack.Screen name="User" component={UserNavigation}  options={{ headerShown: false }}/>
    </Stack.Navigator>
)

const RootNavigation = () => {
  return (
    <NavigationContainer>
       <AuthStack/>
       {/* <TrainerNavigation /> */}
       {/* <UserNavigation /> */}
    </NavigationContainer>
  );
}

export default RootNavigation