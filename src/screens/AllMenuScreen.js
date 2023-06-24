import { StyleSheet, Text, StatusBar, SafeAreaView,Dimensions,View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const AllMenuScreen = () => {
  const navigation = useNavigation("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar backgroundColor={COLORS.white} />

    <View style={{ height:40, marginTop:15, borderColor:COLORS.gray, alignSelf:'flex-start',width: width*0.7,borderWidth:1, marginLeft:15,flexDirection:'row', borderRadius:50}}>
               <View style={{marginLeft: 15, justifyContent:"center"}}>
                 <Image source={require('../../assets/HomeScreenList2/search-interface-symbol.png')}
                   style={{width:20, height:20, tintColor:'gray'}}/>   
                </View>
        <TextInput style={{marginLeft:10, width: width*0.75, fontSize:10}}
                  placeholder='Search dishes, restaurants or drinks'/>     
       
      </View>
        <TouchableOpacity  onPress={() => navigation.navigate('HomeScreen')}>
        <View style={{position:'absolute', top:-30, right:30}}>
            <Text>Cancel </Text> 
        </View>
        </TouchableOpacity>

        <View style={{flexDirection:'row', marginTop:20, marginLeft:30, marginRight:30,justifyContent:'space-between'}}>
          <Text>All </Text>
          <Text>Local </Text>
          <Text>Continental </Text>
          <Text>Drinks </Text>
        </View>

    </SafeAreaView>
  )
}

export default AllMenuScreen

const styles = StyleSheet.create({})