import { StyleSheet,
         Text, SafeAreaView, StatusBar,
         Dimensions,
        TouchableOpacity, View,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const ThankYouScreen = () => {
    const navigation = useNavigation("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
         <StatusBar backgroundColor={COLORS.white} />
         <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
             <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 30 }} />
        </TouchableOpacity>

        <View style={{marginTop:40, alignItems:"center"}}>
            <Image source={require('../../assets/cartlist/emojione-v1_thumbs-up.png')}
                    style={{width:200, height:200}}/>
            <Text style={{fontSize:20, fontWeight:"bold", marginTop:40}}>Thank you for your order!  </Text>
            <Text style={{fontSize:14, marginTop:30, marginBottom: 5}}>You can track your delivery in the   </Text>
            <Text>'Orders' Section </Text>
        </View>

        <View style={{marginTop:70}}>
                <TouchableOpacity style={{ height: 50, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }} onPress={() => navigation.navigate('OrderTrackScreen')}>Track my order </Text>
                </TouchableOpacity>
        </View>

        <View style={{marginTop:25}}>
                <TouchableOpacity style={{ height: 50, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.white, justifyContent: 'center', alignItems: 'center' , borderWidth:1,borderColor:COLORS.green}}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.green }} onPress={() => navigation.navigate('Home')}>Order something else </Text>
                </TouchableOpacity>
           </View>


    </SafeAreaView>
  )
}

export default ThankYouScreen

const styles = StyleSheet.create({})