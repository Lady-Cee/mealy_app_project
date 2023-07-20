import { StyleSheet, Text, View, Dimensions,FlatList,TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'

const imageList = [
    {
        id: 1,
        title: 'Rice',
        source: require('../../assets/food/chickenrice.png'),
       
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Wings',
        source: require('../../assets/food/wings.jpg'),


        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Noodles',
        source: require('../../assets/food/noodles.png'),
       
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Pasta',
        source: require('../../assets/food/pasta.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: 'Seafood',
        source: require('../../assets/food/seafood.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 6,
        title: 'Dessert',
        source: require('../../assets/food/dessert.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 7,
        title: 'Sandwich',
        source: require('../../assets/food/sandwich.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 8,
        title: 'Fish',
        source: require('../../assets/food/fish.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 9,
        title: 'Chinese',
        source: require('../../assets/food/chinese.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 10,
        title: 'Healthy',
        source: require('../../assets/food/healthy.png'),
        // screen: 'DrinkScreen'
    },
]

const renderItem= ({item}) => (
     <ImageBackground

      
    source={item.source}
    style={styles.image}>

  

   <View style ={styles.title}>
   <Text style={{color:"white", fontSize:22, fontWeight:"bold"}} >{item.title} {'\n'} {item.name} </Text>
   </View>

</ImageBackground>
  
);

const FoodCategory = () => {
  return (
    <FlatList
    data={imageList}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}     
    numColumns={2}  
    />
  )
}

export default FoodCategory

const styles = StyleSheet.create({
    image:{
        width:160,
        aspectRatio:1,
        marginBottom:-5,
        borderRadius:10,
        backgroundColor: '#001219',
        opacity:0.6,
        marginLeft:13,
        marginTop: 15,

    },
    title:{
        position:"absolute",
        left:40,
        top:60,
               
    }
    
})