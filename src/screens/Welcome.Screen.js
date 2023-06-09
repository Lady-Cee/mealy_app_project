import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, SafeAreaView, Button, StatusBar, Dimensions, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const firebaseConfig = {
  apiKey: "AIzaSyDxX2drB49AwfRGXI0nqiOzjG5sjpOXywY",
  authDomain: "mealyapp-9fdb6.firebaseapp.com",
  projectId: "mealyapp-9fdb6",
  storageBucket: "mealyapp-9fdb6.appspot.com",
  messagingSenderId: "763290289507",
  appId: "1:763290289507:web:0609aa5e70d014e02fff56"
};

const app = initializeApp(firebaseConfig);

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  function validateForm(email, password) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setEmailError('Invalid email address.');
      return false;
    } else if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters long.');
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

  function handleWelcome() {
    setEmailError('');
    setPasswordError('');

    const isValid = validateForm(email, password);
    if (isValid) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Handle successful login
          navigation.navigate('LocationScreen');
        })
        .catch((error) => {
          // Handle login error
          Alert.alert("Invalid email/ password");
          // console.log('Login error:', error);
          // You can set error messages here based on the error code
        });
    }
  }

  return (
        <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
           <StatusBar backgroundColor={COLORS.white}/>
           <Text style={{fontSize:30, marginLeft:20, }}>Welcome Back </Text>
           <Text style={{fontSize:14, marginLeft:20, color:COLORS.gray,lineHeight:15}}>Let's get you back in </Text>
           
           <TextInput 
            style={styles.input}
            placeholder="Enter email"
            placeholderTextColor={'#dad7cd'}
            onChangeText={handleEmailChange}
            keyboardType='email-address'
            value={email}          
          
           />
            {emailError !== '' && <Text style={styles.errorText}>{emailError}</Text>}
    
           <TextInput 
            style={styles.input}
            placeholder="Enter password"
            secureTextEntry={true}
            placeholderTextColor={'#dad7cd'}     
             onChangeText={handlePasswordChange}
            value={password}   
           />
            {passwordError !== '' && <Text style={styles.errorText}>{passwordError}</Text>}
    
           
    
           <View style={{ flexDirection:'row', marginLeft:20}}>
              <View>
                <Text style={{marginLeft: 30, color:COLORS.gray}}>Stay logged in </Text>
              </View>
              <View style={{marginLeft:65}}>
                <TouchableOpacity >
                    <Text 
                    style={{color:COLORS.green}}
                    onPress={() => navigation.navigate('PasswordScreen')}>Forgot Password? </Text>
               </TouchableOpacity>
              </View>
           </View>
    
           <View style={{marginTop:80}}>   
            <TouchableOpacity   
              style={[styles.btnLast]}
              
            >
              <Text style={{
                fontWeight:"bold", 
                fontSize:15, 
                color:COLORS.white}}
                onPress = {handleWelcome}>Login</Text>
            </TouchableOpacity>
          </View>
    
          <View style={{marginTop:70, flexDirection:'row', marginLeft:20}}>
                <View  style={{borderLeftWidth:140, height:1, borderColor: '#ccd5ae'}}/>
                  <View style={{marginTop:-10, marginLeft:5}}>
                    <Text>Or</Text>
                  </View>
                  <View  style={{borderLeftWidth:140, height:1, borderColor: '#ccd5ae', marginLeft:5}}/>
          </View>
    
          <View style={{
            flexDirection:'row', 
            marginTop:30, 
             width: width*0.9,
             alignSelf:'center'}}>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:12}}> Log in with Facebook </Text>
            </TouchableOpacity>
                <View style={{marginLeft:10}}/>
            <TouchableOpacity style={styles.btn}>
                <Text style={{fontSize:12}}>Log in with Google </Text>
            </TouchableOpacity>   
          </View>
    
          <View style={{flexDirection:'row', justifyContent:'center', marginTop:30}}> 
            <View>
              <Text style={{fontSize:12}}>Don't have an account? </Text>
            </View>
               <View style={{marginLeft:5}}/>
            <View>
              <TouchableOpacity>
              <Text style={{fontSize:12, color:COLORS.green}}
               onPress = {() => navigation.navigate('SignUpScreen')}
               >Sign up </Text>
              </TouchableOpacity>
            </View>
          </View>
    
        
        </SafeAreaView>
      )
    }
    
    export default WelcomeScreen
    
    const styles = StyleSheet.create({
      input: {
        height: 50,
        width: width*0.9,
        alignSelf:'center',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        borderColor:'#898989',
        borderTopColor: '#ccd5ae',
        borderStyle: 'solid',
      },
    
      btn:{
        flex:1,
        height:40,
        borderRadius:50,
        justifyContent:"center",
        alignItems:"center",
        borderColor:'black',
        borderWidth:1
       
    
      },
      btnLast:{
        height:50,
        width: width*0.9,
        alignSelf:'center',
        borderRadius:50,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems:"center",
        
    },
    errorText: {
        color: 'red',
        marginLeft: 30,
        marginTop: -5,
        fontSize: 12,
        fontStyle:"italic"
      },
    })