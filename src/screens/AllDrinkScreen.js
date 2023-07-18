import { StyleSheet, Text, StatusBar, SafeAreaView,Dimensions,View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import AllScreen from './AllScreen';
import TopTabs from '../navigation/TopTabs';
// import TopTabs from '../navigation/TopTabs';
// import TopTabs from '../navigation/TopTabs';
const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const Tab = createMaterialTopTabNavigator();


const AllDrinkScreen = () => {
  const navigation = useNavigation("");

  return (
    <SafeAreaView  style={{flex:1,  backgroundColor:COLORS.white}}>
            <StatusBar backgroundColor={COLORS.white} />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 10 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -20, alignSelf: 'center' }}> Drinks </Text>

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
            
      <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 25, alignSelf: 'center', width: width * 1 }} />
     
   <TopTabs/>

    {/* <View style={{ height:40, marginTop:15, borderColor:COLORS.gray, alignSelf:'flex-start',width: width*0.7,borderWidth:1, marginLeft:15,flexDirection:'row', borderRadius:50}}>
               <View style={{marginLeft: 15, justifyContent:"center"}}>
                 <Image source={require('../../assets/HomeScreenList2/search-interface-symbol.png')}
                   style={{width:20, height:20, tintColor:'gray'}}/>   
                </View>
        <TextInput style={{marginLeft:10, width: width*0.75, fontSize:10}}
                  placeholder='Search dishes, restaurants or drinks'/>     
       
      </View>
        <TouchableOpacity  onPress={() => navigation.navigate('AllMenuScreen')}>
        <View style={{position:'absolute', top:-30, right:30}}>
            <Text>Cancel </Text> 
        </View>
        </TouchableOpacity>
<View style ={{marginBottom:20}}/>
      <TopTabs/> */}
        

     
    </SafeAreaView>
  )
}

export default AllDrinkScreen

const styles = StyleSheet.create({})