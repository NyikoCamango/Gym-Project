import React, {useEffect, useState, useContext} from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Moment from 'moment'
import { useIsFocused } from '@react-navigation/native';
import { UserContext } from "../../context/UserContext";

const UserDashboard = () => {
  const { user, setUser } = useContext(UserContext);


  console.log('Context ', user)

  const isFocused = useIsFocused();

  const [progress, setProgress] = useState()
    let exercise = [];
    let activityTotal = 1

    const getProgress = async () => {
    
      let url = `https://fetch-your-body.herokuapp.com/public/getUserProgress/1`;
      const response = await fetch(url, {
          method: "GET",
          headers: {
          "Content-Type": "application/json",
          }
      });
      const {progress} = await response.json()
      setProgress(progress)
    }

    const getPoints = () => {
      // console.log({progress})
      progress?.forEach(p => {
        activityTotal += p.points
      })
    }
    
    useEffect(() => {
      getProgress()
      getPoints()
    },[isFocused])
    
    
  progress?.forEach((x) => {
      exercise.push(
        <View
          key={x.id}
          style={{
            alignItems: "center",
            width: 340,
            height: 100,
            paddingTop: 8,
            marginBottom: 15,
          }}
          >
          <View
            style={{
              backgroundColor: "rgba(230,230,230,1)",
              borderRadius: 15,
              padding: 15,
              width: "95%",
              height: "95%",
            }}
            >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>{x.type}</Text>
            <Text>{`Points: ${x.points}`}</Text>
            <Text>{`Date: ${Moment(x.points).format('DD MMM')}`}</Text>
          </View>
        </View>
      );
      activityTotal = progress?.reduce((agg, c) => agg + c.points, 0)
    });
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      },
      progress: {
        width: "95%",
        height: 125,
        marginTop: 15,
        alignItems: "center",
      },
      title_box: {
        backgroundColor: "rgba(74,144,226,1)",
        borderRadius: 10,
        width: "95%",
        height: 40,
        justifyContent: "center",
      },
      title: {
        color: "rgba(255,255,255,1)",
        fontSize: 22,
        alignSelf: "center",
      },
      progress_container: {
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
        justifyContent: "center",
      },
      progress_box: {
        backgroundColor: "rgba(213,218,223,1)",
        width: "40%",
        height: 55,
        borderRadius: 10,
        marginHorizontal: 25,
      },
      progress_title: {
        color: "#121212",
        alignSelf: "center",
        marginVertical: 4,
      },
      progress_value: {
        color: "#121212",
        fontSize: 20,
        fontWeight: "bold",
        alignSelf: "center",
      },
      exercise_container: {
        width: "95%",
        height: 400,
        alignItems: "center",
      },
      box: {
        backgroundColor: "rgba(213,218,223,1)",
        borderRadius: 10,
        width: "95%",
        height: 275,
        alignSelf: "center",
      },
      btn_box: {
        flexDirection: "row",
        width: "75%",
        justifyContent: "center",
      },
      btn_shape: {
        backgroundColor: "rgba(178,108,233,1)",
        borderRadius: 10,
        width: "50%",
        height: 40,
        marginTop: 10,
        justifyContent: "center",
      },
      btn_text: {
        color: "rgba(255,255,255,1)",
        fontSize: 16,
        textAlign: "center",
        fontWeight: "bold",
      },
    });

    return (
      <View style={styles.container}>
        <View style={styles.progress}>
          <View style={styles.title_box}>
            <Text style={styles.title}>Today's Progress! 🏃</Text>
          </View>
          <View style={styles.progress_container}>
            <View style={styles.progress_box}>
              <Text style={styles.progress_title}>Current Points</Text>
              <Text style={styles.progress_value}>
                {`${activityTotal}/250`}
              </Text>
            </View>
            <View style={styles.progress_box}>
              <Text style={styles.progress_title}>Progress</Text>
              <Text style={styles.progress_value}>
                {`${(activityTotal/ 250 * 100).toFixed(2)}% to goal`}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.exercise_container}>
          <View
            style={[
              styles.title_box,
              { backgroundColor: "rgba(178,108,233,1)", marginVertical: 10 },
            ]}
          >
            <Text style={styles.title}>Today's Activities 🏋️</Text>
          </View>
          <ScrollView horizontal={false} style={styles.box}>
            <Text>{exercise}</Text>
          </ScrollView>
        </View>
      </View>
    );
}

export default UserDashboard;