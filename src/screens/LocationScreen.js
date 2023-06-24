import React from 'react';
import { StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Text, View, StatusBar, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const LocationScreen = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />
      
        <GooglePlacesAutocomplete
          placeholder='Location'
          styles={{
            container: {
              flex:0,
            },
            textInput:{
              fontSize:18,
            },
          }}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language:"en",
          }}
          
        
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />

      <View style={{ marginTop: 600 }}>
        <TouchableOpacity style={[styles.btnLast]} onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>Save and Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  btnLast: {
    height: 50,
    width: width * 0.9,
    alignSelf: 'center',
    borderRadius: 50,
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
