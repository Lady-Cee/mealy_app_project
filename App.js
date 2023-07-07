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
import AllMenuScreen from './src/screens/AllMenuScreen';
import DeliveryScreen from './src/screens/DeliveryScreen';
import RestaurantScreen from './src/screens/RestaurantScreen';
import FoodScreen from './src/screens/FoodScreen';
import LocalDishesScreen from './src/screens/LocalDishesScreen';
import ContinentalScreen from './src/screens/ContinentalScreen';
import DrinkScreen from './src/screens/DrinkScreen';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ReserveScreen from './src/screens/ReserveScreen';
import OgbonoScreen from './src/screens/OgbonoScreen';
import CheckoutScreen from './/src/screens/CheckoutScreen';
import MyCartScreen from './src/screens/MyCartScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import DelComponentScreen from './src/screens/DelComponentScreen';
import PickComponentScreen from './src/screens/PickComponentScreen';
import ThankYouScreen from './src/screens/ThankYouScreen';
import OrderTrackScreen from './src/screens/OrderTrackScreen'
import TopTabs from './src/navigation/TopTabs';
import ProfileDetailsScreen from './src/screens/ProfileDetailsScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HelpScreen from './src/screens/HelpScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import FaqScreen from './src/screens/FaqScreen';
import AllScreen from './src/screens/AllScreen';

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
      <Stack.Screen name='AllMenuScreen' component={AllMenuScreen}/>
      <Stack.Screen name='DeliveryScreen' component={DeliveryScreen}/>
      <Stack.Screen name='RestaurantScreen' component={RestaurantScreen}/>
      <Stack.Screen name='FoodScreen' component={FoodScreen}/>
      <Stack.Screen name='LocalDishesScreen' component={LocalDishesScreen}/>
      <Stack.Screen name='ContinentalScreen' component={ContinentalScreen}/>
      <Stack.Screen name='DrinkScreen' component={DrinkScreen}/>
      <Stack.Screen name='ReserveScreen' component={ReserveScreen}/>
      <Stack.Screen name='OgbonoScreen' component={OgbonoScreen}/>
      <Stack.Screen name='CheckoutScreen' component={CheckoutScreen}/>
      <Stack.Screen name='MyCartScreen' component={MyCartScreen}/>
      <Stack.Screen name='PaymentScreen' component={PaymentScreen}/>
      <Stack.Screen name='DelComponentScreen' component={DelComponentScreen}/>
      <Stack.Screen name='PickComponentScreen' component={PickComponentScreen}/>
      <Stack.Screen name='ThankYouScreen' component={ThankYouScreen}/>
      <Stack.Screen name='HomeScreen' component={HomeScreen}/>
      <Stack.Screen name='OrderTrackScreen' component={OrderTrackScreen}/>
      <Stack.Screen name='TopTabs' component={TopTabs}/>
      <Stack.Screen name='ProfileScreen' component={ProfileScreen}/>
      <Stack.Screen name='ProfileDetailsScreen' component={ProfileDetailsScreen}/>
      <Stack.Screen name='HelpScreen' component={HelpScreen}/>
      <Stack.Screen name='SettingsScreen' component={SettingsScreen}/>
      <Stack.Screen name='FaqScreen' component={FaqScreen}/>
      <Stack.Screen name='AllScreen' component={AllScreen}/>
      
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
