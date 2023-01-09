import { View, Text, StyleSheet, Dimensions, } from 'react-native'
import React from 'react'
import {fonts} from '../../asset/fonts';
//Dimensions
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
//
const styles = StyleSheet.create({
      leftView:{
        marginLeft:-32,
        height:"85%",
        alignSelf:"flex-start",
        marginTop: 32,
      },
      textBar:{
        transform: [{rotate: '270 deg'}],
        fontFamily: fonts.primary.regular,
        // color: "#EC9B63",
        fontSize:24,
        height:"30%",
        width:'100%',
      },
      touchLeft:{
        flex:1,
        justifyContent:'center',
      }
})
export default styles;