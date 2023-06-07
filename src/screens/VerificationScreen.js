import { StyleSheet, Text, StatusBar, SafeAreaView, TouchableOpacity, Dimensions,View , TextInput} from 'react-native'
import React, { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');

const VerificationScreen = () => {
    const navigation = useNavigation();

  
  return (
    
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
        <StatusBar backgroundColor={COLORS.white}/>
        <Text style={{fontSize:16, marginLeft:20, }}>Verification </Text>
       <Text style={{fontSize:12, marginLeft:20, color:COLORS.gray,lineHeight:20}}>Enter the OTP code sent to your email </Text>
      
       <View >

        
       <TextInput style={styles.OTPField} >
       </TextInput>
              
       </View>

        
      <View style={{flexDirection:'row', marginLeft: 20, marginTop:10}}> 
        <View>
          <Text style={{fontSize:12}}>Didn't receive any code yet? </Text>
        </View>
           <View style={{marginLeft:5}}/>
        <View>
          <TouchableOpacity>
          <Text style={{fontSize:12, color:COLORS.green}}
           onPress = {() => navigation.navigate('SignUpScreen')}
           >Resend </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{marginTop:50}}>   
        <TouchableOpacity   
          style={[styles.btnLast]}
          
        >
          <Text style={{
            fontWeight:"bold", 
            fontSize:15, 
            color:COLORS.white}}
            onPress = {() => navigation.navigate('LocationScreen')}>Submit </Text>
        </TouchableOpacity>
      </View>

    
    </SafeAreaView>
  )
}

export default VerificationScreen

const styles = StyleSheet.create({
    btnLast:{
        height:50,
        width: width*0.9,
        alignSelf:'center',
        borderRadius:50,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems:"center",
        
    },
    OTPField:{
      borderWidth:2,
      borderColor: COLORS.gray,
      borderRadius:5,
      padding:12,
      marginTop:15,
      marginLeft:20,
      width:300, 
      color:'black'


    },
})