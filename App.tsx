import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import LoginScreen from './src/Screen/LoginScreen/LoginScreen';
import HomeScreen from './src/Screen/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator()


const SplashScreen = ({ navigation}: any ) => {
  return(
    <View style={{backgroundColor:'#EC9B63', width:'100%', height:'100%'}}>

      <TouchableOpacity style={{alignSelf:'center',marginTop:500}} onPress={()=>navigation.push('LoginScreen')}>
          <Text>Go to Login</Text>
      </TouchableOpacity>
     
    </View>
  )
}


const AppNavigate = () => {
    return (
      <NavigationContainer>

        <Stack.Navigator  initialRouteName='SplashScreen' screenOptions={{ headerShown: false}} >
          <Stack.Screen name='LoginScreen' component={LoginScreen}/>
          <Stack.Screen name= 'HomeScreen' component={HomeScreen}/>
          <Stack.Screen name= 'SplashScreen' component={SplashScreen}/>
        </Stack.Navigator>

      </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});

export default AppNavigate;