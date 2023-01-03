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
        backgroundColor: 'red',
        borderTopRightRadius: 30,
      },
      lefView:{
        marginLeft:-32,
        height:"85%",
        alignSelf:"flex-start",
        marginTop: 32,
        backgroundColor:'blue'
      },
      rightView:{
        backgroundColor:'green',
        height:'100%',
      },
      textBar:{
        transform: [{rotate: '270 deg'}],
        fontFamily: fonts.primary.regular,
        color: "#EC9B63",
        fontSize:24,
        height:"30%",
        width:'100%',
      },
      touchLef:{
        flex:1,
        justifyContent:'center',
      }
})
export default styles;