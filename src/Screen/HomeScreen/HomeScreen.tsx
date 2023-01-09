import { View, Text, TouchableOpacity,ScrollView, } from 'react-native'
import React,{useState} from 'react'
import styles from './HomeScreenStyle'
import {LeftMenu} from './../../Components';

const HomeScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <LeftMenu/>
        {/* rightView */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.rightView}>

        </ScrollView>
        </View>
      </View>
  )
}

export default HomeScreen