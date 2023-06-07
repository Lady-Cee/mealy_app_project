import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import React from 'react';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};

const FavouriteScreen = () => {
  return (
    <SafeAreaView
        style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:COLORS.white}}>
        <StatusBar backgroundColor={COLORS.white}/>
          <Text>FavouriteScreen </Text>
    </SafeAreaView>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({})