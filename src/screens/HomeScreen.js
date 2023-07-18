import { 
  StyleSheet, 
  Text,
  View , 
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar, 
  Dimensions,
  TextInput,
  FlatList,
  ScrollView} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ExternalData from '../components/ExternalData';
import HomeTrend from '../components/HomeTrend';
import TrendingList from '../components/TrendingList';
import TopTabs from '../navigation/TopTabs';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');

const Tab = createBottomTabNavigator()

const data = [
  {
    id:'1',  
    title: 'Foods and drinks',
    image: require('../../assets/HomescreenList1/food1a.png'),
    screen: 'AllMenuScreen'
  },

  {
    id:'2',
    title: 'Reataurants',
    image:require('../../assets/HomescreenList1/food1c.png'),
    screen: 'RestaurantScreen'
  },
 
];
const HomeScreen = () => {
  const navigation = useNavigation('');
  return (
    <ScrollView>
    <SafeAreaView
           style={{flex:1, alignItems:'center',  backgroundColor:COLORS.white}}>
          <StatusBar backgroundColor={COLORS.white}/>
         
          <Text style={{marginTop:15, marginRight:250, fontSize:14}}>Deliver to </Text>
          <TouchableOpacity style={styles.deliver}
            onPress={() => navigation.navigate('DeliveryScreen')}>
              
           
              <View style={{flexDirection:'row', position:'absolute', top:12}}>
                  <View style={{marginLeft: 10}}>
                   <Image source={require('../../assets/HomescreenList1/location.png')}
                     style={{width:20, height:20, tintColor:'gray'}}/>   
                   </View>
                    <View style={{marginLeft:10}}>
                      <Text style={{color:COLORS.gray, fontSize:12}}> 24 St. Stephen's Road, Onitsha </Text>
                  </View>
                  <View style={{marginLeft:65}}>
                    <Image source={require('../../assets/HomescreenList1/down-arrow.png')}
                    style={{width:20, height:20,tintColor:'gray' }}/>  
                  </View> 
              </View> 
                  
           
         </TouchableOpacity>

          
        <View style={{ width:width*0.91, 
            height:height*0.20,
            backgroundColor:COLORS.green, 
            marginTop:10 }}>
              <Image 
                source={require('../images/food1.png')}
                style={{
                    resizeMode:'contain',
                    width:120 , 
                    height:90, 
                    marginLeft:15,
                    marginTop:20}}          
          />

          <View style={{marginLeft:180, marginTop:-70}}>
            <Text style={{color:COLORS.white, fontSize:16}}>Potato Porridge</Text>
            <Text style={{color:"yellow", fontSize:16, lineHeight:18, marginLeft:25}}>20% off</Text>
          </View>

          <View style={{
            borderWidth:1, 
            width:width*0.35,
            height:35,
            borderRadius:50,
            borderColor:COLORS.white,
            marginTop:38,
            marginLeft:200,
            justifyContent:'center',
            backgroundColor:"white"}}>
            <Text style={{color:COLORS.green, marginLeft:25}}>Order Now</Text>  

          </View>
  
       </View>
      <TouchableOpacity onPress={() => navigation.navigate('AllScreen')}>
      <View style={styles.search}>
        <View style={{flexDirection:'row', position:'absolute', top:15}}>
            <View style={{marginLeft:-20}}>
              <Image source={require('../images/searchbtn.png')}
                 style={{ width:15, height:15,tintColor:'gray' }}/> 
            </View>
            <View  style={{marginLeft:15}} >
            <Text style={{color:COLORS.gray, fontSize:12}}> Search dishes, restaurants or drinks   </Text>
            </View>  
         </View> 

       
            
      </View>
      </TouchableOpacity>
     
      <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(item.screen)}
            style={{marginLeft:7, marginRight:12, width:150, height:100, marginTop:10}}
          >
             <View>
                    <Image
                        style={{width:'100%', height:'100%', resizeMode:'contain'}}
                        source={item.image} />
              </View>
              <View style={{marginTop:-60, alignItems:'center'}}>
                <Text style={{fontSize:16, color:'white'}}>{item.title}</Text>
              </View>
          
          </TouchableOpacity>
        )}
      />

      <View style={{marginTop:20, marginRight:240}}>
          <Text style={{fontSize:15}}>Categories </Text>
      </View>
      <ExternalData/>
          
      <ScrollView>
      <TouchableOpacity onPress={() => navigation.navigate('ReserveScreen')}>     
        <View style={{flexDirection:'row',marginTop:30,marginLeft:20 }}>
      
        <Image
         source={require('../../assets/HomescreenList1/reserve.png')}
         style={{width:120, height:120, }}/>

         <View style={{marginLeft:30, marginTop:40, alignItems:"center"}}>
          <Text style={{fontSize:15}}> Online Reservation    </Text>
          <Text style={{fontSize:12, color:'gray', marginRight: 20}}>Table Booking </Text>
        </View>
      </View>
      <View style={{
         height: 40,
         width: width * 0.5,
         alignSelf: 'center',
         borderRadius: 50,
         backgroundColor: COLORS.green,
         justifyContent: 'center',
         alignItems: 'center',
         marginLeft:150
      }}>
    
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>Reserve a Table </Text>
       
      </View>
      </TouchableOpacity>
      
        <View  style={{ width:width*0.9,
            height: 10,
            borderColor: 'transparent',
            shadowColor: 'gray',
            shadowOpacity: 20,
            shadowRadius: 5,
            elevation: 5}}/>
    
      <HomeTrend/>
      <TrendingList/>
      </ScrollView>
    </SafeAreaView>
    </ScrollView>

  )
}


export default HomeScreen

const styles = StyleSheet.create({
  search:{
    height:50,
    width: width*0.9,
    alignSelf:'center',
    borderRadius:50,
    backgroundColor:COLORS.white,
    borderColor:COLORS.gray,
    borderWidth:1,
    justifyContent:'center',
    alignItems:"center",
    marginTop:20,
    
    
},
deliver:{
  height:50,
  width: width*0.9,
  alignSelf:'center',
  backgroundColor:COLORS.white,
  borderColor:COLORS.gray,
  borderWidth:1,
 
},
})


