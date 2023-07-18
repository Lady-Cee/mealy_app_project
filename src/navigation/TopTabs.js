import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SodaScreen from '../screens/SodaScreen';
import WineScreen from '../screens/WineScreen';
import JuiceScreen from '../screens/JuiceScreen';
import BeerScreen from '../screens/BeerScreen';
import AllDrinkScreen from '../screens/DrinkScreen';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator 
    // initialRouteName='HomeScreen'
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
      component={AllDrinkScreen}
      // options={{ tabBarLabel: 'All '}}
    />
    <Tab.Screen
      name='SodaScreen' 
      component={SodaScreen}
      options={{ tabBarLabel: 'Soda ' }}
    />
    <Tab.Screen 
      name='WineScreen' 
      component={WineScreen}
      options={{ tabBarLabel: ' Wine ' }}
    />
    <Tab.Screen 
      name='JuiceScreen' 
      component={JuiceScreen}
      options={{ tabBarLabel: 'Juice' ,
      
    }}
    />
     <Tab.Screen 
      name='BeerScreen' 
      component={BeerScreen}
      options={{ tabBarLabel: 'Beer' ,
      
    }}
    />
  </Tab.Navigator>
  );
};

export default TopTabs;

const styles = StyleSheet.create({});
