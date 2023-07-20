// import React, { useState } from 'react';
// import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, StatusBar, Dimensions } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_MAPS_APIKEY } from "@env";
// import MapView, { Marker } from 'react-native-maps';


// const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
// const { width, height } = Dimensions.get('screen');

// const LocationScreen = () => {
//   const navigation = useNavigation();
//   const [selectedLocation, setSelectedLocation] = useState(null);
  
//   return (
//     <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
//       <StatusBar backgroundColor={COLORS.white} />
// {/* 
//       <View style={styles.container}>
//         <GooglePlacesAutocomplete
//           placeholder='Location'
//           styles={{
//             textInput: {
//               fontSize: 18,
//             },
//           }}
//           query={{
//             key: GOOGLE_MAPS_APIKEY,
//             language: 'en',
//           }}
//           nearbyPlacesAPI='GooglePlacesSearch'
//           debounce={400}
//           onPress={handleLocationSelect} // Handle the selected location
//           autoFillEnable={true}
//           fetchDetails={true}
//           returnKeyType="search"
//         />
//       </View> */}

//         <View style={styles.mapContainer}>
//            <MapView style={styles.map}>
//               {selectedLocation && (
//                <Marker coordinate={selectedLocation} />
//             )}
//            </MapView>
//          </View>

//       <GooglePlacesAutocomplete
//         placeholder='Location'
//         styles={{
//           container:{
//             flex:0,
//           },
//           textInput:{
//             fontSize:18,
//           },
//         }}
//         query={{
//           key: GOOGLE_MAPS_APIKEY,
//           language:"en",
//         }}
//         nearbyPlacesAPI='GooglePlacesSearch'
//         debounce={200}
//         />

//       <View style={{ marginTop: 600 }}>
//         <TouchableOpacity style={[styles.btnLast]} onPress={() => navigation.navigate('BottomTabs')}>
//           <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>Save and Continue</Text>
//         </TouchableOpacity>
//       </View>

  
//     </SafeAreaView>
//   );
// };

// export default LocationScreen;

// const styles = StyleSheet.create({
//   container: {
//     height: 50,
//     marginHorizontal: 10,
//   },
//   btnLast: {
//     height: 50,
//     width: width * 0.9,
//     alignSelf: 'center',
//     borderRadius: 50,
//     backgroundColor: COLORS.green,
//     justifyContent: 'center',
//     alignItems: 'center',
//     mapContainer: {
//     height: 600, // Adjust the height as desired
//     marginHorizontal: 10,
//     borderRadius: 10,
//     overflow: 'hidden',
//     marginBottom: 10,
//    },
//    map: {
//      ...StyleSheet.absoluteFillObject,
//    },
//   },
// });



import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, TouchableOpacity, Text, View, StatusBar, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const LocationScreen = () => {
  const navigation = useNavigation("");
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (data, details) => {
    const { geometry } = details;
    const { location } = geometry;
    const { lat, lng } = location;
    setSelectedLocation({ latitude: lat, longitude: lng });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />

      <View style={styles.mapContainer}>
        <MapView style={styles.map}>
          {selectedLocation && (
            <Marker coordinate={selectedLocation} />
          )}
        </MapView>
      </View>

      <View style={{ flex: 1 }}>
        <GooglePlacesAutocomplete
          placeholder="Search for a location"
          onPress={handleLocationSelect}
          fetchDetails
          query={{
            key: 'YOUR_GOOGLE_MAPS_API_KEY',
            language: 'en',
          }}
        />

        <TouchableOpacity style={[styles.btnLast]} onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}>Save and Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocationScreen;

const styles = StyleSheet.create({
  mapContainer: {
    height: 600, // Adjust the height as desired
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
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
