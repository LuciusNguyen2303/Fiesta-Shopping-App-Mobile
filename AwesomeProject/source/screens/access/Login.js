import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LIGHT_MODE } from '../../config/ThemeAction'
import { DARK_MODE } from '../../config/ThemeAction'
import { LIGHT_DARK_MODE } from '../../css/theme/Theme'
import { AppContext } from '../../util/AppContext'
import { AppStyles, commonStyles } from '../../css/styles/CommonStyles'
import {
  MyTextInput,
  MySection,
  MyTextInputPassword,
  SocialSignInButton,
  LineWithTextBetween
} from '../../components/textinput/AccessComponents'
import { MetarialIcon } from '../../components/icon/Material'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const Login = (props) => {
  const { navigation } = props;
  const [isModeApply, setisModeApply] = useState("LIGHT_MODE")
  // const { isLogin, setisLogin } = useContext(AppContext)
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const toggleMode = () => {
    setisModeApply((prevMode) => (prevMode === "LIGHT_MODE" ? "DARK_MODE" : "LIGHT_MODE"));
  };
//  Google login


GoogleSignin.configure({
  webClientId: '274466920945-i7nu1uis3qm7k8kpggme5u16t9kc5ltf.apps.googleusercontent.com',
});

async function onGoogleButtonPress() {

  try {
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
  
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
    // Sign-in the user with the credential
     auth().signInWithCredential(googleCredential);
     console.log("User sign in by google successfully"+idToken);
     GoogleSignin.signOut();
  } catch (error) {
    console.log("Function onGoogleButtonPress error: "+error);
  }
//  Nos laf token nha
}

  const theme = LIGHT_DARK_MODE(isModeApply);
  return (
    <View style={AppStyles.StyleLogin.container}>
      <ImageBackground resizeMode='cover' source={require('../../assets/images/logo.jpg')} style={{ height: 180 }}>
        <TouchableOpacity
        onPress={() => navigation.goBack()} 
        style={{margin:10}}>
          <MetarialIcon name='arrow-back' color='black' size={30} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={commonStyles.container}>
        <Text style={[commonStyles.title, { color: 'black', fontSize: 22 }]}>
          Welcome!
        </Text>
        <Text style={commonStyles.normalText}>
          Please login or sign up to continue our app
        </Text>
        <View style={{ marginTop: 50 }}>
          <MySection label='Email' />
          <MyTextInput text={username} placeholder='Enter your email'/>
        </View>
        <View style={{ marginTop: 25 }}>
          <MySection label='Password' />
          <MyTextInputPassword text={password} placeholder='Enter your password'/>
        </View>
        <View style={{ marginTop: 20 }}>
          <TouchableOpacity style={[commonStyles.btnAccess_dark, { backgroundColor: 'black' }]}>
            <Text style={commonStyles.textBtnAccess_dark}>
              Login
            </Text>
          </TouchableOpacity>
          <LineWithTextBetween />
          <View>
            <SocialSignInButton
              iconName='facebook'
              iconColor='white'
              iconSize={25}
              backgroundColor='#3B5999'
              borderColor='#3B5999'
              labelColor='white'
              label='Continue with Facebook' />
            <View style={{ height: 15 }} />
            <SocialSignInButton
              onPress={onGoogleButtonPress}
              iconName='google'
              iconColor='black'
              iconSize={25}
              backgroundColor='white'
              borderColor='#d4d4d4'
              labelColor='black'
              label='Continue with Google'
              
            />
            <View style={{ height: 15 }} />
            <SocialSignInButton
              iconName='apple'
              iconColor='black'
              iconSize={25}
              backgroundColor='white'
              borderColor='#d4d4d4'
              labelColor='black'
              label='Continue with Apple'
            />
          </View>
        </View>
      </View>
    </View>
  )
}

export default Login