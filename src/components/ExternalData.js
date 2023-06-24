import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};

const categories = [
    {
        id: 1,
        title: 'All',
        image: require('../../assets/HomescreenList1/All.png'),
        screen: 'FoodScreen'
    },
    {
        id: 2,
        title: 'Local Dishes',
        image: require('../../assets/HomescreenList1/localdishes.png'),
        screen: 'LocalDishesScreen'
    },
    {
        id: 3,
        title: 'Continental',
        image: require('../../assets/HomescreenList1/continental.png'),
        screen: 'ContinentalScreen'
    },
    {
        id: 4,
        title: 'Drinks',
        image: require('../../assets/HomescreenList1/drinks.png'),
        screen: 'DrinkScreen'
    },
]


const ExternalData = () => {
    const navigation = useNavigation("");
  return (
    <FlatList
    data={categories}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(item) => item.id}
    renderItem={({item}) => (
          <TouchableOpacity
              style={{alignItems:'center'}}
              onPress={()=> navigation.navigate(item.screen)}> 
           
            <View   style=
                {{borderWidth:2, 
                     borderRadius: 50, 
                     height:50, 
                     borderColor: COLORS.green, 
                     width:50,
                     alignItems:'center', 
                     justifyContent:'center',
                     marginTop:15,
                     marginLeft: 30
                
                 }}>
                <Image
                    style={{width:25, height:25, }}
                    source={item.image}/>
             </View>
                <Text style={{fontSize:12, marginLeft: 30, marginTop:5}}>{item.title} </Text>
      
           
        </TouchableOpacity>


    )}
/>
)
}

export default ExternalData

const styles = StyleSheet.create({})