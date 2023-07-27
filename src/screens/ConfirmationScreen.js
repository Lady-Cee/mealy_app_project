import { StyleSheet,
  Text, SafeAreaView, StatusBar,
  Dimensions,
 TouchableOpacity, View,Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';


const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const ConfirmationScreen = () => {
  const navigation = useNavigation("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
         <StatusBar backgroundColor={COLORS.white} />
         <View style={{flexDirection:"row"}}>
         <TouchableOpacity onPress={() => navigation.navigate('ReserveScreen')}>
             <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 20 }} />
        </TouchableOpacity>
        <Text style={{marginTop:20, marginLeft:90, fontSize:14}}>Confirmation </Text>
        </View>

        <View style={{marginTop:80, alignItems:"center"}}>
            <Image source={require('../../assets/cartlist/emojione-v1_thumbs-up.png')}
                    style={{width:150, height:150}}/>
            <Text style={{fontSize:16, fontWeight:"bold", marginTop:20, lineHeight:22}}>Thank you for your {'\n'}      Reservation!  </Text>
            <Text style={{fontSize:12, marginTop:15, color:"gray" }}>Your reservation for Monday July 24th 2023, at  </Text>
            <Text  style={{fontSize:12,color:"gray"}}>1:00PM has been successfully confirmed.    </Text>
            <Text  style={{fontSize:12, color:"gray",marginBottom: 5}}>You have reserved a table for two </Text>
        </View>

        <View style={{marginTop:110}}>
                <TouchableOpacity
                 style={{ height: 35, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}
                 onPress={() => navigation.navigate('ReserveScreen')}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }} >Book More table </Text>
                </TouchableOpacity>
        </View>

        <View style={{marginTop:20}}>
                <TouchableOpacity
                 style={{ height: 35, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center' , borderWidth:1,borderColor:COLORS.green}}
                 onPress={() => navigation.navigate('Home')}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.green }} >Home </Text>
                </TouchableOpacity>
           </View>
    </SafeAreaView>
  )
}

export default ConfirmationScreen

const styles = StyleSheet.create({})