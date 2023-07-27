import { StyleSheet, Text, View, Dimensions,FlatList,TouchableOpacity, Image, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const {width, height} = Dimensions.get('screen');

const imageList = [
    {
        id: 1,
        title: 'Ogbono Soup',
        source: require('../../assets/local_item/ogbono.png'),
        screen: 'OgbonoDetailsScreen'
    },
    {
        id: 2,
        title: 'Amala',
        source: require('../../assets/local_item/Amala.png'),
        screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Moi moi',
        source: require('../../assets/local_item/moi-moi.jpg'),
        screen: 'LocalDishesScreen'
    },
    {
        id: 4,
        title: 'Asun',
        source: require('../../assets/local_item/Asun.png'),
        screen: 'LocalDishesScreen'
    },
    {
        id: 5,
        title: 'Banga Soup',
        source: require('../../assets/local_item/banga.png'),
        screen: 'LocalDishesScreen'
    },
    {
        id: 6,
        title: 'Afang Soup',
        source: require('../../assets/local_item/Afang.png'),
        screen: 'LocalDishesScreen'
    },
    {
        id: 7,
        title: 'Suya',
        source: require('../../assets/local_item/suya.png'),
        screen: 'LocalDishesScreen'
    },
    {
        id: 8,
        title: 'Akara',
        source: require('../../assets/local_item/akara.png'),
        screen: 'LocalDishesScreen'
    },
    {
        id: 9,
        title: 'Kilishi',
        source: require('../../assets/local_item/kilishi.png'),
        screen: 'LocalDishesScreen'
    },
    {
        id: 10,
        title: 'Egusi Soup',
        source: require('../../assets/local_item/egusi.png'),
        screen: 'LocalDishesScreen'
    },
]

// const renderItem= ({item, navigation, navigate}) => (

   
//   <TouchableOpacity  onPress={() => navigation.navigate(item.screen)}>
//       <View style={styles.imageContainer}>
        
       
//             <Image
//          source={item.source}
//          style={styles.image}/>
         

//           {/* <Image
//          source={item.source}
//          style={styles.image}/> */}

//         <View style ={styles.title}>
//         <Text style={{color:"white", fontSize:18, fontWeight:"800"}} >{item.title} </Text>
//         </View>
//     </View>
//     </TouchableOpacity>
// );

const LocalCategory = () => {
    const navigation = useNavigation("");
     return (
    <FlatList
    data={imageList}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity  onPress={() => navigation.navigate(item.screen)}>
        <View style={styles.imageContainer}>
          
         
              <Image
           source={item.source}
           style={styles.image}/>
           
  
            {/* <Image
           source={item.source}
           style={styles.image}/> */}
  
          <View style ={styles.title}>
          <Text style={{color:"white", fontSize:18, fontWeight:"800"}} >{item.title} </Text>
          </View>
      </View>
      </TouchableOpacity>
    )}     
    numColumns={2}  
    />
  )
}

export default LocalCategory

const styles = StyleSheet.create({
    imageContainer:{
        flexDirection:"row",
        // justifyContent:"space-between"
        marginLeft:13
     
        // paddingHorizontal:10,
        
    },
    image:{
        width:160,
        aspectRatio:1,
        marginBottom:15,
        borderRadius:10

    },
    title:{
        position:"absolute",
        left:30,
        top:50
    }
})