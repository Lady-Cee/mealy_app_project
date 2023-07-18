import { StyleSheet, Text, View, Dimensions,FlatList, StatusBar,TouchableOpacity, ImageBackground, SafeAreaView, } from 'react-native'
import React from 'react'

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const imageList = [
    {
        id: 1,
        title: 'Ceres',
        source: require('../../assets/drinks/juice/ceres.png'),
       
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Chi Exotic',
        source: require('../../assets/drinks/juice/chi.png'),


        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Ocean Spray Cranberry',
        source: require('../../assets/drinks/juice/ocean.png'),
       
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Farm Pride',
        source: require('../../assets/drinks/juice/farm.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: '5Alive',
        source: require('../../assets/drinks/juice/5alive.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 6,
        title: 'Happy Hour',
        source: require('../../assets/drinks/juice/happy.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 7,
        title: 'Frutta',
        source: require('../../assets/drinks/juice/frutta.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 8,
        title: 'Pulpy 5alive',
        source: require('../../assets/drinks/juice/pulpy.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 9,
        title: 'Chi Active',
        source: require('../../assets/drinks/juice/active.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 10,
        title: 'Welch',
        source: require('../../assets/drinks/juice/welch.png'),
        // screen: 'DrinkScreen'
    },
]

const renderItem= ({item}) => (
    <ImageBackground

      
    source={item.source}
    style={styles.image}>

  

   <View style ={styles.title}>
   <Text style={{color:"white", fontSize:20, fontWeight:"bold"}} >{item.title} {'\n'} {item.name} </Text>
   </View>

</ImageBackground>
  
);
const JuiceScreen = () => {
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

export default JuiceScreen

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
       left:30,
       top:60,
    }
})