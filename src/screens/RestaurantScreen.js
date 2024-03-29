import { StyleSheet, Text, StatusBar, SafeAreaView,Dimensions,View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import FoodDrinkCategory from '../components/FoodDrinkCategory';
import { useNavigation } from '@react-navigation/native';
import RestCategory from '../components/RestCategory';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const RestaurantScreen = () => {
  return (
    <SafeAreaView  style={{flex:1,  backgroundColor:COLORS.white}}>
    <StatusBar backgroundColor={COLORS.white} />
<TouchableOpacity onPress={() => navigation.navigate('Home')}>
<Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 10 }} />
</TouchableOpacity>
<Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -20, alignSelf: 'center' }}>Restaurants </Text>

<View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 15, marginBottom: 30, alignSelf: 'center', width: width * 1 }} />

<View style={{
 height:40,
 marginTop:-10, 
 borderColor:COLORS.gray, 
 alignSelf:'flex-start',
 width: width*0.9,
 borderWidth:1, 
 marginLeft:15,
 flexDirection:'row',
borderRadius:50}}>

       <View style={{marginLeft: 15, justifyContent:"center"}}>
         <Image source={require('../../assets/HomeScreenList2/search-interface-symbol.png')}
           style={{width:20, height:20, tintColor:'gray'}}/>   
        </View>
<TextInput style={{marginLeft:15, width: width*0.85, fontSize:12}}
          placeholder='Search dishes, restaurants or drinks'/>     

</View>
<RestCategory/>
    </SafeAreaView>
  )
}

export default RestaurantScreen

const styles = StyleSheet.create({})