import { StyleSheet, Text, TextInput, Image,SafeAreaView, Dimensions, StatusBar,View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import ContinentalCategory from '../components/ContinentalCategory';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');

const ContinentalScreen = () => {
  const navigation = useNavigation("");
  return (
    <SafeAreaView  style={{flex:1,  backgroundColor:COLORS.white}}>
       <StatusBar backgroundColor={COLORS.white} />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 10 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -20, alignSelf: 'center' }}> Continental dishes </Text>

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
              <TouchableOpacity onPress={() => navigation.navigate('FoodScreen')}>
                      <View style={{  
                        marginLeft:10,
                        borderColor:"white",
                        height:50,
                        borderWidth:1,
                        width:100,
                        alignItems:"center",
                        justifyContent:"center"}}> 
                    <Text style={{color:"gray"}}>All </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('LocalDishesScreen')}>
                  <View style={{  
                      marginLeft:1,
                      borderColor:"white",
                      height:50,
                      borderWidth:1,
                      width:100,
                      alignItems:"center",
                      justifyContent:"center"}}>
                  <Text  style={{color:"gray"}}>Local </Text>
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

      <ContinentalCategory/>
    </SafeAreaView>
  )
}

export default ContinentalScreen

const styles = StyleSheet.create({})