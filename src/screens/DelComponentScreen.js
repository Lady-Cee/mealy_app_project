import { StyleSheet, Text, View, SafeAreaView, Image, Dimensions, TextInput, TouchableOpacity, StatusBar } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');
const DelComponentScreen = () => {
    const navigation = useNavigation('');

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar backgroundColor={COLORS.white} />
    <TouchableOpacity onPress={() => navigation.navigate('MyCartScreen')}>
      <Image source={require('../../assets/cartlist/cancel.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop:20 }} />
    </TouchableOpacity>
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: -25, alignSelf: 'center' }}>Checkout </Text>
   
      <View style={{flexDirection:'row', marginTop:20, justifyContent:"center"}}>
        <TouchableOpacity onPress={() => navigation.replace('DelComponentScreen')}>
          <View style={{height:50,justifyContent:"center", borderBottomWidth:1, borderBottomColor:"black",  backgroundColor: '#EAFFE5', borderColor:COLORS.gray, width:width*0.5}}>
              <Text style={{textAlign: 'center'}}>Delivery </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{height:50, justifyContent:"center",backgroundColor: '#FAFAFA', borderBottomWidth:0.3, borderBottomColor:"gray", borderColor:COLORS.gray, width:width*0.5}}>
            <Text style={{textAlign: 'center'}}>Pickup </Text>
        </View>
        </TouchableOpacity>       
    </View>
      <View style={{ height:40, marginTop:10, borderColor:COLORS.gray, alignSelf:'center',width: width*0.9,borderWidth:1, flexDirection:'row', borderRadius:5}}>
               <View style={{marginLeft: 7, justifyContent:"center"}}>
                 <Image source={require('../../assets/HomescreenList1/location.png')}
                   style={{width:20, height:20, tintColor:'gray'}}/>   
                </View>
        <TextInput style={{marginLeft:5, width: width*0.75, fontSize:12}}/>
                
        <View style={{marginLeft:-10, justifyContent:'center'}}>
                  <Image source={require('../../assets/HomescreenList1/down-arrow.png')}
                  style={{width:20, height:20,tintColor:'gray' }}/>  
                </View> 
      </View>
      <View style ={{
          width:width*0.9,
          height:120, 
          marginTop:15,
          borderWidth:1,
          alignSelf:"center",
           borderRadius:10, 
           borderColor:COLORS.gray, 
           justifyContent:"space-between",
           paddingLeft:5,
           paddingRight:7,
           paddingTop:10,
           flexDirection:"row"}}>
            <View> 
              <Text  style={{fontSize:12, color:COLORS.gray}}> ETA</Text>
             </View>
             <View style={{marginTop:80, marginLeft:50}}> 
              <Text style={{fontSize:12, color:COLORS.gray}}>Or </Text>
             </View>
             <View> 
              <Text  style={{fontSize:12, color:COLORS.gray}}> 30 minutes </Text>
            </View>    
      </View>

      <Text style={{marginTop:10, alignSelf:"center"}}> Schedule delivery </Text>

          <View style ={{
                width:width*0.9,
                height:120, 
                marginTop:15,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,
                borderWidth:1,
                alignSelf:"center",
                borderColor:COLORS.gray}}>
              <Text style={{fontSize:12, paddingLeft:15, paddingTop:15}}>Select date </Text>
              <View style={{flexDirection:"row", paddingLeft:15, paddingRight:15, justifyContent:"space-between", marginTop:40}}>
                  <Text>Enter date </Text>
                  <Image source={require('../../assets/cartlist/calendar.png')}
                         style={{width:20, height:20}}/>
              </View>

            </View>   

            <View style ={{
                  width:width*0.9,
                  height:120, 
                  borderWidth:1,
                  alignSelf:"center",
                  borderBottomLeftRadius:20,
                  borderBottomRightRadius:20,
                  borderColor:COLORS.gray,  }}>

                <View style={{
                   height:40,
                   marginTop:15,
                    borderColor:COLORS.gray,
                     alignSelf:'center',
                     width: width*0.8,
                     borderWidth:1, 
                     borderRadius:3}}>
                    <Text style={{fontSize:12, color:'gray', marginTop:7, paddingLeft:10}}>mm/dd/yyyy</Text>
                    
                 </View>
                 <View style={{flexDirection:'row', paddingRight:20, paddingTop: 30,justifyContent:'flex-end'}}>
                  <Text  style={{fontSize:12, color:'gray', marginRight:30}}>Cancel </Text>
                  <Text  style={{fontSize:12, color:'gray'}}>OK </Text>
                 </View>
            </View> 
            <Text style={{fontSize:12,paddingLeft:25, marginTop:30}}>Select time </Text>

            <View style={{marginTop:50}}>
                <TouchableOpacity style={{ height: 40, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }} onPress={() => navigation.navigate('PaymentScreen')}>Proceed to pay</Text>
                </TouchableOpacity>
           </View>
  </SafeAreaView>
  )
}

export default DelComponentScreen

const styles = StyleSheet.create({})