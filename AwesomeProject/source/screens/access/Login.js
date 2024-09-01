import { View, Text, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { LIGHT_MODE } from '../../config/ThemeAction'
import { DARK_MODE } from '../../config/ThemeAction'
import { LIGHT_DARK_MODE } from '../../css/theme/Theme'
import { AppContext } from '../../util/AppContext'
import { AppStyles, commonStyles } from '../../css/styles/CommonStyles'
import { LoginManager, AccessToken, Profile } from 'react-native-fbsdk-next'
import {
  MyTextInput,
  MySection,
  MyTextInputPassword,
  LineWithTextBetween
} from '../../components/textinput/AccessComponents'
import { SocialSignInButton } from '../../components/textinput/AccessComponents'
import { MetarialIcon } from '../../components/icon/Material'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import AxiosInstance from '../../util/AxiosInstance'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Wrapper from '../../components/Wrapper'
import Button from '../../components/Button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { isLoginSelector, setIsLogin, setUserData } from '../../redux-store'
import { useTranslation } from 'react-i18next'
const Login = (props) => {
  const { navigation } = props;
  const [isModeApply, setisModeApply] = useState("LIGHT_MODE")
  // const { isLogin, setisLogin } = useContext(AppContext)
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const dispatch = useDispatch()
  // // change darklightmode function
  // // const toggleMode = () => {
  // //   setisModeApply((prevMode) => (prevMode === "LIGHT_MODE" ? "DARK_MODE" : "LIGHT_MODE"));
  // // };
  // // const theme = LIGHT_DARK_MODE(isModeApply);

  // // signinFacebook
  // const facebookLogin = async () => {
  //   try {
  //     const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
  //     if (result.isCancelled) {
  //       console.log('Đăng nhập bị hủy');
  //     } else {
  //       const currentProfile = await Profile.getCurrentProfile().then(
  //         function (currentProfile) {
  //           if (currentProfile) {
  //             console.log("Tên người dùng Facebook: " +
  //               currentProfile.name + " userID: " + currentProfile.userID
  //             );
  //             createToken(currentProfile.userID)
  //           }
  //         }
  //       );
  //     }
  //   } catch (error) {
  //     console.log('Lỗi đăng nhập: ', error);
  //   }
  // };
  // //  Google login


  // GoogleSignin.configure({
  //   webClientId: '1004261782493-85h6acr55sfjv0usi1o98s62h6n3c6ev.apps.googleusercontent.com',
  // });

  // async function onGoogleButtonPress() {

  //   try {
  //     await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
  //     // Get the users ID token
  //     const { idToken } = await GoogleSignin.signIn();

  //     // Create a Google credential with the token
  //     const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //     // Sign-in the user with the credential
  //     auth().signInWithCredential(googleCredential);
  //     ToastAndroid.show("User sign in by google successfully" + idToken,ToastAndroid.LONG);
  //     GoogleSignin.signOut();
  //   } catch (error) {
  //     console.log("Function onGoogleButtonPress error: " + error);
  //   }
  //   //  Nos laf token nha
  // }

  // // createToken when logged in facebook
  // const createToken = async (userID) => {
  //   const response = await AxiosInstance.post('jwtApi/facebookSignin?id=' + userID);
  //   if (response.accessToken) {
  //     console.log('accessToken: ' + response.accessToken);
  //     await AsyncStorage.setItem('accessToken', response.accessToken)
  //   }
  // }

  // // get accessToken from AsyncStorage
  // const getIemFromAsyncStorage = async (key) => {
  //   const accessToken = await AsyncStorage.getItem(key)
  //   if (accessToken) {
  //     console.log('accessToken from AsyncStorage: ' + accessToken);
  //   }
  // }

  //signin with mongo DB
  const login = async () => {
    if(!username && !password) ToastAndroid.show("No username or id",ToastAndroid.SHORT)
    try {
      const response = await AxiosInstance.post('userApi/login', { userName: username, password: password })
      console.log('response: ' + JSON.stringify(response));
      if (response.token && response.result === true) {
        await AsyncStorage.setItem("token",response.token)
        dispatch(setUserData(response.user))
        ToastAndroid.show('Signin Successful', ToastAndroid.SHORT);
        dispatch(setIsLogin(true))

      } else if (response.result === false) {
        ToastAndroid.show('Signin Failed', ToastAndroid.SHORT)
      }
    } catch (error) {
      console.log('Signin error: ' + error);
    }
  }

  //textInput handler
  const passwordHandler = (text) => {
    setpassword(text)
  }
  const userNameHandler = (text) => {
    setusername(text)
  }
  //textInput handler
const {t} = useTranslation()
  return (
    <Wrapper >
      <ImageBackground resizeMode='cover' source={require('../../assets/images/logo.jpg')} style={{ height: 180 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ margin: 10,marginLeft:0 }}>
          <MetarialIcon name='arrow-back' color='black' size={30} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={commonStyles.container}>
        <Text style={[commonStyles.title, { color: 'black', fontSize: 22 }]}>
          {t("Welcome")}!
        </Text>
        <Text style={commonStyles.normalText}>
          {t("Sign-in-remind")}
        </Text>
        <View style={{ marginTop: 50 }}>
          <MySection label='Email' />
          <MyTextInput placeholder={t("email-placeholder")} onChangeText={userNameHandler} />
        </View>
        <View style={{ marginTop: 25 }}>
          <MySection label={t("Password")} />
          <MyTextInputPassword placeholder={t("password-placeholder")} onChangeText={passwordHandler} />
        </View>
        <View style={{ marginTop: 20 }}>
          <Button
          onPress={()=>login()}
            title={t("Sign in")}
            styleButton={{backgroundColor:'black',width:'100%'}}
            styleText={{color:'white'}}
          />
          {/* <LineWithTextBetween /> */}
          {/* <View>
            <SocialSignInButton
              onPress={() => facebookLogin()}
              iconName='facebook'
              iconColor='white'
              iconSize={25}
              backgroundColor='#3B5999'
              borderColor='#3B5999'
              labelColor='white'
              label='Continue with Facebook' />
            <View style={{ height: 15 }} />
            <SocialSignInButton
              onPress={() => onGoogleButtonPress()}
              iconName='google'
              iconColor='black'
              iconSize={25}
              backgroundColor='white'
              borderColor='#d4d4d4'
              labelColor='black'
              label='Continue with Google'

            />
            <View style={{ height: 15 }} />
            <TouchableOpacity onPress={() => getIemFromAsyncStorage('accessToken')}>
              <SocialSignInButton
                iconName='apple'
                iconColor='black'
                iconSize={25}
                backgroundColor='white'
                borderColor='#d4d4d4'
                labelColor='black'
                label='Continue with Apple'
              />
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </Wrapper>
  )
}

export default Login