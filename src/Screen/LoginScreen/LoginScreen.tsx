import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fonts} from '../../asset/fonts';
import styles from './LoginScreenStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.background}>
      <Image
        style={styles.logo}
        source={require('../../Util/Image/logo.png')}
      />
      <View style={styles.container}>
        <View style={{marginLeft: 12}}>
          <Text style={styles.title}>Login Now</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.subtile}>If you are new / </Text>
            <TouchableOpacity>
              <Text style={[styles.subtile, {color: '#EA8025'}]}>
                Create account
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} secureTextEntry={true} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.subtile}>Forgot password /</Text>
            <TouchableOpacity>
              <Text style={[styles.subtile, {color: '#EA8025'}]}> Reset </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.push('HomeScreen')}>
          <View style={styles.loginButton}>
            <Text style ={{fontFamily: fonts.primary.bold, color:'white', fontSize:30}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default LoginScreen;
