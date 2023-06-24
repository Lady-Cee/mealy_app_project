import { StyleSheet, Text, View , SafeAreaView, StatusBar,Dimensions, TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');


const HomeTrend = () => {
    const navigation = useNavigation("");
  return (
   
    <SafeAreaView
    style={{flex:1, alignItems:'center',  backgroundColor:COLORS.white}}>
   <StatusBar backgroundColor={COLORS.white}/>
    <View style={{flexDirection:'row',marginTop:10, }}>
      <Text>Trending </Text>
    <TouchableOpacity>
         <Text style={{marginLeft:200, color:'green'}} >View All </Text> 
         </TouchableOpacity>
    </View>
    </SafeAreaView>
  )
}

export default HomeTrend

const styles = StyleSheet.create({})