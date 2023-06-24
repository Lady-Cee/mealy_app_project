import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyCartScreen from '../screens/MyCartScreen';
import FavouriteScreen from '../screens/FavouriteScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BottomTabs from './BottomTabs';

const Stack = createNativeStackNavigator();


const StackScreen = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>

        <Stack.Screen name="HomeScreen" component={BottomTabs} />
        <Stack.Screen name="MyCartScreen" component={MyCartScreen} />
        <Stack.Screen name="FavouriteScreen" component={FavouriteScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} /> 
     
        
  </Stack.Navigator>
  )
}

export default StackScreen

const styles = StyleSheet.create({})