import { StyleSheet, Text, View, Dimensions,FlatList, StatusBar,TouchableOpacity, ImageBackground, Image, SafeAreaView, } from 'react-native'
import React from 'react'

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const imageList = [
    {
        id: 1,
        title: 'Maltina',
        source: require('../../assets/drinks/soda/maltina.png'),
       
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Coca-Cola',
        source: require('../../assets/drinks/soda/coca.png'),


        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Zero-Coke',
        source: require('../../assets/drinks/soda/zero.png'),
       
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Fanta',
        source: require('../../assets/drinks/soda/fanta.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: 'Sprite',
        source: require('../../assets/drinks/soda/sprite.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 6,
        title: 'Schwepps',
        source: require('../../assets/drinks/soda/schweppes.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 7,
        title: 'Pepsi',
        source: require('../../assets/drinks/soda/prpsi.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 8,
        title: '7up',
        source: require('../../assets/drinks/soda/7up.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 9,
        title: 'Fayrouz',
        source: require('../../assets/drinks/soda/fay.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 10,
        title: 'Monster Energy',
        source: require('../../assets/drinks/soda/monster.png'),
        // screen: 'DrinkScreen'
    },
]

const renderItem= ({item}) => (
    <ImageBackground 
       
         source={item.source}
         style={styles.image} >

    

        <View style ={styles.title}>
        <Text style={{color:"white", fontSize:22, fontWeight:"bold"}} >{item.title} </Text>
        </View>
    </ImageBackground>
  
);
const SodaScreen = () => {
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

export default SodaScreen

const styles = StyleSheet.create({
    // imageContainer:{
    //     flexDirection:"row",
    //     // justifyContent:"space-between"
    //     marginLeft:13,
    //     marginTop: 15,
    //     // backgroundColor: 'gray'
     
    //     // paddingHorizontal:10,
        
    // },
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