import { 
    StyleSheet, 
    TextInput,
    SafeAreaView,
    Dimensions,
    StatusBar,
    Text, 
    TouchableOpacity,
    View } from 'react-native'
import React from 'react';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const COLORS = {primary:'#3b8132', white:'#fff', green:'#4EA837', gray:'#6c757d'};
const {width, height} = Dimensions.get('screen');

const ResetPassword = () => {
     const [passwordVisible, onChangePasswordVisible] = useState(true);
     const navigation = useNavigation ();
  return (
    <SafeAreaView style={{flex:1, backgroundColor: COLORS.white}}>
    <StatusBar backgroundColor={COLORS.white}/>
    <Text style={{fontSize:30, marginLeft:20,marginBottom:20 }}>Reset Password </Text>

    <TextInput 
        style={styles.input}
        placeholder="Enter new password"
        secureTextEntry={passwordVisible}
        placeholderTextColor={'#dad7cd'}  
        keyboardType='phone-pad'      
       />
        <TextInput 
        style={styles.input}
        placeholder="Confirm new password"
        secureTextEntry={passwordVisible}
        placeholderTextColor={'#dad7cd'}   
        keyboardType='phone-pad'     
       />
        <View style={{marginTop:50}}>   
        <TouchableOpacity   
          style={[styles.btnLast]}
          
        >
          <Text style={{
            fontWeight:"bold", 
            fontSize:15, 
            color:COLORS.white}}
            onPress = {() => navigation.navigate('WelcomeScreen')}>Submit </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ResetPassword

const styles = StyleSheet.create({
    input: {
        height: 50,
        width: width*0.9,
        alignSelf:'center',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius:5,
        borderColor:'#898989',
        borderTopColor: '#ccd5ae',
        borderStyle: 'solid',
      },
      btnLast:{
        height:50,
        width: width*0.9,
        alignSelf:'center',
        borderRadius:50,
        backgroundColor:COLORS.green,
        justifyContent:'center',
        alignItems:"center",
        
    },
})