import { StyleSheet, Text, Image, Dimensions, SafeAreaView, View, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { useRef } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

const { width, height } = Dimensions.get('screen');
const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };

const ProfileScreen = () => {
  const navigation = useNavigation('');
  const [hasGalleryPermission, setHasGalleryPermission] = useState(null);
  const [image, setImage] = useState(require('../../assets/profilescreenlist/avatarImg.jpg'));

  useEffect(() => {
    (async () => {
      const galleryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(galleryStatus.status === 'granted');
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage({ uri: result.uri });
      bs.current.snapTo(1);
    }
  };

  const takePhoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage({ uri: result.uri });
      bs.current.snapTo(1);
    }
  };

  if (hasGalleryPermission === false) {
    return <Text>No access to Internal Storage</Text>;
  }

  const bs = useRef();
  const fall = useRef(new Animated.Value(1)).current;

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{ alignItems: 'center' }}>
        <Text style={styles.panelTitle}>Upload Photo</Text>
        <Text style={styles.panelSubtitle}>Choose your Profile Picture</Text>
      </View>
      <TouchableOpacity style={styles.panelButton} onPress={takePhoto}>
        <Text style={styles.panelButtonTitle}>Take Photo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={pickImage}>
        <Text style={styles.panelButtonTitle}>Choose from Library</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.panelButton} onPress={() => bs.current.snapTo(1)}>
        <Text style={styles.panelButtonTitle}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />

      <BottomSheet
        ref={bs}
        snapPoints={[330, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />

      <Animated.View
        style={{
          margin: 20,
          paddingHorizontal: 24,
          opacity: Animated.add(0.1, Animated.multiply(fall, 1.0)),
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../assets/cartlist/back-button.png')}
            style={{ width: 25, height: 25, marginLeft: 20, marginTop: 15 }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => bs.current.snapTo(0)}>
          <View style={{ marginTop: 20, alignSelf: 'center' }}>
            <Image source={image} style={{ width: 150, height: 150 }} />

            <TouchableOpacity onPress={takePhoto}>
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
      </Animated.View>

      <Text style={{ alignSelf: 'center', marginTop: -10, fontSize: 16 }}>Benny Tee </Text>

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
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fefae0',
    shadowColor: '#333333',
    shadowOffset: { widt: -1, height: 1 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation:5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 14,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  panel: {
    padding: 20,
    backgroundColor: 'white',
    paddingTop: 20,
  },
});
