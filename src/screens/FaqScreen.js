import { StyleSheet, Text, Image,Dimensions, SafeAreaView,View, TouchableOpacity,StatusBar } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');
const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};

const FaqScreen = () => {
    const navigation = useNavigation("");
  return (
    <SafeAreaView
    style={{flex:1, backgroundColor:COLORS.white}}>
    <StatusBar backgroundColor={COLORS.white}/>

    <View style={{flexDirection:'row'}}>
    <TouchableOpacity 
         onPress={() => navigation.navigate('ProfileScreen')}>
        <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 30, marginTop: 20 }} />
      </TouchableOpacity>
      <Text style={{fontSize:18, marginLeft:90,marginTop:20 }}>FAQ </Text>
      </View>

    <TouchableOpacity>
      <View style={{flexDirection:"row", marginTop:50, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>How can I pay for my order? </Text>
        <Image source={require('../../assets/HomescreenList1/down-arrow.png')} 
        style={{ width: 20, height: 20, tintColor:"gray" , marginLeft:117}} />
      </View>
      </TouchableOpacity>
      {/* <Text>Mealy ofer vaarious payment options, including credit/ debit handleCardPress
        mobile wallets and bank transter.
        You can choose your preferred payment method during the check out process.
      </Text> */}
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>
      
      <TouchableOpacity>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>Can I track the status of my order? </Text>
        <Image source={require('../../assets/HomescreenList1/down-arrow.png')} 
        style={{ width: 20, height: 20, tintColor:"gray" , marginLeft:75}} />
      </View>
      </TouchableOpacity>
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>

      <TouchableOpacity>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>Can I schedule a uture delivery or pick-up time? </Text>
        <Image source={require('../../assets/HomescreenList1/down-arrow.png')} 
        style={{ width: 20, height: 20, tintColor:"gray" , marginLeft:3}} />
      </View>
      </TouchableOpacity>
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>

      <TouchableOpacity>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>What if there is an issue with my order? </Text>
        <Image source={require('../../assets/HomescreenList1/down-arrow.png')} 
        style={{ width: 20, height: 20, tintColor:"gray" , marginLeft:48}} />
      </View>
      </TouchableOpacity>
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>

      <TouchableOpacity>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>Can I customise my food order? </Text>
        <Image source={require('../../assets/HomescreenList1/down-arrow.png')} 
        style={{ width: 20, height: 20, tintColor:"gray" , marginLeft:95}} />
      </View>
      </TouchableOpacity>
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>

      <TouchableOpacity>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:25}}>
        <Text style={{fontSize:12, color:"gray"}}>Can I save my favourite restaurants and orders? </Text>
        <Image source={require('../../assets/HomescreenList1/down-arrow.png')} 
        style={{ width: 20, height: 20, tintColor:"gray" , marginLeft:2}} />
      </View>
      </TouchableOpacity>
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>

      <TouchableOpacity>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>Can I cancel my order? </Text>
        <Image source={require('../../assets/HomescreenList1/down-arrow.png')} 
        style={{ width: 20, height: 20, tintColor:"gray" , marginLeft:147}} />
      </View>
      </TouchableOpacity>
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>
      </SafeAreaView>

  )
}

export default FaqScreen

const styles = StyleSheet.create({})