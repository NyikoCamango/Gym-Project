import React, {useState, useMemo} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';

import { NativeBaseProvider } from "native-base";
import Login from './app/screens/userManagement/Login';
import Register from './app/screens/userManagement/Register';
import UserDashboard from './app/screens/User/UserDashboard';
import Exercise from './app/screens/workout/Exercise';
import UserStats from './app/screens/workout/UserStats';
import RootNavigation from './app/navigation/rootNavigation';
import TrainerNavigation from './app/navigation/trainerNavigation';
import GymCalender from './app/screens/workout/GymCalender';
import { UserContext } from './app/context/UserContext';
import GymAgenda from './app/screens/User/GymAgenda';
import ExerciseScreen from './app/screens/workout/ExerciseScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import Workouts from './app/screens/workout/Workout';
import WorkoutDay from './app/screens/workout/WorkoutDay';
import GymStats from './app/screens/workout/GymStats';
import BodySuff from './app/screens/User/BodyStuff';
import TrainerRequest from './app/screens/User/TrainersRequest';
import DefaultSchedules from './app/screens/User/DefaultScedules';

const App = () => {

  const [userName, setUserName] = useState();
  const value = useMemo(() => ({ userName, setUserName }), [userName]
  );


  return (
    <UserContext.Provider value={value}>
    <NativeBaseProvider>
    <PaperProvider>
      {/* <GymStats /> */}
      <RootNavigation/>
      {/* <DefaultSchedules /> */}

      {/* <BodySuff /> */}
      {/* <TrainerRequest /> */}



      {/* <GymAgenda /> */}

      {/* <WorkoutDay /> */}

      {/* <ExerciseScreen /> */}
      {/* <Workouts /> */}

      {/* <GymCalender /> */}
      {/* <TrainerNavigation /> */}
      </PaperProvider>
    </NativeBaseProvider>
    </UserContext.Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
