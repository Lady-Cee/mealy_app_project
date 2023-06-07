import { StyleSheet,
     StatusBar,
      Dimensions, 
      SafeAreaView, 
      Text, 
      TextInput,
      View,
      TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');


const PasswordScreen = () => {
    const [number, onChangeNumber] = useState('');
    const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
    <StatusBar backgroundColor={COLORS.white}/>
    <Text style={{fontSize:30, marginLeft:20, }}>Forgot Password </Text>
    <Text style={{
        fontSize:14, 
        marginLeft:20,
        color:COLORS.gray,
        marginTop:20,
        marginRight:10}}>
        You can request a password below. We will send a security code to the email address or phone number provided </Text>
  <TextInput 
        style={styles.input}
        placeholder="Enter email or phone number here"
        placeholderTextColor={'#dad7cd'}
        onChangeText={onChangeNumber}
        value={number}  
        keyboardType='phone-pad'
  />
  
  <View style={{marginTop:30}}>   
        <TouchableOpacity   
          style={[styles.btnLast]}
          
        >
          <Text style={{
            fontWeight:"bold", 
            fontSize:15, 
            color:COLORS.white}}
            onPress = {() => navigation.navigate('ResetPassword')}>Submit </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default PasswordScreen

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
      btnLast:{
        height:50,
        width: width*0.9,
        alignSelf:'center',
        borderRadius:50,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems:"center",
        
    },
})