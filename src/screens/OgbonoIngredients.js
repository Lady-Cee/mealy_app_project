import { StyleSheet, Text, StatusBar, SafeAreaView,Dimensions,View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const OgbonoIngredients = () => {
  const navigation = useNavigation("");
  return (
    <SafeAreaView  style={{flex:1,  backgroundColor:COLORS.white}}>
    <StatusBar backgroundColor={COLORS.white} />


    <View style={{marginLeft:30, marginTop:30}}>
      <FlatList
        data={[
          {key: 'Ogbono Seed'},
          {key: 'Stockfish'},
          {key: 'Ponmo'},
          {key: 'Bee'},
          {key: 'Fresh Pepper'},
          {key: 'Snails'},
          {key: 'Crayfish/ Shrimp'},
          {key: 'Palmoil'},
          {key: 'Seasoning cubes'},
          {key: 'Salt'},
          {key: 'Ugu/ Uziza leaves'},
        ]}

        renderItem={({item}) => 
        <Text style={{fontSize:14, color:"gray"}}>
          {`\u2022   ${item.key}`}
          </Text>
      }
        />
     
    </View>

    <View style={{position:"absolute", top:270, left:18}}>
                <TouchableOpacity onPress={() => navigation.navigate('MyCartScreen')} style={{ height: 35, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>Add to cart</Text>
                </TouchableOpacity>
           </View>

    </SafeAreaView>
  )
}

export default OgbonoIngredients

const styles = StyleSheet.create({})