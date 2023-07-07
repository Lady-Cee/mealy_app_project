import { StyleSheet, Text, Image, Dimensions, SafeAreaView, View, TouchableOpacity, StatusBar, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('screen');
const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };

const FaqScreen = () => {
  const navigation = useNavigation('');
  const [orderPay, setOrderpay] = useState(false);
  const [trackStatus, setTrackstatus] = useState(false);
  const [scheduleDelivery, setScheduledelivery] = useState(false);
  const [orderIssue, setOrderissue] = useState(false);
  const [customiseFood, setCustomisefood] = useState(false);
  const [saveFavourite, setSavefavourite] = useState(false);
  const [orderCancel, setOrdercancel] = useState(false);

  const handleArrowChange = (faqType) => {
    switch (faqType) {
      case 'orderPay':
        setOrderpay(!orderPay);
        break;
      case 'trackStatus':
        setTrackstatus(!trackStatus);
        break;
      case 'scheduleDelivery':
        setScheduledelivery(!scheduleDelivery);
        break;
      case 'orderIssue':
        setOrderissue(!orderIssue);
        break;
      case 'customiseFood':
        setCustomisefood(!customiseFood);
        break;
      case 'saveFavourite':
        setSavefavourite(!saveFavourite);
        break;
      case 'orderCancel':
        setOrdercancel(!orderCancel);
        break;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 30, marginTop: 20 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, marginLeft: 90, marginTop: 20 }}>FAQ </Text>
      </View>
      <ScrollView>
        <TouchableOpacity onPress={() => handleArrowChange('orderPay')}>
          <View style={{ flexDirection: 'row', marginTop: 50, marginLeft: 27 }}>
            <Text style={{ fontSize: 12, color: 'gray' }}>How can I pay for my order? </Text>
            <Image
              source={orderPay ? require('../../assets/profilescreenlist/arrow-up.png') : require('../../assets/HomescreenList1/down-arrow.png')}
              style={{ width: 20, height: 20, tintColor: 'gray', marginLeft: 117 }}
            />
          </View>
        </TouchableOpacity>

        <View style={{ marginLeft: 25, backgroundColor: '#c7f9cc', width: width * 0.85, marginTop: 10 }}>
          {orderPay ? (
            <Text style={{ fontSize: 13, color: 'black', lineHeight: 18 }}>
              Mealy offers various payment options, including credit/debit mobile wallets and bank transfer.{"\n"}
              {"\n"}
              You can choose your preferred payment method during the checkout process.
            </Text>
          ) : null}
        </View>
        <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 5, marginBottom: 30, alignSelf: 'center', width: width * 0.85 }} />

        <TouchableOpacity onPress={() => handleArrowChange('trackStatus')}>
          <View style={{ flexDirection: 'row', marginTop: 15, marginLeft: 27 }}>
            <Text style={{ fontSize: 12, color: 'gray' }}>Can I track the status of my order? </Text>
            <Image
              source={trackStatus ? require('../../assets/profilescreenlist/arrow-up.png') : require('../../assets/HomescreenList1/down-arrow.png')}
              style={{ width: 20, height: 20, tintColor: 'gray', marginLeft: 75 }}
            />
          </View>
        </TouchableOpacity>

        <View style={{ marginLeft: 25, backgroundColor: '#c7f9cc', width: width * 0.85, marginTop: 10 }}>
          {trackStatus ? (
            <Text style={{ fontSize: 13, color: 'black', lineHeight: 18 }}>
              Mealy offers various payment options, including credit/debit mobile wallets and bank transfer.{"\n"}
              {"\n"}
              You can choose your preferred payment method during the checkout process.
            </Text>
          ) : null}
        </View>

        <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 5, marginBottom: 30, alignSelf: 'center', width: width * 0.85 }} />

      

      <TouchableOpacity onPress={() => handleArrowChange('scheduleDelivery')}>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>Can I schedule a future delivery or pick-up time? </Text>
         <Image
              source={scheduleDelivery ? require('../../assets/profilescreenlist/arrow-up.png') : require('../../assets/HomescreenList1/down-arrow.png')}
              style={{ width: 20, height: 20, tintColor: 'gray', marginLeft: -5 }}
            />
      </View>
      </TouchableOpacity>
            
      <View style={{ marginLeft: 25, backgroundColor: "#c7f9cc", width: width * 0.85, marginTop: 10 }}>
          {scheduleDelivery ? (
            <Text style={{ fontSize: 13, color: "black", lineHeight: 18 }}>
              Mealy offers various payment options, including credit/debit mobile wallets and bank transfer.{"\n"}{"\n"}
              You can choose your preferred payment method during the checkout process.
            </Text>
          ) : null}
        </View>

      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>

      <TouchableOpacity  onPress={() => handleArrowChange('orderIssue')}>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>What if there is an issue with my order? </Text>
        <Image
              source={orderIssue ? require('../../assets/profilescreenlist/arrow-up.png') : require('../../assets/HomescreenList1/down-arrow.png')}
              style={{ width: 20, height: 20, tintColor: 'gray', marginLeft: 45 }}
            />
      </View>
      </TouchableOpacity>

      
      <View style={{ marginLeft: 25, backgroundColor: "#c7f9cc", width: width * 0.85, marginTop: 10 }}>
          {orderIssue ? (
            <Text style={{ fontSize: 13, color: "black", lineHeight: 18 }}>
              Mealy offers various payment options, including credit/debit mobile wallets and bank transfer.{"\n"}{"\n"}
              You can choose your preferred payment method during the checkout process.
            </Text>
          ) : null}
        </View>

      
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>

      <TouchableOpacity  onPress={() => handleArrowChange('customiseFood')}>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>Can I customise my food order? </Text>
        <Image
              source={customiseFood ? require('../../assets/profilescreenlist/arrow-up.png') : require('../../assets/HomescreenList1/down-arrow.png')}
              style={{ width: 20, height: 20, tintColor: 'gray', marginLeft: 90 }}
            />
      </View>
      </TouchableOpacity>
            
      <View style={{ marginLeft: 25, backgroundColor: "#c7f9cc", width: width * 0.85, marginTop: 10 }}>
          {customiseFood ? (
            <Text style={{ fontSize: 13, color: "black", lineHeight: 18 }}>
              Mealy offers various payment options, including credit/debit mobile wallets and bank transfer.{"\n"}{"\n"}
              You can choose your preferred payment method during the checkout process.
            </Text>
          ) : null}
        </View>
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>

      <TouchableOpacity  onPress={() => handleArrowChange('saveFavourite')}>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:25}}>
        <Text style={{fontSize:12, color:"gray"}}>Can I save my favourite restaurants and orders? </Text>
        <Image
              source={saveFavourite? require('../../assets/profilescreenlist/arrow-up.png') : require('../../assets/HomescreenList1/down-arrow.png')}
              style={{ width: 20, height: 20, tintColor: 'gray', marginLeft: 1 }}
            />
      </View>
      </TouchableOpacity>
            
      <View style={{ marginLeft: 25, backgroundColor: "#c7f9cc", width: width * 0.85, marginTop: 10 }}>
          {saveFavourite ? (
            <Text style={{ fontSize: 13, color: "black", lineHeight: 18 }}>
              Mealy offers various payment options, including credit/debit mobile wallets and bank transfer.{"\n"}{"\n"}
              You can choose your preferred payment method during the checkout process.
            </Text>
          ) : null}
        </View>
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>

      <TouchableOpacity  onPress={() => handleArrowChange('orderCancel')}>
      <View style={{flexDirection:"row", marginTop:15, marginLeft:27}}>
        <Text style={{fontSize:12, color:"gray"}}>Can I cancel my order? </Text>
        <Image
              source={orderCancel ? require('../../assets/profilescreenlist/arrow-up.png') : require('../../assets/HomescreenList1/down-arrow.png')}
              style={{ width: 20, height: 20, tintColor: 'gray', marginLeft: 150 }}
            />
      </View>
      </TouchableOpacity>
            
      <View style={{ marginLeft: 25, backgroundColor: "#c7f9cc", width: width * 0.85, marginTop: 10 }}>
          {orderCancel ? (
            <Text style={{ fontSize: 13, color: "black", lineHeight: 18 }}>
              Mealy offers various payment options, including credit/debit mobile wallets and bank transfer.{"\n"}{"\n"}
              You can choose your preferred payment method during the checkout process.
            </Text>
          ) : null}
        </View>
      <View style={{borderWidth:0.3, borderColor:'gray', marginTop:5, marginBottom: 30,alignSelf:"center", width:width*0.85}}/>
      </ScrollView>
      </SafeAreaView>

  )
}

export default FaqScreen

const styles = StyleSheet.create({})