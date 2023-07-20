import { StyleSheet, Text, View, Dimensions,FlatList,TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'

const imageList = [
    {
        id: 1,
        title: 'Rice',
        source: require('../../assets/foodDrink/chickenrice.png'),
       
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Water',
        source: require('../../assets/foodDrink/water.png'),


        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Noodles',
        source: require('../../assets/foodDrink/noodles.png'),
       
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Pasta',
        source: require('../../assets/foodDrink/pasta.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: 'Farm Pride',
        source: require('../../assets/foodDrink/farm.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 6,
        title: 'Dessert',
        source: require('../../assets/foodDrink/dessert.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 7,
        title: 'Sandwich',
        source: require('../../assets/foodDrink/sandwich.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 8,
        title: 'Fruit Juice',
        source: require('../../assets/foodDrink/fruitjuice.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 9,
        title: 'Soda',
        source: require('../../assets/foodDrink/soda.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 10,
        title: 'Healthy',
        source: require('../../assets/foodDrink/healthy.png'),
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
const FoodDrinkCategory = () => {
  return (
    <FlatList
    data={imageList}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}     
    numColumns={2}  
    />
  )
}

export default FoodDrinkCategory

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