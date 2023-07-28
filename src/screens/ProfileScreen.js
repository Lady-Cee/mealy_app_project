import { StyleSheet, Text, Image, Dimensions, SafeAreaView, View, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { createRef } from 'react';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useRef, useContext } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { useState } from 'react';

const { width, height } = Dimensions.get('screen');
const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };


const ProfileScreen = () => {
  const navigation = useNavigation('');

  const renderInner = () => {
    <Text>Hello</Text>
  }
  const renderHeader = () => {
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  }

  // const [bs, setBs] = useState(null);
  // const [fall, setFall] = useState(new Animated.Value(1));
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
    <StatusBar backgroundColor={COLORS.white} />

    {/* <BottomSheet
      ref={bs}
      snapPoints={[330, 0]}
      renderContent={renderInner}
      renderHeader={renderHeader}
      initialSnap={1}
      callbackNode={fall}
      enabledGestureInteraction={true}
    /> */}
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/cartlist/back-button.png')}
            style={{ width: 25, height: 25, marginLeft: 20, marginTop: 15 }}
          />
        </TouchableOpacity>

        <TouchableOpacity  >
          <View style={{ marginTop: 20, alignSelf: 'center' }}>
            <Image source={require("../../assets/profilescreenlist/avatarImg.png")} style={{ width: 150, height: 150, }} />

            <TouchableOpacity >
              <Feather
                name="camera"
                size={24}
                color="gray"
                style={{
                  opacity: 0.7,
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  top: -30,
                  left: 80,
                }}
              />
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
        
      
        <Text style={{alignSelf:"center", marginTop:-10, fontSize:14}}>Benny </Text>
      
        

        <TouchableOpacity onPress={() => navigation.navigate('ProfileDetailsScreen')}>
        <View style={{ alignSelf: 'flex-start', marginLeft: 50, flexDirection: 'row', marginTop: 40 }}>
          <Feather name="edit" size={20} color="gray" />
          <Text style={{ color: 'gray', marginLeft: 30, fontSize: 14 }}>Edit profile </Text>
        </View>
      </TouchableOpacity>

      <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 5, marginBottom: 30, alignSelf: 'center', width: width * 0.75 }} />

      <TouchableOpacity>
        <View style={{ alignSelf: 'flex-start', marginLeft: 50, flexDirection: 'row' }}>
          <MaterialIcons name="bookmark-border" size={20} color="gray" />
          <Text style={{ color: 'gray', marginLeft: 30, fontSize: 14 }}>My orders </Text>
        </View>
      </TouchableOpacity>

      <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 5, marginBottom: 30, alignSelf: 'center', width: width * 0.75 }} />

      <TouchableOpacity onPress={() => navigation.navigate('HelpScreen')}>
        <View style={{ alignSelf: 'flex-start', marginLeft: 50, flexDirection: 'row' }}>
          <MaterialCommunityIcons name="comment-question-outline" size={20} color="gray" />
          <Text style={{ color: 'gray', marginLeft: 30, fontSize: 14 }}>Help </Text>
        </View>
      </TouchableOpacity>

      <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 5, marginBottom: 30, alignSelf: 'center', width: width * 0.75 }} />

      <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
        <View style={{ alignSelf: 'flex-start', marginLeft: 50, flexDirection: 'row' }}>
          <Feather name="settings" size={20} color="gray" />
          <Text style={{ color: 'gray', marginLeft: 30, fontSize: 14 }}>Settings </Text>
        </View>
      </TouchableOpacity>

      <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 5, marginBottom: 30, alignSelf: 'center', width: width * 0.75 }} />

      <TouchableOpacity onPress={() => navigation.navigate('FaqScreen')}>
        <View style={{ alignSelf: 'flex-start', marginLeft: 50, flexDirection: 'row' }}>
          <Image source={require('../../assets/profilescreenlist/question-and-answer.png')} style={{ width: 20, height: 20, tintColor: 'gray' }} />
          <Text style={{ color: 'gray', marginLeft: 30, fontSize: 14 }}>FAQs </Text>
        </View>
      </TouchableOpacity>

      <View style={{ borderWidth: 0.3, borderColor: 'gray', marginTop: 5, marginBottom: 30, alignSelf: 'center', width: width * 0.75 }} />

      <TouchableOpacity onPress={() => navigation.navigate('WelcomeScreen')}>
        <View style={{ alignSelf: 'flex-start', marginLeft: 50, flexDirection: 'row' }}>
          <Image source={require('../../assets/profilescreenlist/logout.png')} style={{ width: 20, height: 20, tintColor: 'gray' }} />
          <Text style={{ color: 'gray', marginLeft: 30, fontSize: 14 }}>Logout </Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})