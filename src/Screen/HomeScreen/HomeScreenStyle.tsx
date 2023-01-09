import { View, Text, StyleSheet, Dimensions, } from 'react-native'
import React from 'react'
import {fonts} from '../../asset/fonts';
//Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//
const styles = StyleSheet.create({
    background: {
      with: '100%',
      height: '100%',
      justifyContent:'flex-end',
      backgroundColor: '#EC9B63',
      },
      container: {
        flexDirection:'row',
        with: '100%',
        height: '85%',
        borderTopRightRadius: 30,
        backgroundColor:'white'
      },
      rightView:{
        height:'100%',
      },
})
export default styles;