import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';

const { width, height } = Dimensions.get('screen');

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837' };
const SignUpAPI = "https://mealy-app-u2hp.onrender.com/api/v1/user/signup";

const SignUpScreen = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [reenterPassword, setReenterPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [reenterPasswordError, setReenterPasswordError] = useState('');
  const navigation = useNavigation();

  function validateForm(email, password) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address.');
      return false;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
      return false;
    } else if (password !== reenterPassword) {
      setReenterPasswordError('Passwords do not match.');
      return false;
    }
    return true;
  }

  function handleEmailChange(email) {
    setEmail(email);
    setEmailError('');
  }

  function handlePasswordChange(password) {
    setPassword(password);
    setPasswordError('');
  }

  function handleReenterPasswordChange(reenterPassword) {
    setReenterPassword(reenterPassword);
    setReenterPasswordError('');
  }

  async function handleSignUp() {
    setEmailError('');
    setPasswordError('');
    setReenterPasswordError('');

    var isValid = validateForm(email, password);
    if (isValid) {
      try {
        const response = await fetch(SignUpAPI, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: text,
            phoneNumber: number,
            email: email,
            password: password,
          }),
        });

        if (response.ok) {
          
          navigation.navigate('VerificationScreen');
        } else {
          
          console.log('API request failed:', response.status, response.statusText);
        }
      } catch (error) {
        
        console.log('Network error:', error);
      }
    }
  }


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />

      <Text style={{ fontSize: 30, marginLeft: 20 }}>Sign Up</Text>
      <TextInput
        style={
          styles.input
        }
        placeholder="Enter full name"
        placeholderTextColor={'#dad7cd'}
        onChangeText={onChangeText}
        value={text}
      />

      <TextInput
        style={
          styles.input}
        placeholder="Enter phone number"
        placeholderTextColor={'#dad7cd'}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />

      <TextInput
        style={[
          styles.input,
          { backgroundColor: emailError !== '' ? 'red' : COLORS.white },
        ]}
        placeholder="Enter email"
        placeholderTextColor={'#dad7cd'}
        onChangeText={handleEmailChange}
        value={email}
      />
      {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}

      <TextInput
        style={[
          styles.input,
          { backgroundColor: passwordError !== '' ? 'red' : COLORS.white },
        ]}
        placeholder="Enter password"
        secureTextEntry={true}
        placeholderTextColor={'#dad7cd'}
        onChangeText={handlePasswordChange}
        value={password}
      />
      {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}

      <Text
        style={{
          marginLeft: 30,
          marginTop: -10,
          color: '#dad7cd',
          fontSize: 10,
        }}
      >
        minimum of 8 characters
      </Text>

      <TextInput
        style={[
          styles.input,
          { backgroundColor: reenterPasswordError !== '' ? 'red' : COLORS.white },
        ]}
        placeholder="Reenter password"
        secureTextEntry={true}
        placeholderTextColor={'#dad7cd'}
        onChangeText={handleReenterPasswordChange}
        value={reenterPassword}
      />
      {reenterPasswordError !== '' && (
        <Text style={styles.errorText}>{reenterPasswordError}</Text>
      )}

      <View style={{ marginTop: 80 }}>
        <TouchableOpacity style={[styles.btnLast]} onPress={handleSignUp}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: COLORS.white,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{ marginTop: 50, flexDirection: 'row', marginLeft: 20 }}
      >
        <View
          style={{
            borderLeftWidth: 140,
            height: 1,
            borderColor: '#ccd5ae',
          }}
        />
        <View style={{ marginTop: -10, marginLeft: 5 }}>
          <Text>Or</Text>
        </View>
        <View
          style={{
            borderLeftWidth: 140,
            height: 1,
            borderColor: '#ccd5ae',
            marginLeft: 5,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          width: width * 0.9,
          alignSelf: 'center',
        }}
      >
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontSize: 12 }}> Sign up with Facebook </Text>
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }} />
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontSize: 12 }}>Sign up with Google </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
        <View>
          <Text style={{ fontSize: 12 }}>Already have an account? </Text>
        </View>
        <View style={{ marginLeft: 5 }} />
        <View>
          <TouchableOpacity>
            <Text
              style={{ fontSize: 12, color: COLORS.green }}
              onPress={() => navigation.navigate('WelcomeScreen')}
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: width * 0.9,
    alignSelf: 'center',
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#898989',
    borderTopColor: '#ccd5ae',
    borderStyle: 'solid',
  },
  btn: {
    flex: 1,
    height: 40,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  btnLast: {
    height: 50,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -50,
  },
  errorText: {
    color: 'red',
    marginLeft: 30,
    marginTop: -5,
    fontSize: 12,
    fontStyle:"italic"
  },
});



