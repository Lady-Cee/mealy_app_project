import { StyleSheet, Text, Image, Dimensions, SafeAreaView, View, TouchableOpacity, StatusBar } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const { width, height } = Dimensions.get('screen');
const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };

const SettingsScreen = () => {
  const navigation = useNavigation('');
  const [buttonOn, setButtonOn] = useState(false);

  const handleTurnOnButton = () => {
    setButtonOn(true);
  };

  const handleTurnOffButton = () => {
    setButtonOn(false);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 30, marginTop: 20 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, marginLeft: 90, marginTop: 20 }}>Settings </Text>
      </View>

      <Text style={{ marginTop: 40, marginLeft: 18, fontSize: 16 }}>Account </Text>
      <TouchableOpacity
        style={{
          height: 50,
          width: width * 0.9,
          alignSelf: 'center',
          backgroundColor: 'whitesmoke',
          borderColor: COLORS.gray,
          borderWidth: 0.5,
        }}
      >
        <View style={{ flexDirection: 'row', position: 'absolute', top: 12 }}>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: 'gray', fontSize: 14 }}>Edit Photo </Text>
          </View>
          <View style={{ marginLeft: 180 }}>
            <Image source={require('../../assets/profilescreenlist/image-editing.png')} style={{ width: 25, height: 25, tintColor: 'black' }} />
          </View>
        </View>
      </TouchableOpacity>
      

      <Text style={{ marginTop: 40, marginLeft: 18, fontSize: 16 }}>Notifications </Text>
      <View
        style={{
          height: 50,
          width: width * 0.9,
          alignSelf: 'center',
          backgroundColor: 'whitesmoke',
          borderColor: COLORS.gray,
          borderWidth: 0.5,
        }}
      >
        <View style={{ flexDirection: 'row', position: 'absolute', top: 12 }}>
          <View style={{ marginLeft: 15 }}>
            <MaterialCommunityIcons name="email-outline" size={20} color="black" />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: 'gray', fontSize: 14, marginTop: -5 }}>Email </Text>
            <Text style={{ color: 'gray', fontSize: 10 }}>receive Email Notifications </Text>
          </View>

          <TouchableOpacity onPress={buttonOn ? handleTurnOffButton : handleTurnOnButton}>
            <View style={{ marginLeft: 70, marginTop: -10 }}>
              <Image
                source={buttonOn ? require('../../assets/profilescreenlist/on-button.png') : require('../../assets/profilescreenlist/off-button.png')}
                style={{ width: 50, height: 50 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={{ marginTop: 40, marginLeft: 18, fontSize: 16 }}>Security </Text>
      <TouchableOpacity
        style={{
          height: 50,
          width: width * 0.9,
          alignSelf: 'center',
          backgroundColor: 'whitesmoke',
          borderColor: COLORS.gray,
          borderWidth: 0.5,
        }}
      >
        <View style={{ flexDirection: 'row', position: 'absolute', top: 12 }}>
          <View style={{ marginLeft: 15 }}>
            <Image source={require('../../assets/profilescreenlist/bag.png')} style={{ width: 25, height: 25, tintColor: 'black' }} />
          </View>
          <View style={{ marginLeft: 20 }}>
            <Text style={{ color: 'gray', fontSize: 14, marginTop: -1 }}>Change Password </Text>
          </View>
          <View style={{ marginLeft: 100, marginTop: 7 }}>
            <Image source={require('../../assets/profilescreenlist/rytarrow.png')} style={{ width: 8, height: 8, tintColor: 'gray' }} />
          </View>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({});
