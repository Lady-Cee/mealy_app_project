import { StyleSheet, Text, Dimensions, Image,StatusBar, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');

const LocalDishesScreen = () => {
  const navigation = useNavigation("");
  return (
    <SafeAreaView>
       <StatusBar backgroundColor={COLORS.white} />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 10 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, alignSelf: 'center' }}> Local dishes </Text>



      
    </SafeAreaView>
  )
}

export default LocalDishesScreen

const styles = StyleSheet.create({})