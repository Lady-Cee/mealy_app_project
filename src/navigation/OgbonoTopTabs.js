import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OgbonoDescription from '../screens/OgbonoDescription';
import OgbonoIngredients from '../screens/OgbonoIngredients';
import OgbonoReviews from '../screens/OgbonoReviews';

const Tab = createMaterialTopTabNavigator();

const OgbonoTopTabs = () => {
  return (
    <Tab.Navigator 
    // initialRouteName='HomeScreen'
    screenOptions={{
    
      // tabBarTintColor:'black',
    //   tabBarActiveTintColor:'green',
      tabBarIndicatorStyle:{
        backgroundColor: 'green',
        height: 2,
      },
    //   tabBarScrollEnabled: false,
      tabBarLabelStyle: {fontSize: 12, textTransform:"none", width:"100%", height:"70%", textAlign:"auto"},
      // tabBarItemStyle: { width: 90, },
      // tabBarStyle: {
      //   height: 70,       
      //   // backgroundColor: '#c21a0c',
      // },
    }} >

    <Tab.Screen 
      name='Description' 
      component={OgbonoDescription}
      options={{
        tabBarLabel:({color, focused}) => {
            return (
                <View style={{
                    paddingTop: 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Text style={{color:focused ? 'green' : 'black',fontSize:12}} >Description </Text>
           </View>
            )
        }
      }}
      // options={{ tabBarLabel: 'All '}}

    />
    <Tab.Screen
      name='OgbonoIngredients' 
      component={OgbonoIngredients}
      options={{
        tabBarLabel:({color, focused}) => {
            return (
                <View style={{
                    paddingTop: 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Text style={{color:focused ? 'green' : 'black',fontSize:12}} >Ingredients </Text>
           </View>
            )
        }
      }}
    />
    <Tab.Screen 
      name='OgbonoReviews' 
      component={OgbonoReviews}
      options={{
        tabBarLabel:({color, focused}) => {
            return (
                <View style={{
                    paddingTop: 12,
                    alignItems: "center",
                    justifyContent: "center",
                  }}>
                    <Text style={{color:focused ? 'green' : 'black', fontSize:12}} >Reviews </Text>
           </View>
            )
        }
      }}

    />
 
  </Tab.Navigator>

  )
}

export default OgbonoTopTabs

const styles = StyleSheet.create({})