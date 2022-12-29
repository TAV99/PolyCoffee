import {
  View,
  Text,
  Image,
  TextInput,
  Dimensions,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {fonts} from '../../asset/fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const LoginScreen = () => {
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
        <TouchableOpacity>
          <View style={styles.loginButton}>
            <Text style ={{fontFamily: fonts.primary.bold, color:'white', fontSize:30}}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

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
  },
});
export default LoginScreen;
