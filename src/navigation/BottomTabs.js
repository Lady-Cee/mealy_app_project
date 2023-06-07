import { StyleSheet, Text, View , Image} from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyCartScreen from '../screens/MyCartScreen';
import ProfileScreen from '../screens/ProfileScreen';
import FavouriteScreen from '../screens/FavouriteScreen';


const Tab = createBottomTabNavigator();
const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const BottomTabs = () => {
  return (
    <Tab.Navigator
    initialRouteName='HomeScreen'
    screenOptions={{ 
    headerShown: true, 
    tabBarShowLabel: true,
    tabBarActiveTintColor:COLORS.green,
    tabBarLabelStyle:{
        fontWeight:'bold',
        fontSize:12,
    }
     }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          headerShown:false,
          tabBarIcon:() => {
            return(
              <View style={{
                paddingTop:12,
                alignItems: "center",
                justifyContent: "center",
              }}
              >
                  <Image
                source={require("../../assets/tabsIcon/house.png")}
                style={{
                width: 20,
                height: 20,
                // tintColor: COLORS.gray,
              }}/>
              

              </View>
            )
          }
        }}   
      
      />

<Tab.Screen
        name='My Cart'
        component={MyCartScreen}
        options={{
          headerShown:false,
          tabBarIcon:() => {
            return(
              <View style={{
                paddingTop:12,
                alignItems: "center",
                justifyContent: "center",
              }}
              >
                  <Image
                source={require('../../assets/tabsIcon/cart.png')}
                style={{
                width: 20,
                height: 20,
                // tintColor: COLORS.gray,
              }}/>

              </View>
            )
          }
        }}   
      
      />

<Tab.Screen
        name='Favourite'
        component={FavouriteScreen}
        options={{
          headerShown:false,
          tabBarIcon:() => {
            return(
              <View style={{
                paddingTop:12,
                alignItems: "center",
                justifyContent: "center",
              }}
              >
                  <Image
                source={require("../../assets/tabsIcon/favourite.png")}
                style={{
                width: 20,
                height: 20,
                // tintColor: COLORS.gray,
              }}/>

              </View>
            )
          }
        }}   
      
      />

<Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          headerShown:false,
          tabBarIcon:() => {
            return(
              <View style={{
                paddingTop:12,
                alignItems: "center",
                justifyContent: "center",
              }}
              >
                  <Image
                source={require('../../assets/tabsIcon/user.png')}
                style={{
                width: 20,
                height: 20,
                tintColor: COLORS.gray,
              }}/>

              </View>
            )
          }
        }}   
      
      />
  




  </Tab.Navigator>
  )
}

export default BottomTabs

const styles = StyleSheet.create({})