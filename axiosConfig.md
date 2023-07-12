import {
StyleSheet,
Text,
SafeAreaView,
TouchableOpacity,
View,
Alert,
Dimensions,
StatusBar,
TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
apiKey: "AIzaSyDxX2drB49AwfRGXI0nqiOzjG5sjpOXywY",
authDomain: "mealyapp-9fdb6.firebaseapp.com",
projectId: "mealyapp-9fdb6",
storageBucket: "mealyapp-9fdb6.appspot.com",
messagingSenderId: "763290289507",
appId: "1:763290289507:web:0609aa5e70d014e02fff56"
};

const app = initializeApp(firebaseConfig);

const BASE_URL = " https://mealy-app-u2hp.onrender.com/api/v1/user";

const { width, height } = Dimensions.get('screen');

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837' };

const SignUpScreen = () => {

const [text, onChangeText] = useState('');
const [number, onChangeNumber] = useState('');
const [email, setEmail] = useState('');
const [name, onChangeName] = useState('');
const [password, setPassword] = useState('');
const [reenterPassword, setReenterPassword] = useState('');
const [emailError, setEmailError] = useState('');
const [passwordError, setPasswordError] = useState('');
const [reenterPasswordError, setReenterPasswordError] = useState('');
const navigation = useNavigation();

const register = async(name, email, number, password , reenterPassword) => {
if ( validateForm(email, password)){
const response = await axios.patch(`${BASE_URL}/SignUp`,{
name,
password,
number,
email,
reenterPassword

      })
      const registrationResponse = response.data
      console.log(registrationResponse)
    }

}

function validateForm(email, password) {
const emailRegex = /^(?=._[a-z])(?=._[A-Z])(?=._[0-9])(?=._[!@#$%]).{8,24}$/;

    if ((emailRegex.test(email)) !== true) {
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

function handleSignUp() {
setEmailError('');
setPasswordError('');
setReenterPasswordError('');

    var isValid = validateForm(email, password);
    if (isValid) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User creation successful
          const user = userCredential.user;
          sendEmailVerification(auth.currentUser)
            .then(() => {
              // Email verification sent successfully
              Alert.alert('Sign Up Successful', 'Enter the OTP sent to you for verification.');
              navigation.navigate('VerificationScreen');
            })
            .catch((error) => {
              console.log('Email verification error:', error);
              // Handle email verification error
            });
        })
        .catch((error) => {
          // User creation failed
          Alert.alert('Email already exists');
         // console.log('Error creating user:', error);
          // Handle user creation error
        });
    }

}

return (
<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
<StatusBar backgroundColor={COLORS.white} />
<Text style={{ fontSize: 30, marginLeft: 20 }}>Sign Up</Text>
<TextInput
style={styles.input}
placeholder="Enter full name"
placeholderTextColor={'#dad7cd'}
onChangeText={onChangeName}
value={name}
/>

      <TextInput
        style={styles.input}
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
        keyboardType='email-address'
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
        <TouchableOpacity style={[styles.btnLast]} onPress={register}>
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
          <Text style={{ fontSize: 12, color:'black' }}> Sign up with Facebook </Text>
        </TouchableOpacity>
        <View style={{ marginLeft: 10 }} />
        <TouchableOpacity style={styles.btn}>
          <Text style={{ fontSize: 12, color:'black' }}>Sign up with Google </Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
        <View>
          <Text style={{ fontSize: 12 }}>Already have an account? </Text>
        </View>
        <View style={{ marginLeft: 5 }} />
        <View>
          <TouchableOpacity  onPress={() => navigation.navigate('WelcomeScreen')}>
            <Text
              style={{ fontSize: 12, color: COLORS.primary, fontWeight: 'bold' }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>

);
};

const styles = StyleSheet.create({
input: {
height: 50,
margin: 12,
borderWidth: 1,
padding: 10,
borderColor: '#ccd5ae',
},
btn: {
width: width _ 0.43,
height: 35,
backgroundColor: COLORS.white,
borderRadius: 50,
justifyContent: 'center',
alignItems: 'center',
borderWidth: 1,
},
btnLast: {
width: width _ 0.8,
height: 45,
backgroundColor: COLORS.green,
borderRadius: 50,
justifyContent: 'center',
alignItems: 'center',
alignSelf: 'center',
},
errorText: {
color: 'red',
fontSize: 12,
marginLeft: 20,
},
});

export default SignUpScreen;
