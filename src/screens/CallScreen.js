import { StyleSheet,
  Text, SafeAreaView, StatusBar,
  Dimensions,
 TouchableOpacity, View,Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const CallScreen = () => {
  const navigation = useNavigation("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar backgroundColor={COLORS.white} />

    <Text style={{fontSize:25, marginTop:10, alignSelf:"center"}}>100 </Text>
    <Text style={{fontSize:10, marginTop:10, alignSelf:"center", color:"gray"}}>Calling... </Text>
    
    <View style={{height:120, width:120, borderRadius:60,borderWidth:5, borderColor:"#cce3de",alignItems:"center", alignSelf:"center", marginTop:70, justifyContent:"center"}}>
     <Image source={require('../../assets/tabsIcon/user.png')}
            style={{width:60, height:60}}
     />
    </View>
    <Text style={{alignSelf:"center", fontSize:12, color:"gray", marginTop:20, marginBottom:100}}>Support </Text>

    <View style={{ flexDirection:"row",  marginLeft:50,}}>
      <View style={{
         height:40, 
         width:40, 
         borderRadius:50,
         borderWidth:0.5, 
         borderColor:"gray",
         alignItems:"center",
         alignSelf:"center", 
         justifyContent:"center"}}
      >
        <TouchableOpacity>
        <Image source={require('../../assets/HomeScreenList2/microphone.png')}
              style={{width:20, height:20}}/>
       </TouchableOpacity>
      </View>

      
      <View  style={{
         height:40, 
         width:40, 
         borderRadius:50,
         borderWidth:0.5, 
         borderColor:"gray",
         alignItems:"center",
         alignSelf:"center", 
         justifyContent:"center",
         marginLeft:70}}>
          <TouchableOpacity>
        <Image source={require('../../assets/HomeScreenList2/keypad.png')}
              style={{width:20, height:20}}/>
         </TouchableOpacity>
       
      </View>
     


    
      <View  style={{
         height:40, 
         width:40, 
         borderRadius:50,
         borderWidth:0.5, 
         borderColor:"gray",
         alignItems:"center",
         alignSelf:"center", 
         justifyContent:"center",
         marginLeft:70}}>
            <TouchableOpacity>
        <Image source={require('../../assets/HomeScreenList2/volume.png')}
              style={{width:20, height:20}}/>
         </TouchableOpacity>
      </View>
     
    </View>

    <View style={{flexDirection:"row", marginTop:10}}>
    <Text style={{marginLeft:48, fontSize:12}}>Mute </Text>
    <Text style={{marginLeft:73, fontSize:12}}>Keypad </Text>
    <Text style={{marginLeft:63, fontSize:12}}>Speaker </Text>
    </View>


   <TouchableOpacity>
    <Image source={require('../../assets/HomeScreenList2/phone.png')}
            style={{width:100, height:100, alignSelf:"center", marginTop:120}}
     />
     </TouchableOpacity>
  
  
    </SafeAreaView>
  )
}

export default CallScreen

const styles = StyleSheet.create({})