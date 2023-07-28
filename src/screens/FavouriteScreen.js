import { StyleSheet, Text,TextInput, View, Dimensions, Image,StatusBar, FlatList,TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');

const imageList = [
  {
      id:'1',
      title: 'Chicken',
      letter:"Wings",
      image: require('../../assets/HomeScreenList2/ChickenWings.png'),
      symbol: require('../../assets/tabsIcon/favourite.png'),
      logo: require('../../assets/HomeScreenList2/ChickenRepublicLogo.png')
  },
  {
    id:'2',
    title: 'Fried Rice',
    // letter:"Rice",
    image: require('../../assets/HomeScreenList2/FriedRice.png'),
    symbol: require('../../assets/tabsIcon/favourite.png'),
    logo: require('../../assets/HomeScreenList2/ChickenRepublicLogo.png')
},
  {
    id:'3',
    title: 'Juice',
    image: require('../../assets/HomeScreenList2/Juice.png'),
    symbol: require('../../assets/tabsIcon/favourite.png'),
    logo: require('../../assets/HomeScreenList2/KFCLogo.png')
  },
  {
    id:'4',
    title: 'Spiced ',
    letter:'Noodles',
    image: require('../../assets/HomeScreenList2/SpecialNoodles.png'),
    symbol: require('../../assets/tabsIcon/favourite.png'),
    logo: require('../../assets/HomeScreenList2/superhealthyfood.jpg')
},
{
  id:'5',
  title: 'Burger',
  image: require('../../assets/HomeScreenList2/Burger.png'),
  symbol: require('../../assets/tabsIcon/favourite.png'),
  logo: require('../../assets/HomeScreenList2/Burgerkinglogo.png')
},
{
  id:'6',
  title: 'Medium',
  letter:' Pizza',
  image: require('../../assets/HomeScreenList2/MediumPizza.png'),
  symbol: require('../../assets/tabsIcon/favourite.png'),
  logo: require('../../assets/HomeScreenList2/Dominologo.png')
},
{
  id:'7',
  title: 'Ofada',
  letter:'Rice',
  image: require('../../assets/HomeScreenList2/OfadaRice.png'),
  symbol: require('../../assets/tabsIcon/favourite.png'),
  logo: require('../../assets/HomeScreenList2/SSLogo.jpeg')
},
{
  id:'8',
  title: 'Smoothie',
  image: require('../../assets/HomeScreenList2/Smoothie.png'),
  symbol: require('../../assets/tabsIcon/favourite.png'),
  logo: require('../../assets/HomeScreenList2/superhealthyfood.jpg')
},
{
  id:'9',
  title: 'Veggies ',
  letter:'Salad',
  image: require('../../assets/HomeScreenList2/VeggiesSalad.png'),
  symbol: require('../../assets/tabsIcon/favourite.png'),
  logo: require('../../assets/HomeScreenList2/Dominologo.png')
},
{
  id:'10',
  title: 'Beef Soup ',
  // letter:'Soup',
  image: require('../../assets/HomeScreenList2/Beefsoup.png'),
  symbol: require('../../assets/tabsIcon/favourite.png'),
  logo: require('../../assets/HomeScreenList2/ChickenRepublicLogo.png')
},
]
const FavouriteScreen = () => {
  const navigation = useNavigation("");
  return (
    <SafeAreaView
        style={{flex:1,  backgroundColor:COLORS.white}}>
        <StatusBar backgroundColor={COLORS.white}/>

        <View style={{flexDirection:"row", marginTop:5,}}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft:30 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft:80 }}> Favourite </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('AllScreen')}>
      <View style={styles.search}>
        <View style={{flexDirection:'row', position:'absolute', top:15}}>
            <View style={{marginLeft:-20}}>
              <Image source={require('../images/searchbtn.png')}
                 style={{ width:15, height:15,tintColor:'gray', marginTop:-5 }}/> 
            </View>
            <View  style={{marginLeft:15}} >
            <Text style={{color:COLORS.gray, fontSize:12, marginTop:-5}}> Search dishes, restaurants or drinks   </Text>
            </View>  
         </View> 

       
            
      </View>
      </TouchableOpacity>

      <FlatList
    data={imageList}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
        <TouchableOpacity >
        <View style={styles.imageContainer}>
          
         
              <Image
           source={item.image}
           style={styles.image}/>
           
           
            {/* <Image
           source={item.source}
           style={styles.image}/> */}

           <View style={{flexDirection:"row", position:"absolute", top:170}}>
  
              <View>
              <Text style={{color:"black", fontSize:12, }} >{item.title} </Text>
              <Text style={{color:"black", fontSize:12,  lineHeight:15}} >{item.letter} </Text>
              </View>

              <Image
              source={item.symbol}
              style={styles.symbol}/>

                <Image
              source={item.logo}
              style={styles.logo}/> 

          </View>
      </View>
      </TouchableOpacity>
    )}     
    numColumns={2}  
    />
            
    </SafeAreaView>
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({

  search:{
    height:40,
    width: width*0.9,
    alignSelf:'center',
    borderRadius:50,
    backgroundColor:COLORS.white,
    borderColor:COLORS.gray,
    borderWidth:1,
    justifyContent:'center',
    alignItems:"center",
    marginTop:10,
    marginBottom:10
    
    
},
  imageContainer:{
    flexDirection:"row",
    // justifyContent:"space-between",
    marginLeft:13
 
    // paddingHorizontal:10,
    
},
image:{
    width:160,
    aspectRatio:1,
    marginBottom:50,
    borderRadius:10

},

symbol:{
  width:15,
  height:15,
  aspectRatio:1,
  marginBottom:15,
  marginLeft:60
 
  // borderRadius:10
},
logo:{
  width:20,
  height:20,
  aspectRatio:1,
  marginBottom:15,
  marginLeft:5
  // marginLeft:20
  // borderRadius:10
}
})