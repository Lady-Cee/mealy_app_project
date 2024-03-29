import { StyleSheet, Text, StatusBar, SafeAreaView,Dimensions,View, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import FoodCategory from '../components/FoodCategory';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const FoodScreen = () => {
  const navigation = useNavigation("");
  return (
    <SafeAreaView  style={{flex:1,  backgroundColor:COLORS.white}}>
    <StatusBar backgroundColor={COLORS.white} />
<TouchableOpacity onPress={() => navigation.navigate('Home')}>
<Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 10 }} />
</TouchableOpacity>
<Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -20, alignSelf: 'center' }}>Food </Text>

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
        <View style={{flexDirection:"row", marginTop:2}}>
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                      <View style={{  
                        marginLeft:2,
                        // borderColor:"white",
                        height:50,
                        backgroundColor: "#caf0f8",
                        borderBottomWidth: 2,
                        borderBottomColor:  "black" ,
                        width:110,
                        alignItems:"center",
                        justifyContent:"center"}}> 
                    <Text style={{color:"gray"}}>All </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity  onPress={() => navigation.navigate('LocalDishesScreen')}>
                  <View style={{  
                      marginLeft:1,
                      height:50,
                      // backgroundColor: "#caf0f8",
                      // borderBottomWidth: 2,
                      // borderBottomColor:  "black" ,
                      width:100,
                      marginBottom:10,
                      alignItems:"center",
                      justifyContent:"center"}}>
                  <Text  style={{color:"gray"}}> Local </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ContinentalScreen')}>
                  <View style={{  
                      marginLeft:3,
                      borderColor:"white",
                      height:50,
                      borderWidth:1,
                      width:130,
                      alignItems:"center",
                      justifyContent:"center"}}>
                  <Text  style={{color:"gray"}}>Continental </Text>
                  </View>
                </TouchableOpacity>
     </View>
     <FoodCategory/>
     </SafeAreaView>
  )
}

export default FoodScreen

const styles = StyleSheet.create({})