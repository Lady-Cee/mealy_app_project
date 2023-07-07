import React, { useState } from 'react';
import { StyleSheet, Text, Image, View, SafeAreaView, TouchableOpacity, StatusBar, Dimensions, TextInput, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const ProfileDetailsScreen = () => {
  const navigation = useNavigation("");
  const [accountName, setAccountName] = useState("Benny Tee");
  const [phoneNumber, setPhoneNumber] = useState("08012347855");
  const [email, setEmail] = useState("bentee@gmail.com");
  const [isEditingAccountName, setIsEditingAccountName] = useState(false);
  const [isEditingPhoneNumber, setIsEditingPhoneNumber] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const handleEditAccountName = () => {
    setIsEditingAccountName(true);
  };

  const handleEditPhoneNumber = () => {
    setIsEditingPhoneNumber(true);
  };

  const handleEditEmail = () => {
    setIsEditingEmail(true);
  };

  const handleSaveAccountName = () => {
    setIsEditingAccountName(false);
    // Perform any save or update logic here
  };

  const handleSavePhoneNumber = () => {
    setIsEditingPhoneNumber(false);
    // Perform any save or update logic here
  };

  const handleSaveEmail = () => {
    setIsEditingEmail(false);
    // Perform any save or update logic here
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Confirmation',
      'Are you sure you want to delete your account?',
      [
        { text: 'No', style: 'cancel' },
        { text: 'Yes', onPress: () => deleteAccount() }
      ]
    );
  };

  const deleteAccount = () => {
    // Perform account deletion logic here
    navigation.navigate('HomeScreen'); // Navigate to home screen after account deletion
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
          <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 15 }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginLeft: 60, marginTop: 15 }}>Profile Details </Text>
      </View>

      <View style={{
        width: width * 0.9,
        alignSelf: "center",
        height: 55,
        borderWidth: 1,
        marginTop: 30,
        borderColor: 'gray',
        borderRadius: 2,
        flexDirection: "row"
      }}>
        <View style={{ paddingLeft: 15, marginTop: 5 }}>
          <Text>Account name </Text>
          {isEditingAccountName ? (
            <TextInput
              style={{ color: "gray", fontSize: 12, lineHeight: 18 }}
              value={accountName}
              onChangeText={(text) => setAccountName(text)}
              onBlur={handleSaveAccountName}
              autoFocus
            />
          ) : (
            <Text style={{ color: "gray", fontSize: 12, lineHeight: 18 }}>{accountName}</Text>
          )}
        </View>
        <TouchableOpacity style={{ marginLeft: 160, marginTop: 10 }} onPress={handleEditAccountName}>
          <AntDesign name="edit" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={{
        width: width * 0.9,
        alignSelf: "center",
        height: 55,
        borderWidth: 1,
        marginTop: 30,
        borderColor: 'gray',
        borderRadius: 2,
        flexDirection: "row"
      }}>
        <View style={{ paddingLeft: 15, marginTop: 5 }}>
          <Text>Phone number </Text>
          {isEditingPhoneNumber ? (
            <TextInput
              style={{ color: "gray", fontSize: 12, lineHeight: 18 }}
              value={phoneNumber}
              onChangeText={(text) => setPhoneNumber(text)}
              onBlur={handleSavePhoneNumber}
              autoFocus
            />
          ) : (
            <Text style={{ color: "gray", fontSize: 12, lineHeight: 18 }}>{phoneNumber}</Text>
          )}
        </View>
        <TouchableOpacity style={{ marginLeft: 160, marginTop: 10 }} onPress={handleEditPhoneNumber}>
          <AntDesign name="edit" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={{
        width: width * 0.9,
        alignSelf: "center",
        height: 55,
        borderWidth: 1,
        marginTop: 30,
        borderColor: 'gray',
        borderRadius: 2,
        flexDirection: "row"
      }}>
        <View style={{ paddingLeft: 15, marginTop: 5 }}>
          <Text>Email </Text>
          {isEditingEmail ? (
            <TextInput
              style={{ color: "gray", fontSize: 12, lineHeight: 18 }}
              value={email}
              onChangeText={(text) => setEmail(text)}
              onBlur={handleSaveEmail}
              autoFocus
            />
          ) : (
            <Text style={{ color: "gray", fontSize: 12, lineHeight: 18 }}>{email} </Text>
          )}
        </View>
        <TouchableOpacity style={{ marginLeft: 140, marginTop: 10 }} onPress={handleEditEmail}>
          <AntDesign name="edit" size={24} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={{ borderWidth: 0.5, alignSelf:"center", borderColor: 'gray', marginTop: 40, marginBottom: 30, width: width * 0.9 }} />

      <TouchableOpacity style={{
        width: width * 0.9,
        alignSelf: "center",
        height: 45,
        borderWidth: 1,
        marginTop: -5,
        borderColor: 'gray',
        borderRadius: 2,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10
      }} onPress={handleDeleteAccount}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/profilescreenlist/delete.png')}
            style={{ width: 20, height: 20, tintColor: 'red', marginRight: 10 }}
          />
          <Text style={{ color: "red" }}>Delete account </Text>
        </View>
        <Image
          source={require('../../assets/profilescreenlist/right-arrow.png')}
          style={{ width: 20, height: 20, tintColor: 'gray' }}
        />
      </TouchableOpacity>

    </SafeAreaView>
  );
};

export default ProfileDetailsScreen;

const styles = StyleSheet.create({});
