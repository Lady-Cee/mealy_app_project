import { StyleSheet, Text, View, ImageBackground, Dimensions,FlatList, StatusBar,TouchableOpacity, Image, SafeAreaView, } from 'react-native'
import React from 'react'

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const imageList = [
    {
        id: 1,
        title: 'Maltina',
        source: require('../../assets/drinks/All/maltina.png'),
       
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Hollandia Yoghurt',
        source: require('../../assets/drinks/All/hollandia.jpg'),


        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Wine',
        source: require('../../assets/drinks/All/wine.png'),
       
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Beer',
        source: require('../../assets/drinks/All/beer.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: 'Farm Pride',
        source: require('../../assets/drinks/All/farm.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 6,
        title: 'Can Soda',
        source: require('../../assets/drinks/All/can.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 7,
        title: 'Water',
        source: require('../../assets/drinks/All/water.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 8,
        title: 'Plastic',
        name:"Soda",
        source: require('../../assets/drinks/All/soda.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 9,
        title: 'Ribena',
        source: require('../../assets/drinks/All/ribena.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 10,
        title: 'Exotic',
        source: require('../../assets/drinks/All/exotic.png'),
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
const DrinkScreen = () => {
  return (
    <SafeAreaView  style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar backgroundColor={COLORS.white} />
    <FlatList
    data={imageList}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}     
    numColumns={2}  
    />
    </SafeAreaView>
  )
}

export default DrinkScreen

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