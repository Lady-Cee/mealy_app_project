import { StyleSheet, Text, Image,SafeAreaView, Dimensions, StatusBar,View } from 'react-native'
import React from 'react'
import AllCategory from '../components/AllCategory';
import TopTabs from '../navigation/TopTabs';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');
const AllScreen = () => {
  return (
    <SafeAreaView
    style={{flex:1,  backgroundColor:COLORS.white}}>
   <StatusBar backgroundColor={COLORS.white}/>

   
    
        <Text style={{fontSize:10, marginTop: 20, marginLeft:30}}>Recent Searches</Text>
        <View style={{flexDirection:'row', marginLeft:30, marginTop:20 }}>
          <Image
            source={require('../../assets/HomeScreenList2/clk1.png')}
            style={{width:20, height:20,}}/>
            <Text style={{fontSize:12, marginLeft:30, marginTop:2}}>Drinks </Text>
        </View>

         <View style={{borderWidth:0.3, borderColor:"gray", width:width*0.85, alignSelf:"center",marginTop:20}}/>
  
         <Text style={{fontSize:12, marginTop: 20, marginLeft:30}}>Top Categories </Text>
      
         <View style={{borderWidth:0.3, borderColor:"gray", width:width*0.85, alignSelf:"center",marginTop:20}}/>
        <AllCategory/>
 
 
   </SafeAreaView>
  )
}

export default AllScreen

const styles = StyleSheet.create({})