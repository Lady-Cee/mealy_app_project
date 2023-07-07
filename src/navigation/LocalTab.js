import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import AllScreen from '../screens/AllScreen';
import LocalDishesScreen from '../screens/LocalDishesScreen';
import ContinentalScreen from '../screens/ContinentalScreen';
const Tab = createMaterialTopTabNavigator();

const LocalTab = () => {
  return (
//     <Tab.Navigator 
//     screenOptions={{
//       // tabBarTintColor:'black',
//       // tabBarActiveTintColor:'green',
//       tabBarIndicatorStyle:{
//         backgroundColor: 'black',
//         height: 2,
//       },
//       tabBarScrollEnabled: false,
//       tabBarLabelStyle: {fontSize: 12, textTransform:"none"},
//       // tabBarItemStyle: { width: 90, },
//       tabBarStyle: {
//         height: 70,
        
        
//         // backgroundColor: '#c21a0c',
//       },
//     }} >

//     <Tab.Screen 
//       name='main' 
//       component={AllScreen}
//       options={{ tabBarLabel: 'All '}}
//     />
//     <Tab.Screen
//       name='LocalDishesScreen' 
//       component={LocalDishesScreen}
//       options={{ tabBarLabel: 'Local ' }}
//     />
//     <Tab.Screen 
//       name='ContinentalScreen' 
//       component={ContinentalScreen}
//       options={{ tabBarLabel: ' Continental ' }}
//     />

//   </Tab.Navigator>
<View>
    <Text>Tab is here </Text>
</View>
  )
}

export default LocalTab

const styles = StyleSheet.create({})