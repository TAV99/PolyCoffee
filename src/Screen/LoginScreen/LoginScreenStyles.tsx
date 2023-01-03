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
        backgroundColor: '#EC9B63',
      },
      container: {
        with: '100%',
        height: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 30,
      },
      logo: {
        alignSelf: 'center',
      },
      title: {
        fontFamily: fonts.primary.medium,
        fontSize: 36,
        marginTop: 32,
        color: '#EA8025',
        fontWeight: '500',
      },
      subtile: {
        marginTop: 12,
        color: '#ACBAC3',
        fontFamily: fonts.primary.regular,
      },
      input: {
        height: 50,
        padding: 12,
        marginTop: 18,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#EA8025',
        width: windowWidth - 24,
      },
      loginButton: {
        height: 50,
        width: '50%',
        marginTop: 32,
        borderRadius: 12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EC9B63',
      }
})
export default styles;