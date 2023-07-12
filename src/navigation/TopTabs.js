import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllScreen from '../screens/AllScreen';
import LocalDishesScreen from '../screens/LocalDishesScreen';
import ContinentalScreen from '../screens/ContinentalScreen';
import DrinkScreen from '../screens/DrinkScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator 
    initialRouteName='AllMenuScreen'
    screenOptions={{
    
      // tabBarTintColor:'black',
      // tabBarActiveTintColor:'green',
      tabBarIndicatorStyle:{
        backgroundColor: 'black',
        height: 2,
      },
      tabBarScrollEnabled: false,
      tabBarLabelStyle: {fontSize: 12, textTransform:"none", width:"100%", height:"70%", textAlign:"auto"},
      // tabBarItemStyle: { width: 90, },
      // tabBarStyle: {
      //   height: 70,       
      //   // backgroundColor: '#c21a0c',
      // },
    }} >

    <Tab.Screen 
      name='All' 
      // component={AllScreen}
      options={{ tabBarLabel: 'All '}}
    />
    <Tab.Screen
      name='LocalDishesScreen' 
      component={LocalDishesScreen}
      options={{ tabBarLabel: 'Local ' }}
    />
    <Tab.Screen 
      name='ContinentalScreen' 
      component={ContinentalScreen}
      options={{ tabBarLabel: ' Continental ' }}
    />
    <Tab.Screen 
      name='DrinkScreen' 
      component={DrinkScreen}
      options={{ tabBarLabel: 'Drinks ' ,
      
    }}
    />
  </Tab.Navigator>
  );
};

export default TopTabs;

const styles = StyleSheet.create({});
