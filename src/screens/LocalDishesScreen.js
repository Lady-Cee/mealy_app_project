import { StyleSheet, Text,TextInput, View, Dimensions, Image,StatusBar, FlatList,TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import LocalCategory from '../components/LocalCategory';
import { useState, useEffect} from 'react';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');

const LocalDishesScreen = () => {
  const navigation = useNavigation("");

//   const DATA = [
//     {
//         id: 1,
//         title: 'Ogbono Soup',
//         source: require('../../assets/local_item/ogbono.png'),
       
//         // screen: 'FoodScreen'
//     },
//     {
//         id: 2,
//         title: 'Amala',
//         source: require('../../assets/local_item/Amala.png'),


//         // screen: 'LocalDishesScreen'
//     },
//     {
//         id: 3,
//         title: 'Moi moi',
//         source: require('../../assets/local_item/moi-moi.jpg'),
       
//         // screen: 'ContinentalScreen'
//     },
//     {
//         id: 4,
//         title: 'Asun',
//         source: require('../../assets/local_item/Asun.png')
//         // screen: 'DrinkScreen'
//     },
//     {
//         id: 5,
//         title: 'Banga SOup',
//         source: require('../../assets/local_item/banga.png'),
//         // screen: 'DrinkScreen'
//     },
//     {
//         id: 6,
//         title: 'Afang Soup',
//         source: require('../../assets/local_item/Afang.png'),
//         // screen: 'DrinkScreen'
//     },
//     {
//         id: 7,
//         title: 'Suya',
//         source: require('../../assets/local_item/suya.png'),
//         // screen: 'DrinkScreen'
//     },
//     {
//         id: 8,
//         title: 'Akara',
//         source: require('../../assets/local_item/akara.png'),
//         // screen: 'DrinkScreen'
//     },
//     {
//         id: 9,
//         title: 'Kilishi',
//         source: require('../../assets/local_item/kilishi.png'),
//         // screen: 'DrinkScreen'
//     },
//     {
//         id: 10,
//         title: 'Egusi Soup',
//         source: require('../../assets/local_item/egusi.png'),
//         // screen: 'DrinkScreen'
//     },
// ]

// const renderItem= ({item}) => (
//   <View style={styles.imageContainer}>
//       <Image
//        source={item.source}
//        style={styles.image}/>

//         {/* <Image
//        source={item.source}
//        style={styles.image}/> */}

//       <View style ={styles.title}>
//       <Text style={{color:"white", fontSize:18, fontWeight:"800"}} >{item.title} </Text>
//       </View>
//   </View>

// );

// const [searchText, onChangeSearch] = useState('');
// const [filteredData, setFilteredData] = useState([]);

// useEffect(() => {
//   const filtered = DATA.filter(item =>
//     item.title.toLowerCase().includes(searchText.toLowerCase()),
//   );
//   if (searchText === '') {
//     return setFilteredData(DATA);
//   }

//   setFilteredData(filtered);
// }, [searchText]);

  // const [activeScreen, setActiveScreen] = useState('All');

  // const handleScreenPress = (screen) => {
  //   setActiveScreen(screen);
  //   navigation.navigate(`${screen}Screen`);
  // };
  return (
    <SafeAreaView    style={{flex:1,  backgroundColor:COLORS.white}}>
       <StatusBar backgroundColor={COLORS.white} />
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 10 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: -20, alignSelf: 'center' }}> Local dishes </Text>

      <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 15, marginBottom: 30, alignSelf: 'center', width: width * 1 }} />

      <View style={{
         height:40,
         marginTop:-10, 
         borderColor:COLORS.gray, 
         alignSelf:'flex-start',
         width: width*0.9,
         borderWidth:1, 
         marginLeft:15,
         flexDirection:'row',
        borderRadius:50}}>

               <View style={{marginLeft: 15, justifyContent:"center"}}>
                 <Image source={require('../../assets/HomeScreenList2/search-interface-symbol.png')}
                   style={{width:20, height:20, tintColor:'gray'}}/>   
                </View>
        <TextInput style={{marginLeft:15, width: width*0.85, fontSize:12}}
                  placeholder='Search dishes, restaurants or drinks'
                  // onChangeText={newText => onChangeSearch(newText)}
                  />     
       
      </View>
            
      <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 25, alignSelf: 'center', width: width * 1 }} />


          <View style={{flexDirection:"row", marginTop:2}}>
              <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                      <View style={{  
                        marginLeft:10,
                        borderColor:"white",
                        height:50,
                        borderWidth:1,
                        width:100,
                        alignItems:"center",
                        justifyContent:"center"}}> 
                    <Text style={{color:"gray"}}>All </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity >
                  <View style={{  
                      marginLeft:1,
                      height:50,
                      backgroundColor: "#caf0f8",
                      borderBottomWidth: 2,
                      borderBottomColor:  "black" ,
                      width:100,
                      marginBottom:10,
                      alignItems:"center",
                      justifyContent:"center"}}>
                  <Text  style={{color:"gray"}}>Local </Text>
                  </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('ContinentalScreen')}>
                  <View style={{  
                      marginLeft:3,
                      borderColor:"white",
                      height:50,
                      borderWidth:1,
                      width:130,
                      alignItems:"center",
                      justifyContent:"center"}}>
                  <Text  style={{color:"gray"}}>Continental </Text>
                  </View>
                </TouchableOpacity>
     </View>
                    <LocalCategory/> 
                    {/* <FlatList
    data={filteredData}
    keyExtractor={(item) => item.id}
    renderItem={renderItem}     
    numColumns={2}  
    /> */}
      
    </SafeAreaView>
  )
}

export default LocalDishesScreen

const styles = StyleSheet.create({

})