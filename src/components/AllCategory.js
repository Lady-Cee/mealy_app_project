import { FlatList, StyleSheet, Image, Text, Dimensions, TouchableOpacity, View } from 'react-native'
import React from 'react';
const {width, height} = Dimensions.get('screen');

const categories = [
    {
        id: 1,
        title: 'Breakfast',
        image: require('../../assets/listall/brk.jpg'),
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Dessert',
        image: require('../../assets/listall/des.jpg'),
        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Lunch',
        image: require('../../assets/listall/lun.jpg'),
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Chinese',
        image: require('../../assets/listall/chi.jpg'),
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: 'Seafood',
        image: require('../../assets/listall/sf.jpg'),
        // screen: 'DrinkScreen'
    },
    {
        id: 6,
        title: 'Native food',
        image: require('../../assets/listall/native.jpg'),
        // screen: 'DrinkScreen'
    },
    {
        id: 7,
        title: 'Drinks',
        image: require('../../assets/listall/drinks.jpg'),
        // screen: 'DrinkScreen'
    },
]



const AllCategory = () => {
  return (
    <FlatList
    data={categories}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity>
            <View style={{marginTop :20, marginLeft:30, flexDirection:"row"}}>
                <Image
                 style={{width:100, height :100, borderRadius:100}}
                 source={item.image}/>
                <View style={{justifyContent:"center"}}>
                  <Text style={{fontSize:14, marginLeft: 30, color:"gray", marginTop:5}}>{item.title} </Text>
                  </View>
            </View>

            <View style={{borderWidth:0.3, borderColor:"gray", width:width*0.85, alignSelf:"center",marginTop:20}}/>

        </TouchableOpacity>
    )}
    
    
    
    
    />
  )
}

export default AllCategory

const styles = StyleSheet.create({})