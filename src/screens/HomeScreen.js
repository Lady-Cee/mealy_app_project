import { StyleSheet, Text, View , SafeAreaView, Image,StatusBar, Dimensions} from 'react-native'
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');
const Tab = createBottomTabNavigator()

const HomeScreen = () => {
  
  return (
    <SafeAreaView
    style={{flex:1, alignItems:'center',  backgroundColor:COLORS.white}}>
          <StatusBar backgroundColor={COLORS.white}/>
      <View style={{ width:width*0.85, 
        height:height*0.25,
         backgroundColor:COLORS.green, 
         marginTop:80 }}>
          <Image 
            source={require('../images/food1.png')}
            style={{resizeMode:'contain', width:120 , height:90, marginLeft:30}}          
          />
       </View>
        
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})