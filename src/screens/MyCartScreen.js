import { StyleSheet, Text, SafeAreaView, StatusBar, View } from 'react-native'
import React from 'react'

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const MyCartScreen = () => {
  return (
    <SafeAreaView
        style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:COLORS.white}}>
        <StatusBar backgroundColor={COLORS.white}/>
          <Text>MyCartScreen </Text>
    </SafeAreaView>
  )
}

export default MyCartScreen

const styles = StyleSheet.create({})