import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, React } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OnboardingScreen from './src/screens/OnboardingScreen';
import HomeScreen from './src/screens/HomeScreen';
import SignUpScreen from './src/screens/SignUpScreen';
import WelcomeScreen from './src/screens/Welcome.Screen';
import VerificationScreen from './src/screens/VerificationScreen';
import LocationScreen from './src/screens/LocationScreen';
import PasswordScreen from './src/screens/PasswordScreen';
import ResetPassword from './src/screens/ResetPassword';
import StackScreen from './src/navigation/StackScreen';
import BottomTabs from './src/navigation/BottomTabs';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
       
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name='OnboardingScreen' component={OnboardingScreen} />
      <Stack.Screen name='BottomTabs' component={BottomTabs}/>
      <Stack.Screen name='SignUpScreen' component={SignUpScreen}/>
      <Stack.Screen name='WelcomeScreen' component={WelcomeScreen}/>
      <Stack.Screen name='VerificationScreen' component={VerificationScreen}/>
      <Stack.Screen name='LocationScreen' component={LocationScreen}/>
      <Stack.Screen name='PasswordScreen' component={PasswordScreen}/>
      <Stack.Screen name='ResetPassword' component={ResetPassword}/>
      <Stack.Screen name='StackScreen' component={StackScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
   )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
