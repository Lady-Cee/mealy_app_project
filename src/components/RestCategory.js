import { StyleSheet, Text, View, Dimensions,FlatList,TouchableOpacity, Image, ImageBackground } from 'react-native'
import React from 'react'

const imageList = [
    {
        id: 1,
        title: 'KFC',
        price: '#1,000 Delivery Fee. 20-40min',
        rating: '4.6',
        source: require('../../assets/Restaurant/kfc.png'),
       
        // screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Debonairs Pizza',
        price: '#1,000 Delivery Fee. 25-40min',
        rating: '4.3',
        source: require('../../assets/Restaurant/deb.png'),


        // screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Black Bell Restaurant',
        price: '#1,000 Delivery Fee. 20-45min',
        rating: '4.4',
        source: require('../../assets/Restaurant/black.png'),
       
        // screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'The Place',
        price: '#1,000 Delivery Fee. 20-45min',
        rating: '4.2',
        source: require('../../assets/Restaurant/place.png'),
        // screen: 'DrinkScreen'
    },
    {
        id: 5,
        title: 'Burger King',
        price: '#1,000 Delivery Fee. 15-30min',
        rating: '4.3',
        source: require('../../assets/Restaurant/burger.png'),
        // screen: 'DrinkScreen'
    },
]

const renderItem= ({item}) => (
    <View style={{alignSelf:'center', marginTop:20}}>

            <Image  
            source={item.source}
            style={styles.image} />

            
                <View style={{flexDirection:"row"}}>
                    <View>
                        <View style ={styles.title}>
                        <Text style={{ fontSize:14, fontWeight:"bold"}} >{item.title} {'\n'} {item.name} </Text>
                        </View>

                        <View style ={styles.price}>
                        <Text style={{fontSize:11, fontWeight:"bold", color:"gray"}} >{item.price}  </Text>
                        </View>
                </View>
                        <View style ={styles.rating}>
                        <Text style={{fontSize:10, fontWeight:"bold"}} >{item.rating}  </Text>
                        </View>
            </View>
</View>
 
);

const RestCategory = () => {
  return (
    <FlatList
    data={imageList}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}     
    // numColumns={2}  
    />
  )
}

export default RestCategory

const styles = StyleSheet.create({
    image:{
        width:320,
        height:190,
        marginBottom:5,
        borderRadius:10,
        // resizeMode:"contain"
        // aspectRatio:1,
        // marginBottom:-5,
        // borderRadius:10,
        // backgroundColor: '#001219',
        // opacity:0.6,
        // marginLeft:13,
        // marginTop: 15,

    },
    title:{
       marginLeft: 10
        
    },
    price:{
        marginTop:-18,
        marginLeft: 10,
  
    },

    rating:{
        marginLeft: 80,
        borderWidth:1,
        borderRadius:50,
        height:20,
        justifyContent: 'center',
        paddingLeft:4,
        backgroundColor:"#bde0fe",
        borderColor:'#bde0fe',
        marginTop:5
    }
})