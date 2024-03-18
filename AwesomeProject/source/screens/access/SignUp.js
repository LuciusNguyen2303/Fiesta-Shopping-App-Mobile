import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native'
import React, { useState } from 'react'
import { AppStyles } from '../../css/styles/CommonStyles'
import { MetarialIcon } from '../../components/icon/Material'
import { commonStyles } from '../../css/styles/CommonStyles'
import {
  MySection,
  MyTextInput,
  MyTextInputPassword,
  CheckBox,
  SuccesfulSignUpDialog
} from '../../components/textinput/AccessComponents'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const SignUp = (props) => {

  // Successful dialog State
  const [isDialogVisible, setDialogVisible] = useState(false);
  const toggleDialog = () => {
    setDialogVisible(!isDialogVisible);
  };
  // Successful dialog State

  const handlerSignUp = () => {
    setDialogVisible(!isDialogVisible)
  }

  const [ischecked, setischecked] = useState(false);
  const { navigation } = props;
  return (
    <View style={AppStyles.StyleSignUp.container}>
      <SuccesfulSignUpDialog onClose={toggleDialog} isVisible={isDialogVisible}/>
      <ImageBackground resizeMode='cover' source={require('../../assets/images/logo.jpg')} style={{ height: 180 }}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ margin: 10 }}>
          <MetarialIcon name='arrow-back' color='black' size={30} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={[commonStyles.container, { marginTop: 40 }]}>
        <Text style={[commonStyles.title, { color: 'black', fontSize: 22 }]}>
          Sign Up
        </Text>
        <Text style={commonStyles.normalText}>
          Create an new account
        </Text>
      </View>
      <KeyboardAwareScrollView
        style={[commonStyles.container, { marginTop: 40 }]}>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <MySection label='User Name*' />
            <Text style={[commonStyles.normalText, { fontSize: 10, marginTop: 5.3 }]}>
              (Maximum 20 characters)
            </Text>
          </View>
          <MyTextInput length={20} />
        </View>
        <View style={{ marginTop: 25 }}>
          <MySection label='Email*' />
          <MyTextInput />
        </View>
        <View style={{ marginTop: 25 }}>
          <MySection label='Password*' />
          <MyTextInputPassword />
        </View>
        <View style={{ marginTop: 25 }}>
          <MySection label='Confirm Password*' />
          <MyTextInputPassword />
        </View>
        <View style={{ marginTop: 30, flexDirection: 'row' }}>
          <TouchableOpacity activeOpacity={1} onPress={() => setischecked(!ischecked)}>
            <CheckBox checked={ischecked} />
          </TouchableOpacity>
          <Text style={[commonStyles.normalText, { marginLeft: 15, marginTop: -5, opacity: ischecked ? 1 : 0.5 }]}>
            By creating an account you have to agree with our them & condication
          </Text>
        </View>
        <TouchableOpacity
          onPress={toggleDialog}
          style={[commonStyles.btnAccess_dark, { backgroundColor: ischecked ? 'black' : '#9b9b9b', borderColor: ischecked ? 'black' : '#9b9b9b'}]}
          disabled={ischecked ? false : true}>
          <Text style={commonStyles.textBtnAccess_dark}>Sign Up</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View >
  )
}

export default SignUp