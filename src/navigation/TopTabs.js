import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllMenuScreen from '../screens/AllMenuScreen';
import LocalDishesScreen from '../screens/LocalDishesScreen';
import ContinentalScreen from '../screens/ContinentalScreen';
import DrinkScreen from '../screens/DrinkScreen';

const Tabs = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tabs.Navigator initialRouteName='AllMenuScreen'>
      <Tabs.Screen 
        name='main' 
        component={AllMenuScreen}
        options={{ tabBarLabel: 'All' }}
      />
      <Tabs.Screen
        name='LocalDishesScreen' 
        component={LocalDishesScreen}
        options={{ tabBarLabel: 'Local' }}
      />
      <Tabs.Screen 
        name='ContinentalScreen' 
        component={ContinentalScreen}
        options={{ tabBarLabel: 'Continental' }}
      />
      <Tabs.Screen 
        name='DrinkScreen' 
        component={DrinkScreen}
        options={{ tabBarLabel: 'Drinks' }}
      />
    </Tabs.Navigator>
  );
};

export default TopTabs;

const styles = StyleSheet.create({});
