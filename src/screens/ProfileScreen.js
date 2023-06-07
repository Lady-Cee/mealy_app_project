import { StyleSheet, Text, SafeAreaView,View, StatusBar } from 'react-native'
import React from 'react';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};

const ProfileScreen = () => {
  return (
    <SafeAreaView
      style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:COLORS.white}}>
      <StatusBar backgroundColor={COLORS.white}/>
        <Text>ProfileScreen </Text>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})