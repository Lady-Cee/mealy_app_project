import { StyleSheet, Text, View, Dimensions,FlatList, StatusBar,TouchableOpacity, ImageBackground, SafeAreaView, } from 'react-native'
import React from 'react'

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const imageList = [
    {
        id: 1,
        title: 'Heineken',
        source: require('../../assets/drinks/beer/heineken.png'),
       
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Budweiser',
        source: require('../../assets/drinks/beer/bud.png'),


        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Goldberg',
        source: require('../../assets/drinks/beer/gold.png'),
       
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Gulder',
        source: require('../../assets/drinks/beer/gulder.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: 'Life',
        source: require('../../assets/drinks/beer/life.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 6,
        title: 'Tiger',
        source: require('../../assets/drinks/beer/tiger.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 7,
        title: 'Trophy',
        source: require('../../assets/drinks/beer/trophy.png')
        // screen: 'DrinkScreen'
    },
    {
        id: 8,
        title: '33 Export',
        source: require('../../assets/drinks/beer/33.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 9,
        title: 'Hero',
        source: require('../../assets/drinks/beer/hero.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 10,
        title: 'Star',
        source: require('../../assets/drinks/beer/star.png'),
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
const BeerScreen = () => {
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

export default BeerScreen

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