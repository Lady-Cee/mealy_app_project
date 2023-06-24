import { StyleSheet, Text, TouchableOpacity, Dimensions, SafeAreaView,Image, StatusBar,View, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const PaymentScreen = () => {
  const navigation = useNavigation('');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardPress = (cardType) => {
    setSelectedCard(cardType);
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar backgroundColor={COLORS.white} />
    <TouchableOpacity onPress={() => navigation.navigate('CheckoutScreen')}>
      <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 30 }} />
    </TouchableOpacity>
    <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: -25, alignSelf: 'center' }}>Payment method</Text>
     
     <View style={{flexDirection:'row',marginLeft: 17, marginTop:15,}}>
     
      
      <TouchableOpacity 
        onPress={() => handleCardPress('mastercard')}
         style={[
          styles.cardContainer,
          selectedCard === 'mastercard' && styles.selectedCard,
         ]}>
        <Image source={require('../../assets/cartlist/master1.png')}
      style={{width:70, height:70, resizeMode:'contain'}}/>
     </TouchableOpacity>
    
     <TouchableOpacity
      onPress={() =>handleCardPress('visa')}
      style={[
        styles.visaContainer,
        selectedCard === 'visa' && styles.selectedCard,
      ]}
      > 
       <Image source={require('../../assets/cartlist/visa3.png')}
      style={{width:40, height:40, resizeMode:"contain"}}/>
      </TouchableOpacity>
      
      <TouchableOpacity
      onPress={() => handleCardPress('paypal')}
      style={[
        styles.paypalContainer,
        selectedCard === 'paypal' && styles.selectedCard,
      ]}>
     
       <Image source={require('../../assets/cartlist/pp3.png')}
      style={{width:50, height:50, marginLeft:8, resizeMode:"contain"}}/>
    
      </TouchableOpacity>
      
      <TouchableOpacity
       onPress={() => handleCardPress('bankcard')}
       style={[
        styles.bankContainer,selectedCard === 'bankcard' && styles.selectedCard,

       ]}>
    
       <Image source={require('../../assets/cartlist/bankt.png')}
      style={{width:40, height:40, marginLeft:12, resizeMode:"contain"}}/>
      
      </TouchableOpacity>

     </View>
     <View style={{flexDirection:'row', marginLeft:18, marginTop:5}}>
         <Text style={{fontSize:12, color:COLORS.gray}}>Mastercard </Text> 
         <Text style={{fontSize:12, marginLeft:25, color:COLORS.gray}}>Visa </Text> 
         <Text style={{fontSize:12, marginLeft:45, color:COLORS.gray}}>PayPal </Text> 
         <Text style={{fontSize:12, marginLeft:25, color:COLORS.gray}}>Bank Transfer </Text> 
        </View>

        <TouchableOpacity
         onPress={() => handleCardPress('walletcard')}
         style={[
          styles.bankContainer,selectedCard === 'walletcard' && styles.selectedCard,
  
         ]}>
        
        <Image source={require('../../assets/cartlist/wallet3.png')}
          style={{width:40, height:40, marginTop:15, marginBottom:15}}/>
             
        </TouchableOpacity>
          <Text style={{fontSize:12, marginTop: 5,marginLeft:25, color:COLORS.gray}}>e-Wallet </Text> 
       
      <View style={{marginTop:20}}>
        <Text  style={{marginLeft:20}}>Name on card</Text>
        <TextInput style={{
           height: 40,
           width: width*0.9,
           alignSelf:'center',
           margin: 12,
           borderWidth: 1,
           padding: 10,
           borderRadius:1,
           borderColor:'#898989'
         
        }}
        placeholder="Enter name here"
        placeholderTextColor = {'#dad7cd'}
        />
      </View>

      <View style={{marginTop:10}}>
        <Text  style={{marginLeft:20}}>Card Number</Text>
        <TextInput style={{
           height: 40,
           width: width*0.9,
           alignSelf:'center',
           margin: 12,
           borderWidth: 1,
           padding: 10,
           borderRadius:1,
           borderColor:'#898989',     
        }}
        
           placeholder=" Enter number here"    placeholderTextColor = {'#dad7cd'}
        >

        </TextInput>
          

      
      </View>
      <View style={{flexDirection:"row", marginLeft:8}}>
      <View style={{marginTop:20}}>
        <Text  style={{marginLeft:20}}>Exp date </Text>
        <TextInput style={{
           height: 40,
           width: width*0.3,
           alignSelf:'center',
           margin: 12,
           borderWidth: 1,
           padding: 10,
           borderRadius:1,
           borderColor:'#898989'      
        }}

        />
      </View>

      <View style={{marginTop:20}}>
        <Text  style={{marginLeft:20}}>CVV</Text>
        <TextInput style={{
           height: 40,
           width: width*0.3,
           alignSelf:'center',
           margin: 12,
           borderWidth: 1,
           padding: 10,
           borderRadius:1,
           borderColor:'#898989',
        }}

        />
      </View>
      </View>
      
      <View style={{marginTop:30, flexDirection:"row", marginLeft:20}}>
        <Image source={require("../../assets/cartlist/square.png")}
              style={{width:20, height:20}}/>
        <Text style={{marginLeft:17}}>Save this card </Text>
      </View>

      <View style={{marginTop:40}}>
                <TouchableOpacity style={{ height: 40, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }} onPress={() => navigation.navigate('ThankYouScreen')}>Continue </Text>
                </TouchableOpacity>
           </View>

      </SafeAreaView> 
  )

}

export default PaymentScreen

const styles = StyleSheet.create({
  cardContainer:{
    borderWidth:2, 
    backgroundColor:"#2a9d8f",
     borderRadius:10,
     borderColor:'white',
      width:width*0.2
  },
  selectedCard: {
    borderColor: 'gray',
    backgroundColor:'green'
    
  },
  visaContainer:{
    borderWidth:2,
     backgroundColor:"#ffb703", 
     borderRadius:10, 
     width:width*0.2, 
     borderColor:'white',
     marginLeft:10,
     alignItems:'center',
      justifyContent:"center"
  },
  paypalContainer:{
    borderWidth:2, 
    backgroundColor:"#a2d2ff", 
    borderRadius:10, 
    width:width*0.2, 
    borderColor:'white',
     marginLeft:10,
      alignItems:'center', 
      justifyContent:"center"
  },
  bankContainer:{
    borderWidth:2,
     backgroundColor:"#bbd0ff",
    borderRadius:10,
    borderColor:'white',
    width:width*0.2, 
    marginLeft:10, 
    alignItems:'center', 
    justifyContent:"center"
  },
  walletContainer:{
    borderWidth:2,
    marginTop:20,
    marginLeft:10,
    backgroundColor:"#bbd0ff", 
    borderRadius:10, 
    borderColor:'white', 
    width:width*0.2,
    alignItems:'center', 
    justifyContent:"center"
  }
})