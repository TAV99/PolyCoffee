import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import styles from './HomeScreenStyle'

const HomeScreen = () => {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {/* LefView */}
        <View style={styles.lefView}>
          <TouchableOpacity style={styles.touchLef}>
            <Text style={styles.textBar}>Coffee</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchLef}>
            <Text style={styles.textBar}>Milk Tea</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchLef}>
            <Text style={styles.textBar}>Tea</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.touchLef}>
            <Text style={styles.textBar}>Juice</Text>
          </TouchableOpacity>
        </View>
        {/* rightView */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.rightView}>

        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen