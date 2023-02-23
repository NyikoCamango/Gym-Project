import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const purple = '#292477'
export const gray = '#757575'
export const white = '#fff'
export const red = '#b71845'
export const orange = '#f26f28'
export const blue = '#4e4cb8'
export const lightPurp = '#7c53c3'
export const pink = '#b93fb3'

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      flex: 1,
      alignItems: 'center'
    },
    andBtn: {
      margin: 5,
      backgroundColor: purple,
      padding: 10,
      borderRadius: 2
    },
    iosBtn: {
      backgroundColor: white,
      borderColor: purple,
      borderWidth: 1,
      borderRadius: 3,
      padding: 5,
      paddingLeft: 25,
      paddingRight: 25
    },
    metricCounter: {
      width: 85,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });

const WeeklyStats = () => {

    return (
        <View style={[styles.row, {justifyContent: 'space-between'}]}>
      {Platform.OS === 'ios'
      ? <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={[styles.iosBtn, {borderTopRightRadius: 1, borderBottomRightRadius: 1}]}
            // onPress={onDecrement}
            >
              <Entypo name='minus' size={30} color={purple} />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.iosBtn, {borderTopLeftRadius: 0, borderBottomLeftRadius: 0, borderLeftWidth: 0}]}
            // onPress={onIncrement}
            >
              <Entypo name='plus' size={30} color={purple} />
          </TouchableOpacity>          
        </View>
      : <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.andBtn} 
        //   onPress={onDecrement}
          >
            <FontAwesome name='minus' size={30} color={white} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.andBtn} 
        //   onPress={onIncrement}
          >
            <FontAwesome name='plus' size={30} color={white} />
          </TouchableOpacity>
        </View>}
      <View style={styles.metricCounter}>
        <Text style={{fontSize: 24, textAlign: 'center'}}>{"value"}</Text>
        <Text style={{fontSize: 18, color: gray}}>{"unit"}</Text>
      </View>
    </View>
    )
}

export default WeeklyStats