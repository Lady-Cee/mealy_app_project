import { StyleSheet, Text, StatusBar, SafeAreaView,Dimensions,View, Image, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, TouchableNativeFeedback, TouchableWithoutFeedback, Keyboard } from 'react-native'
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const OgbonoReviews = () => {
  const navigation = useNavigation ("");
  const [inputText, setInputText] = useState('');
  const [buttonOn, setButtonOn] = useState(false);

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Wale Soyinka',
      review: 'Food tasted nice, really worth the money . I haven\'t gotten over it.',
      image: require('../../assets/HomeScreenList2/Ayesha.png')
    },
    {
      id: 2,
      name: 'Ayeesha Keys',
      review: 'Well packaged delivery. I didn\'t have to worry about spillage. Quantity was worth the price.',
      image: require('../../assets/HomeScreenList2/Wale.png')
    },
  ]);

  const handleInputChange = (text) => {
    setInputText(text);
    setButtonOn(text.trim() !== ''); // Enable the button if input text is not empty
  };

  const handleSendMessage = () => {
    // Handle sending the message (you can add your logic here)
    if (inputText.trim() !== '') {
      const newReview = {
        id: reviews.length + 1,
        name: 'Cynthia', // You can replace this with the user's name if available
        review: inputText.trim(),
      };
      setReviews([...reviews, newReview]);
      setInputText(''); // Clear the input text after sending the message
      setButtonOn(false); // Disable the button after sending the message
    }
  };

  
  return (
    <SafeAreaView   style={{flex:1,  backgroundColor:COLORS.white}}>
    <StatusBar backgroundColor={COLORS.white} />
    {/* <KeyboardAvoidingView
          behavior= {Platform.OS === 'ios' ? 'padding' : "height"}
          style={{ flex: 1 }}  >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>  */}

          {/* // keyboardVerticalOffset={60} */}
      
        <ScrollView>
        <ScrollView style={{ maxHeight: height * 0.6 }}>
        {reviews.map((review) => (
              <View key={review.id} style={{ flexDirection: 'row', marginTop: 30, marginLeft: 30 }}>
                <View>
                  <Image source={review.image} style={{ width: 70, height: 70 }} />
                </View>

                <View style={{ marginLeft: 10 , width:width*0.6}}>
                  <Text style={{ fontSize: 13 }}>{review.name}</Text>
                  <Text style={{ fontSize: 11, color: 'gray' }}>{review.review}</Text>
                </View>
              </View>
            ))}
        </ScrollView>

      {/* User's message input */}
      <View style={{ width: width * 0.95, padding: 10, height: height * 0.05, alignSelf: 'center', flexDirection: 'row', borderWidth: 0.5, borderColor: 'gray', marginTop: 20 }}>
              <TextInput
                style={{ width: width * 0.8 }}
                placeholder=' Add Comment'
                placeholderTextColor={'#264653'}
                fontSize={11}
                value={inputText}
                onChangeText={handleInputChange}
              />
              <TouchableOpacity onPress={handleSendMessage} disabled={!buttonOn}>
                {/* Show the message.png image conditionally */}
                <Image source={buttonOn ? require('../../assets/HomeScreenList2/message.png') : require('../../assets/HomeScreenList2/send.png')} style={{ width: 15, height: 15, marginLeft: 10 }} />
              </TouchableOpacity>
            </View>
           
       </ScrollView>
       {/* </TouchableWithoutFeedback>
       </KeyboardAvoidingView>
        */}
               <View style={{position:"absolute", top:270, left:18}}>
            <TouchableOpacity onPress={() => navigation.navigate('MyCartScreen')} style={{ height: 35, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>Add to cart</Text>
            </TouchableOpacity>
            </View>
           
      </SafeAreaView>
  )
}

export default OgbonoReviews

const styles = StyleSheet.create({})