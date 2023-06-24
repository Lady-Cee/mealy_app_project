import React, { useState, useRef } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  View,
  TextInput,
} from 'react-native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

const VerificationScreen = () => {
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');

  const inputRefs = useRef([]);

  const handleOtpChange = (index, value) => {
    const newOtp = otp.split('');
    newOtp[index] = value;
    setOtp(newOtp.join(''));

    if (index < inputRefs.current.length - 1 && value !== '') {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleSubmit = () => {
    // Handle OTP submission here
  };

  const handleResend = () => {
    // Handle resend OTP here
  };

  const setInputRef = (ref, index) => {
    inputRefs.current[index] = ref;
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />
      <Text style={{ fontSize: 16, marginLeft: 20 }}>Verification</Text>
      <Text style={{ fontSize: 12, marginLeft: 20, color: COLORS.gray, lineHeight: 20 }}>
        Enter the OTP code sent to your email
      </Text>

      <View style={styles.otpContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            style={styles.otpInput}
            value={otp[index] || ''}
            onChangeText={(value) => handleOtpChange(index, value)}
            keyboardType="numeric"
            maxLength={1}
            ref={(ref) => setInputRef(ref, index)}
          />
        ))}
      </View>

      <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 10 }}>
        <View>
          <Text style={{ fontSize: 12 }}>Didn't receive any code yet? </Text>
        </View>
        <View style={{ marginLeft: 5 }} />
        <View>
          <TouchableOpacity onPress={handleResend}>
            <Text style={{ fontSize: 12, color: COLORS.green }}>Resend </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 50 }}>
        <TouchableOpacity style={[styles.btnLast]} onPress={handleSubmit}>
          <Text
            style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }}
            onPress={() => navigation.navigate('LocationScreen')}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default VerificationScreen;

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
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  otpInput: {
    borderWidth: 2,
    borderColor: COLORS.gray,
    borderRadius: 5,
    padding: 12,
    width: 40,
    textAlign: 'center',
  },
});
