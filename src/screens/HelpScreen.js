import { StyleSheet, Text, SafeAreaView, StatusBar, TouchableOpacity, Dimensions, Image,View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const HelpScreen = () => {
    const navigation = useNavigation("");
  return (
    <SafeAreaView
    style={{flex:1, backgroundColor:COLORS.white}}>
    <StatusBar backgroundColor={COLORS.white}/>
  <View style={{flexDirection:"row"}}>
    <TouchableOpacity 
       onPress={() => navigation.navigate('ProfileScreen')}>
      <Image source={require('../../assets/profilescreenlist/cancel.png')} 
      style={{ width: 25, height: 25, marginLeft: 20, marginTop: 20 }} />
      </TouchableOpacity>
      <Text style={{fontSize:20, marginLeft:110,marginTop:20 }}>Help </Text>
        </View>

        <Text style={{marginLeft:30, marginTop:30}}>Contact Us </Text>


        <TouchableOpacity>
        <View style={
            {alignSelf:'flex-start',
             marginLeft:50, 
             flexDirection:"row",
             marginTop:40}}>
                 <Ionicons name="call-outline" size={20} color="black" />
                  <Text style={{color:'black', marginLeft:30, fontSize:14}}>Call </Text>
         </View>
         </TouchableOpacity>
            <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.75}}/>
        
            <TouchableOpacity>
            <View style={
                {alignSelf:'flex-start',
                 marginLeft:50, 
                 flexDirection:"row",
                 }}>
                 <MaterialCommunityIcons name="email-outline" size={20} color="black" />
               <Text style={{color:'black', marginLeft:30, fontSize:14}}>Email </Text>
         </View>
         </TouchableOpacity>
          <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.75}}/>

          <TouchableOpacity>
          <View style={
              {alignSelf:'flex-start',
               marginLeft:50, 
               flexDirection:"row",
               }}>
          <Image
            source={require('../../assets/profilescreenlist/question-and-answer.png')}
            style={{width:20, height:20, tintColor:'black'}}/>
              <Text style={{color:'black', marginLeft:30, fontSize:14}}>Send Feedback </Text>
               </View>
         </TouchableOpacity>
          <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.75}}/>

          <TouchableOpacity>
          <View style={
              {alignSelf:'flex-start',
               marginLeft:50, 
               flexDirection:"row",
               }}>
          <Image
            source={require('../../assets/profilescreenlist/reset-password.png')}
            style={{width:20, height:20, tintColor:'black'}}/>
              <Text style={{color:'black', marginLeft:30, fontSize:14}}>Reset Password </Text>
               </View>
         </TouchableOpacity>
          <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.75}}/>

          <TouchableOpacity>
          <View style={
              {alignSelf:'flex-start',
               marginLeft:50, 
               flexDirection:"row",
               }}>
            <AntDesign name="adduser" size={20} color="black" />
            <Text style={{color:'black', marginLeft:30, fontSize:14}}>Add contact Information </Text>
            </View>
         </TouchableOpacity>
          <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.75}}/>
            
          <TouchableOpacity>
          <View style={
              {alignSelf:'flex-start',
               marginLeft:50, 
               flexDirection:"row",
               }}>
            <Image
            source={require('../../assets/profilescreenlist/bag.png')}
            style={{width:20, height:20, tintColor:'black'}}/>
             <Text style={{color:'black', marginLeft:30, fontSize:14}}>Privacy and Policy </Text>
            </View>
         </TouchableOpacity>


        </SafeAreaView>
  )
}

export default HelpScreen

const styles = StyleSheet.create({})