import { StyleSheet, Text, StatusBar, SafeAreaView,Dimensions,View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const OgbonoDescription = () => {
  const navigation = useNavigation('');
  return (
    <SafeAreaView  style={{flex:1,  backgroundColor:COLORS.white}}>
            <StatusBar backgroundColor={COLORS.white} />

            <View style={{marginTop:20, width:width*0.9, alignSelf:"center", }}>
            <Text style={{lineHeight:23, color:"gray"}}>Ogbono soup is made from ground ogbono seed (African mango seeds)
              as well as leafy vegetables such as spinach, pumpkin leaves, or bitterleaf.
              It is rich in calcium, iron, potassium, and magnesium. While the soup 
              is best eaten  when cooked with vegetables. It can also be eaten plain or 
              combined with okra. It is also known for its slimy nature. 
            </Text>
            </View>

            <View style={{position:"absolute", top:270, left:18}}>
                <TouchableOpacity onPress={() => navigation.navigate('MyCartScreen')} style={{ height: 35, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>Add to cart</Text>
                </TouchableOpacity>
           </View>
    </SafeAreaView>
  )
}

export default OgbonoDescription

const styles = StyleSheet.create({})