import { StyleSheet, Text, StatusBar, SafeAreaView,Dimensions,View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import OgbonoTopTabs from '../navigation/OgbonoTopTabs';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const OgbonoDetailsScreen = () => {
    const navigation = useNavigation("");
    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(1500); // New state for the total price

    useEffect(() => {
      // Update the total price whenever the count changes
      setTotalPrice(1500 * count);
    }, [count]);
  

    let decrementCount = () =>{
        if (count > 1) {
          setCount(count-1)
      }
    }
    
    let addCount =()=>{
      setCount(count + 1)
    }
  return (
    <SafeAreaView  style={{flex:1,  backgroundColor:COLORS.white}}>
    <StatusBar backgroundColor={COLORS.white} />

    <View style={{width:width*0.9}}>
        <Image
           source={require('../../assets/cartlist/ogbono.jpg')}
           style={{width:380, height:250, marginTop:10, resizeMode:"cover",  }}/>
          <TouchableOpacity onPress={() => navigation.navigate('LocalDishesScreen')}>
            <Image source={require('../../assets/cartlist/cancel.png')} 
                   style={{ width: 30, height: 30, tintColor:"white",marginTop:-230, marginLeft:20}} />
          </TouchableOpacity>     
         
          </View >

          <View style={{flexDirection:"row", marginTop:10, marginLeft:10}}>
            <View>           
                <Text>Ogbono Soup </Text>
                <Text style={{fontSize:12}}>#{totalPrice} </Text>
            </View>

            <View style={{flexDirection:"row", marginLeft:190, marginTop:15}}>
                <TouchableOpacity onPress={decrementCount}>
                <Image source={require('../../assets/cartlist/minus.png')} style={{ width: 12, height: 15 }}/>
                </TouchableOpacity>

                <Text style={{marginTop:-5}}> {count} </Text>

                <TouchableOpacity onPress={addCount}>
                <Image source={require('../../assets/cartlist/plus.png')} style={{ width: 12, height: 15, marginTop:-1 }}/>
                </TouchableOpacity>
            </View>

          </View>

          <View style={{flexDirection:"row", marginTop:30}}>
            <View style={{flexDirection:"row", marginLeft:10}}>
             <Image source={require('../../assets/cartlist/star.png')} style={{ width: 15, height: 15, tintColor:"black" }}/>
             <Text style={{fontSize:12, marginLeft:5}}>4.0 </Text>
             </View>
             <View>
                <Text style={{fontSize:12, marginLeft:230}}> 30 mins </Text>
             </View>

          </View>

        

          <OgbonoTopTabs/>
          
    </SafeAreaView>
  )
}

export default OgbonoDetailsScreen

const styles = StyleSheet.create({})