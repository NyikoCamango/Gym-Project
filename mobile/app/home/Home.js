import React, {useEffect} from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import GoogleFit, { Scopes, BucketUnit } from 'react-native-google-fit'

const Home = ({navigation}) => {

//   useEffect(()=> {
//     const options = {
//         scopes: [
//           Scopes.FITNESS_ACTIVITY_READ,
//           Scopes.FITNESS_ACTIVITY_WRITE,
//           Scopes.FITNESS_BODY_READ,
//           Scopes.FITNESS_BODY_WRITE,
//           Scopes.FITNESS_NUTRITION_WRITE,
//           Scopes.FITNESS_SLEEP_READ,
//           Scopes.FITNESS_SLEEP_WRITE
//         ],
//       }
//       GoogleFit.authorize(options)
//         .then(authResult => {
//           if (authResult.success) {
//               console.log('yebo')
//             // dispatch("AUTH_SUCCESS");
//           } else {
//             // dispatch("AUTH_DENIED", authResult.message);
//           }
//         })
//         .catch(() => {
//         //   dispatch("AUTH_ERROR");
//         })
// },[])

    let exercise = [];
    let activityTotal = 0.0;
    const activities = [];

  
    [1,2,3].forEach((x) => {
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
              borderRadius: 15,
              padding: 15,
              width: "95%",
              height: "95%",
            }}
          >
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>{"Name"}</Text>
            <Text>{"Duration: " + 12 + " min"}</Text>
            <Text>{"Calories: " + 12 + " cal"}</Text>
          </View>
        </View>
      );
      activityTotal = 500;
    });

    const opt = {
      startDate: "2017-01-01T00:00:17.971Z", // required ISO8601Timestamp
      endDate: new Date().toISOString(), // required ISO8601Timestamp
      bucketUnit: BucketUnit.DAY, // optional - default "DAY". Valid values: "NANOSECOND" | "MICROSECOND" | "MILLISECOND" | "SECOND" | "MINUTE" | "HOUR" | "DAY"
      bucketInterval: 1, // optional - default 1. 
    };

    // const test = async () => {
    //   const res = await GoogleFit.getDailyStepCountSamples(opt)
    //   console.log('Daily steps ----------------------------------->>> ', res)
    // }

    // test()
    
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
        // backgroundColor: "rgba(74,144,226,1)",
        borderRadius: 10,
        width: "95%",
        height: 40,
        justifyContent: "center",
      },
      title: {
        // color: "rgba(255,255,255,1)",
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
        // backgroundColor: "rgba(213,218,223,1)",
        width: "40%",
        height: 55,
        borderRadius: 10,
        marginHorizontal: 25,
      },
      progress_title: {
        // color: "#121212",
        alignSelf: "center",
        marginVertical: 4,
      },
      progress_value: {
        // color: "#121212",
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
        // backgroundColor: "rgba(213,218,223,1)",
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
        // color: "rgba(255,255,255,1)",
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
                {"120/500"}
              </Text>
            </View>
            <View style={styles.progress_box}>
              <Text style={styles.progress_title}>Total Time</Text>
              <Text style={styles.progress_value}>
                {activityTotal + " min"}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.exercise_container}>
          <View
            style={[
              styles.title_box,
              {  marginVertical: 10 },
            ]}
          >
            <Text style={styles.title}>Today's Activities 🏋️</Text>
          </View>
          <ScrollView horizontal={false} style={styles.box}>
            <Text>{exercise}</Text>
          </ScrollView>
        </View>
        <View style={styles.btn_box}>
          <TouchableOpacity
            onPress={() => navigation.navigate("addWorkout")}
            style={[styles.btn_shape, { marginHorizontal: 10 }]}
          >
            <Text style={styles.btn_text}>Add Exercise</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("addWorkout")}
            style={[
              styles.btn_shape,
              {  marginHorizontal: 10 },
            ]}
          >
            <Text style={styles.btn_text}>Add Meal</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
}

export default Home