import { StyleSheet, Text, Image, SafeAreaView, TextInput, Dimensions, StatusBar, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AllCategory from '../components/AllCategory';
import { useNavigation } from '@react-navigation/native';
import BottomTabs from '@react-navigation/bottom-tabs'


const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const AllScreen = () => {
  const navigation = useNavigation();
  
  // const [activeScreen, setActiveScreen] = useState('All');

  // const handleScreenPress = (screen) => {
  //   setActiveScreen(screen);
  //   navigation.navigate(`${screen}Screen`);
  // };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />

      <View style={{ height: 40, marginTop: 15, borderColor: COLORS.gray, alignSelf: 'flex-start', width: width * 0.7, borderWidth: 1, marginLeft: 15, flexDirection: 'row', borderRadius: 50 }}>
        <View style={{ marginLeft: 15, justifyContent: "center" }}>
          <Image source={require('../../assets/HomeScreenList2/search-interface-symbol.png')}
            style={{ width: 20, height: 20, tintColor: 'gray' }} />
        </View>
        <TextInput style={{ marginLeft: 10, width: width * 0.75, fontSize: 10 }}
          placeholder='Search dishes, restaurants or drinks' />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
        <View style={{ position: 'absolute', top: -30, right: 30 }}>
          <Text>Cancel </Text>
        </View>
      </TouchableOpacity>

      <View style={styles.flexContainer}>
        <TouchableOpacity>
          <View style={{
            marginLeft: 2,
            marginTop: 30,
            height: 50,
            // backgroundColor: activeScreen === 'All' ? '#caf0f8' : 'white',
            borderBottomWidth: 2,
            // borderBottomColor: activeScreen === 'All' ? "black" : 'white',
            width: 90,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={styles.textContent}>All </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("LocalDishesScreen")} >
          <View style={{
            marginLeft: 1,
            marginTop: 30,
            // borderColor: activeScreen === 'LocalDishes' ? COLORS.green : 'white',
            height: 50,
            // borderWidth: 1,
            borderRightWidth: 2,
            borderRightColor:"whitesmoke",
            width: 70,
            alignItems: "center",
            justifyContent: "center"
          }}>
            <Text style={styles.textContent2}>Local</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ContinentalScreen")}>
          <View style={{
            marginLeft: 1,
            marginTop: 30,
            borderRightWidth: 2,
            borderRightColor:"whitesmoke",
            height: 50,
            width: 110,
            alignItems: "center",
          }}>
            <Text style={styles.textContent1}>Continental </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("AllDrinkScreen")} >
          <View style={{
            marginTop: 30,
            height: 40,
            width: 70,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10
          }}>
            <Text style={styles.textContent}>Drinks </Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ borderWidth: 0.3, borderColor: "gray", width: width * 1, alignSelf: "center", marginTop: -1 }} />
      <View style={{ marginBottom: 20 }} />
      <Text style={{ fontSize: 10, marginTop: 20, marginLeft: 30 }}>Recent Searches</Text>
      <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 20 }}>
        <Image
          source={require('../../assets/HomeScreenList2/clk1.png')}
          style={{ width: 20, height: 20 }} />
        <Text style={{ fontSize: 12, marginLeft: 30, marginTop: 2 }}>Drinks  </Text>
      </View>

      <View style={{ borderWidth: 0.3, borderColor: "gray", width: width * 0.85, alignSelf: "center", marginTop: 20 }} />

      <Text style={{ fontSize: 12, marginTop: 20, marginLeft: 30 }}>Top Categories</Text>

      <View style={{ borderWidth: 0.3, borderColor: "gray", width: width * 0.85, alignSelf: "center", marginTop: 20 }} />

      <AllCategory />
    
    </SafeAreaView>
  );
};

export default AllScreen;

const styles = StyleSheet.create({
  flexContainer: {
    flexDirection: "row"
  },
  textContent: {
    color: "gray",
  },
  textContent1: {
    color: "gray",
    marginTop:10
  },
  textContent2: {
    color: "gray",
    marginTop:-5
  }
});
