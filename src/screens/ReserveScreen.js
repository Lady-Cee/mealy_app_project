import { StyleSheet, Text, StatusBar, SafeAreaView,Dimensions,View, Image, TextInput, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const categories = [
  {
      id: 1,
      title: '13:00',
  },
  {
    id: 2,
    title: '13:30',
},
{
  id: 3,
  title: '14:00',
},
{
  id: 4,
  title: '14:30',
},
{
  id: 5,
  title: '15:00',
},
{
  id: 6,
  title: '15:30',
},
{
  id: 7,
  title: '16:00',
},
{
  id: 8,
  title: '16:30',
},
{
  id: 9,
  title: '17:00',
},
{
  id: 10,
  title: '17:30',
},
{
  id: 11,
  title: '18:00',
},
{
  id: 12,
  title: '18:30',
},
{
  id: 13,
  title: '19:00',
},
{
  id: 14,
  title: '19:30',
},
{
  id: 15,
  title: '20:00',
},
{
  id: 16,
  title: '20:30',
},
{
  id: 17,
  title: '21:00',
},
{
  id: 18,
  title: '21:30',
},
{
  id: 19,
  title: '22:00',
},
]

const ReserveScreen = () => {
  const navigation = useNavigation("");
  const [count, setCount] = useState(1);
  const [selectDate, setSelectDate] = useState('Today 05/05/2023')

  let decrementCount = () =>{
    if (count > 1) {
      setCount(count-1)
  }
}

let addCount =()=>{
  setCount(count + 1)
}

const handleCalendarClick = () => {
  // Get the current date and format it as "Today dd/mm/yyyy"
  const currentDate = new Date();
  const formattedDate = `Today ${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`;
  setSelectDate(formattedDate);
};
  
  return (
    <SafeAreaView  style={{flex:1,  backgroundColor:COLORS.white}}>
            <StatusBar backgroundColor={COLORS.white} />

        <View style={{flex:0.7, backgroundColor:"#caf0f8", }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 10 }} />
          </TouchableOpacity>

          <Image
           source={require('../../assets/HomeScreenList2/reserve1.png')}
           style={{width:300, height:300, alignSelf:"center", marginTop:-100, resizeMode:"contain" }}/>
         
          </View >
          <View style={{
              height:65, 
              width:width*0.9,
              borderWidth:0.3, 
              marginTop:15, 
              flexDirection:"row",
              borderRadius:5,
              alignSelf:"center",
              borderColor:"gray", }}>

              
              <Image
                source={require('../../assets/HomeScreenList2/reserve.png')}
                style={{width:20, height:20, marginTop:5, marginLeft:15  }}
              />

              <View style={{marginLeft:10, marginTop:5, }}>
                <Text style={{fontSize:12, fontWeight:"bold"}}>The Place </Text>
                <Text style={{fontSize:10, color:"gray"}}>Lagos NG, 45 Isaac John St. GRA </Text>
                <Text  style={{fontSize:10, color:"gray", }}>101233, Ikeja </Text>
              </View>

              <Image
              source = {require('../../assets/profilescreenlist/right-arrow.png')}
              style={{width:15, height:15, marginTop:20, tintColor:"gray", marginLeft:90  }}/>

          </View>

            <View style={{flexDirection:"row"}}>
              <View style={{ marginTop:15, marginLeft:18}}>
                <View> 
                  <Text style={{color:"gray", marginLeft: 10}}>Adult</Text>
                    <View style={{flexDirection:"row", borderWidth:1, height:40, width:70, borderColor:"gray",marginTop:5,}}>

                  <TouchableOpacity onPress={decrementCount}> 
                    <Image  
                      source={require('../../assets/profilescreenlist/arrow-up.png')}
                      style={{width:18, height:18, marginTop:9,marginLeft:5}}/>  
                      </TouchableOpacity>

                      <Text style ={{marginTop:7, marginLeft:5}}>{count} </Text>
                      
                      <TouchableOpacity onPress={addCount}>
                        <Image  
                      source={require('../../assets/HomescreenList1/down-arrow.png')}
                      style={{width:20, height:20, marginTop:8,}}/>
                      </TouchableOpacity>
                    </View>
                  </View>

                  </View>
                  
                  <Text style={{color:"gray", marginLeft: 30, marginTop:15}}>Date </Text>

                  <TouchableOpacity onPress={handleCalendarClick}>               
                  <View style={{flexDirection:"row", borderWidth:1, height:40, width:240, borderColor:"gray",marginTop:40, marginLeft:-50}}>

                        <Text style ={{marginTop:10, marginLeft:10, fontSize:12}}> {selectDate} </Text>
                        
                       
                          <Image  
                        source={require('../../assets/HomeScreenList2/calendar.png')}
                        style={{width:20, height:20, marginTop:10, tintColor:"gray", marginLeft:75}}/>
                     </View>
                        </TouchableOpacity>

                  </View>

         <Text style={{marginLeft:15, marginTop:30}}>Time</Text>

         <FlatList
           data={categories}
           horizontal
           showsHorizontalScrollIndicator={false}
           keyExtractor={(item) => item.id}
           renderItem={({item}) => (             
                   <View   style=
                       {{borderWidth:2, 
                            borderRadius: 30, 
                            height:30, 
                            borderColor: COLORS.green, 
                            width:60,
                            alignItems:'center', 
                            justifyContent:'center',
                            marginTop:15,
                            marginLeft: 15
                       
                        }}>
                             <Text style={{fontSize:10, }}>{item.title} </Text>
                        </View>     
                           
           )}
         />

            <View style={{position:"absolute", top:520, left:18}}>
                <TouchableOpacity onPress={() => navigation.navigate('ConfirmationScreen')} style={{ height: 40, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>Reserve this table</Text>
                </TouchableOpacity>
           </View>

           <View style={{position:"absolute", top:590, left:18}}>
                <TouchableOpacity onPress={() => navigation.navigate('CallScreen')} style={{ height: 40, width: width * 0.9, alignSelf: 'center', borderRadius: 50, borderWidth:1,justifyContent: 'center', alignItems: 'center' , borderColor:COLORS.green}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 12, color: COLORS.green }} >Call Support</Text>
                </TouchableOpacity>
           </View>
        
      </SafeAreaView>
  )
}

export default ReserveScreen

const styles = StyleSheet.create({})