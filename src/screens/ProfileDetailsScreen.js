import { StyleSheet, Text, Image, View , SafeAreaView, TouchableOpacity, StatusBar, Dimensions} from 'react-native'
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const ProfileDetailsScreen = () => {
    const navigation = useNavigation("");
  return (

    <SafeAreaView
      style={{flex:1, backgroundColor:COLORS.white}}>
      <StatusBar backgroundColor={COLORS.white}/>
    <View style={{flexDirection:"row"}}>
      <TouchableOpacity 
         onPress={() => navigation.navigate('ProfileScreen')}>
        <Image source={require('../../assets/cartlist/back-button.png')} 
        style={{ width: 25, height: 25, marginLeft: 20, marginTop: 15 }} />
        </TouchableOpacity>
        <Text style={{fontSize:20, marginLeft:60,marginTop:15 }}>Profile Details </Text>
          </View>

          <View style={{
            width:width*0.9, 
            alignSelf:"center",
            height:55, 
            borderWidth:1,
            marginTop:30,
            borderColor:'gray',
            borderRadius:2, flexDirection:"row"}}> 

            <View style={{paddingLeft:15, marginTop:5, }}>
                <Text>Account name </Text>
                <Text style={{color:"gray", fontSize:12, lineHeight:18,}}>Benny Tee </Text>
            </View>
            <View style={{marginLeft:160, marginTop:10}}>
            <AntDesign name="edit" size={24} color="gray" />
            </View>

          </View>

          
          <View style={{
            width:width*0.9, 
            alignSelf:"center",
            height:55, 
            borderWidth:1,
            marginTop:30,
            borderColor:'gray',
            borderRadius:2, flexDirection:"row"}}> 

            <View style={{paddingLeft:15, marginTop:5, }}>
                <Text>Phone number </Text>
                <Text style={{color:"gray", fontSize:12, lineHeight:18,}}>08012347855 </Text>
            </View>
            <View style={{marginLeft:160, marginTop:10}}>
            <AntDesign name="edit" size={24} color="gray" />
            </View>

          </View>

          
          <View style={{
            width:width*0.9, 
            alignSelf:"center",
            height:55, 
            borderWidth:1,
            marginTop:30,
            borderColor:'gray',
            borderRadius:2, flexDirection:"row"}}> 

            <View style={{paddingLeft:15, marginTop:5, }}>
                <Text>Email </Text>
                <Text style={{color:"gray", fontSize:12, lineHeight:18,}}>bentee@gmail.com </Text>
            </View>
            <View style={{marginLeft:160, marginTop:10}}>
            <AntDesign name="edit" size={24} color="gray" />
            </View>

          </View>

          <View style={{borderWidth:0.5, marginLeft:70,borderColor:'gray', marginTop:40, marginBottom: 30, width:width*0.75}}/>
    
          <View style={{
            width:width*0.9, 
            alignSelf:"center",
            height:45, 
            borderWidth:1,
            marginTop:-5,
            borderColor:'gray',
            borderRadius:2, flexDirection:"row"}}> 
                <Image
                 source={require('../../assets/profilescreenlist/delete.png')}
                 style={{width:20, height:20, tintColor:'red',marginLeft:10, marginTop:12}}/>
                 <Text style={{color:"red", marginTop:12, marginLeft:15}}>Delete account </Text>
                 <Image
                 source={require('../../assets/profilescreenlist/right-arrow.png')}
                 style={{width:20, height:20, tintColor:'gray', marginTop:12, marginLeft:140}}/>
            </View>
    

     
      </SafeAreaView>
    
  )
}

export default ProfileDetailsScreen

const styles = StyleSheet.create({})