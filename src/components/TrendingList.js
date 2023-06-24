import { FlatList, StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native'
import React from 'react'


const data = [
    {
        id:'1',
        title: 'Potato Salad',
        image: require('../../assets/HomescreenList1/pop.png'),
        price:'#2,500'
    },
    {
        id:'2',
        title: 'Spag Bolong...',
        image: require('../../assets/HomescreenList1/spag.png'),
        price:'#2,500'
    }
]
const TrendingList = () => {
  return (
   <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
           <TouchableOpacity>   
                <View style={{marginTop:10, marginLeft: 10, marginRight:10}}>
                    <Image
                    style={{width:150, height:150}}
                    source={item.image}/>
                    <View style={{marginTop:10, flexDirection:'row', }}>
                        <Text style={{fontSize:12}}>{item.title} </Text>
                        <Image
                        source={require('../../assets/HomescreenList1/favourite.png')}
                        style={{width:20, height:20, marginLeft: 10}}/>
                        <Image
                        source={require('../../assets/HomescreenList1/add-button.png')}
                        style={{width:25, height:25, marginLeft: 10, marginTop:-2, tintColor:'gray'}}/>
                    </View>
                    <View>
                        <Text style={{fontSize:12}}>{item.price}</Text>
                    </View>

            </View>
          </TouchableOpacity>

        )}

   />
  )
}

export default TrendingList

const styles = StyleSheet.create({})