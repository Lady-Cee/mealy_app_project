import { StyleSheet,
   Text, 
   SafeAreaView, 
   Dimensions,
   Image, 
   TouchableOpacity,
   StatusBar,
   View, 
   Button,
   Platform,
   TextInput, ScrollView, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const CheckoutScreen = () => {
  const navigation = useNavigation ('');
  const [date, setDate] = useState(new Date ());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [text, setText] = useState("mm/dd/yyyy");
  
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate)

    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() +1 ) + '/' + tempDate.getFullYear();
    let fTime = 'Hours: ' + tempDate.getHours() + ' | Minutes' + tempDate.getMinutes();
    setText(fDate + '\n' + fTime)

    console.log(fDate + ' (' + fTime + ')')
  }

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  }

  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar backgroundColor={COLORS.white} />
    <TouchableOpacity onPress={() => navigation.navigate('MyCartScreen')}>
      <Image source={require('../../assets/cartlist/cancel.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop:20 }} />
    </TouchableOpacity>
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: -25, alignSelf: 'center' }}>Checkout </Text>
   
      <View style={{flexDirection:'row', marginTop:20, justifyContent:"center"}}>
        <TouchableOpacity>
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
                
              <View style={{ paddingLeft:280, paddingRight:15,  marginTop:40}}>
              
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
                
                   <View style={{marginTop:15}}>
                     <Text style={{fontSize:12, color:'gray', paddingLeft:15, }}>{text}</Text>
                     </View>
                  <View style={{paddingLeft:15, paddingRight:15, justifyContent:"space-between", marginTop:-80}}>
                    <TouchableOpacity onPress={() => showMode ('date')} >
                      <Text style={{marginLeft:-5, marginTop:-1}}> Enter Date</Text>
                    </TouchableOpacity> 
                    </View>

           
                
              
                {show && (
                  <DateTimePicker
                  testID='dateTimePicker'
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display='default'
                  onChange={onChange}
                  />
                )}
                
            </View> 
            

            <View style={{fontSize:12,paddingLeft:25, marginTop:30}}>
                    <TouchableOpacity onPress={() => showMode ('time')} >
                      <Text> Select Time</Text>
                    </TouchableOpacity> 
                    </View>
            <View style={{marginTop:50}}>
                <TouchableOpacity style={{ height: 40, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }} onPress={() => navigation.navigate('PaymentScreen')}>Proceed to pay</Text>
                </TouchableOpacity>
           </View>
  </SafeAreaView>
  </ScrollView>
  )
}

export default CheckoutScreen

const styles = StyleSheet.create({})