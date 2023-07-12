import { StyleSheet, Text, View, Dimensions,FlatList,TouchableOpacity, Image, } from 'react-native'
import React from 'react'

const imageList = [
    {
        id: 1,
        title: 'Beef Burger',
        source: require('../../assets/continental_item/burger.jpg'),
       
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Wings',
        source: require('../../assets/continental_item/wings.jpg'),


        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Sharwama',
        source: require('../../assets/continental_item/sharwama.png'),
       
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Pancakes',
        source: require('../../assets/continental_item/pancake.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: 'Stir Fried Spag',
        source: require('../../assets/continental_item/spagetti.jpg'),
        // screen: 'DrinkScreen'
    },
    {
        id: 6,
        title: 'Chips',
        source: require('../../assets/continental_item/chips.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 7,
        title: 'Sandwich',
        source: require('../../assets/continental_item/sandwich.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 8,
        title: 'Chicken Pizza',
        source: require('../../assets/continental_item/pizza.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 9,
        title: 'Basmati Fried rice',
        source: require('../../assets/continental_item/basmati.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 10,
        title: 'Spiced Prawns',
        source: require('../../assets/continental_item/prawns.png'),
        // screen: 'DrinkScreen'
    },
]

const renderItem= ({item}) => (
    <View style={styles.imageContainer}>
        <Image
         source={item.source}
         style={styles.image}/>

          {/* <Image
         source={item.source}
         style={styles.image}/> */}

        <View style ={styles.title}>
        <Text style={{color:"white", fontSize:16, fontWeight:"800"}} >{item.title} </Text>
        </View>
    </View>
  
);

const ContinentalCategory = () => {
  return (
    <FlatList
    data={imageList}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}     
    numColumns={2}  
    />
  )
}

export default ContinentalCategory

const styles = StyleSheet.create({
    imageContainer:{
        flexDirection:"row",
        // justifyContent:"space-between",
        paddingHorizontal:15
    },
    image:{
        width:150,
        aspectRatio:1,
        marginBottom:20,
        borderRadius:10

    },
    title:{
        position:"absolute",
        left:20,
        top:70
    }
})