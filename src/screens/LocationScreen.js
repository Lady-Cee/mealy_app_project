import {
   StyleSheet,
   SafeAreaView, 
   TouchableOpacity,
   Text, View, StatusBar,Dimensions } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');

const LocationScreen = () => {
    const navigation = useNavigation();
  return (
    < SafeAreaView  style={{flex:1, backgroundColor: COLORS.white}}>
        <StatusBar backgroundColor={COLORS.white}/>
        <Text> LocationScreen</Text>
        <View style={{marginTop:600}} >   
        <TouchableOpacity   
          style={[styles.btnLast]}
          
        >
          <Text style={{
            fontWeight:"bold", 
            fontSize:15, 
            color:COLORS.white}}
            onPress = {() => navigation.navigate('BottomTabs')}>Save and Continue</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default LocationScreen

const styles = StyleSheet.create({
  btnLast:{
    height:50,
    width: width*0.9,
    alignSelf:'center',
    borderRadius:50,
    backgroundColor:COLORS.green,
    justifyContent:'center',
    alignItems:"center",
    
    
},
})
