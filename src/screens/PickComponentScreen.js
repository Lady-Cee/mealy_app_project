import { StyleSheet, Text, View , SafeAreaView, Dimensions, StatusBar, TouchableOpacity, Image} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const PickComponentScreen = () => {
    const navigation = useNavigation("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar backgroundColor={COLORS.white} />
    <TouchableOpacity onPress={() => navigation.navigate('MyCartScreen')}>
      <Image source={require('../../assets/cartlist/cancel.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop:20 }} />
    </TouchableOpacity>
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: -25, alignSelf: 'center' }}>Checkout </Text>
   
      <View style={{flexDirection:'row', marginTop:20, justifyContent:"center"}}>
        <TouchableOpacity onPress={() => navigation.replace('DelComponentScreen')}>
          <View style={{height:50,justifyContent:"center", borderBottomWidth:1, borderBottomColor:"black",  backgroundColor: '#EAFFE5', borderColor:COLORS.gray, width:width*0.5}}>
              <Text style={{textAlign: 'center'}}>Delivery </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{height:50, justifyContent:"center",backgroundColor: '#FAFAFA', borderBottomWidth:0.3, borderBottomColor:"gray", borderColor:COLORS.gray, width:width*0.5}}>
            <Text style={{textAlign: 'center'}}>Pickup </Text>
        </View>
        </TouchableOpacity>       
    </View>

    <Text> Pick up screen</Text>
     
  </SafeAreaView>
  )
}

export default PickComponentScreen

const styles = StyleSheet.create({})