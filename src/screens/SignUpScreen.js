import {
   StyleSheet,
   Text,
   SafeAreaView , 
   TouchableOpacity,
   View,
   Dimensions, 
   StatusBar, 
   TextInput,
  } from 'react-native'; 
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';

const {width, height} = Dimensions.get('screen');

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837'};



const SignUpScreen = () => {
  const [text, onChangeText] = useState('');
  const [number, onChangeNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const navigation = useNavigation();
  
  function showMessage(message) {
    console.log(message);
  }
  
  function validateForm(email, password) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      showMessage("Invalid email address.");
      return false;
    } else if (password.length < 8) {
      showMessage("Password should be at least 8 characters long.");
      return false;
    }
    
    // Continue with further validation or form submission
    return true;
  }
  
  
  
  var isValid = validateForm(email, password);
  if (isValid) {
    // Perform further actions or submit the form
  }
  


    

  
  
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
       <StatusBar backgroundColor={COLORS.white}/>
      <Text style={{fontSize:30, marginLeft:20}}>Sign Up</Text>
      <TextInput 
        style={styles.input}
        placeholder="Enter full name"
        placeholderTextColor={'#dad7cd'}
        onChangeText={onChangeText}
        value={text}  
       />

      <TextInput 
        style={styles.input}
        placeholder="Enter phone number"
        placeholderTextColor={'#dad7cd'}
        onChangeText={onChangeNumber}
        value={number}  
        keyboardType='numeric'
       />

      <TextInput 
        style={styles.input}
        placeholder="Enter email"
        placeholderTextColor={'#dad7cd'}
        onChangeText={(email) => setEmail(email)}
      
       />
       <TextInput 
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={true}
        placeholderTextColor={'#dad7cd'}   
        onChangeText={(password) => setPassword(password)}
             
       />
       <Text style={{
          marginLeft: 30, 
          marginTop:-10,
          color:'#dad7cd',
          fontSize:10}}>minimum of 8 characters</Text>
      
       <TextInput 
        style={styles.input}
        placeholder="Reenter password"
        secureTextEntry={true}
        placeholderTextColor={'#dad7cd'}  
        onChangeText={(password) => setPassword(password)} 
           
       />
        <View style={{marginTop:80}}>   
        <TouchableOpacity   
          style={[styles.btnLast]}
          
        >
          <Text style={{
            fontWeight:"bold", 
            fontSize:15, 
            color:COLORS.white}}
            onPress = {() => navigation.navigate('VerificationScreen')}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{marginTop:50, flexDirection:'row', marginLeft:20}}>
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
            <Text style={{fontSize:12}}> Sign up with Facebook </Text>
        </TouchableOpacity>
            <View style={{marginLeft:10}}/>
        <TouchableOpacity style={styles.btn}>
            <Text style={{fontSize:12}}>Sign up with Google </Text>
        </TouchableOpacity>   
      </View>

      <View style={{flexDirection:'row', justifyContent:'center', marginTop:30}}> 
        <View>
          <Text style={{fontSize:12}}>Already have an account? </Text>
        </View>
           <View style={{marginLeft:5}}/>
        <View>
          <TouchableOpacity>
          <Text style={{fontSize:12, color:COLORS.green}}
           onPress = {() => navigation.navigate('WelcomeScreen')}
           >Log in </Text>
          </TouchableOpacity>
        </View>
      </View>


    </SafeAreaView>
  )
}

export default SignUpScreen

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
    marginTop:-50,
    
},

})