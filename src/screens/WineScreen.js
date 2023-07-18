import { StyleSheet, Text, View, Dimensions,FlatList, StatusBar,ImageBackground,TouchableOpacity, Image, SafeAreaView, } from 'react-native'
import React from 'react'

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const imageList = [
    {
        id: 1,
        title: 'Four',
        name:'Cousins',
        source: require('../../assets/drinks/wine/cousins.png'),
       
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Moet & Chandon',
        source: require('../../assets/drinks/wine/moet.png'),


        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Carlo',
        name:' Rossi',
        source: require('../../assets/drinks/wine/rossi.png'),
       
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Baron',
        name:' Romero',
        source: require('../../assets/drinks/wine/baron.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: 'Agor',
        source: require('../../assets/drinks/wine/agor.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 6,
        title: '4th Street',
        source: require('../../assets/drinks/wine/street.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 7,
        title: 'Apothic',
        name:' Red',
        source: require('../../assets/drinks/wine/apothic.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 8,
        title: 'Lamothe Parrot',
        source: require('../../assets/drinks/wine/lamothe.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 9,
        title: 'Escudo',
        name:'Rojo',
        source: require('../../assets/drinks/wine/escudo.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 10,
        title: 'Castillo',
        source: require('../../assets/drinks/wine/castillo.png'),
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
const WineScreen = () => {
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

export default WineScreen

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