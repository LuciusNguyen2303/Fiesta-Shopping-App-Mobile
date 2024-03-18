import { View, Text, ImageBackground, StatusBar, TextInput, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { commonStyles } from '../../css/styles/CommonStyles'
import { AppStyles } from '../../css/styles/CommonStyles'
import { AppContext } from '../../util/AppContext'
const backGround = { uri: 'http://images.unsplash.com/photo-1606164510427-0dff1bcb27d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHwwfHx8MA%3D%3D' }
const UserAccess = (props) => {
    const {navigation} = props;
    return (
        <ImageBackground style={[{ height: '100%'}, commonStyles.container]} source={backGround}>
            <StatusBar backgroundColor='#000000' />
            <View style={AppStyles.styleUserAccess.view}>
                <Text style={commonStyles.title}>FashionFiesta</Text>
                <Text numberOfLines={2} style={[commonStyles.normalText, {color:'white'}]}>
                "Style is a way to say who you are without having to speak, about timeless elegance and individuality."
                </Text>
            </View>
            <View style={[commonStyles.viewBtnAccess, {marginTop:320}]}>
                <TouchableOpacity
                onPress={() => navigation.navigate('Login')} 
                style={commonStyles.btnAccess_light}>
                    <Text style={commonStyles.textBtnAccess_light}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => navigation.navigate('SignUp')} 
                style={commonStyles.btnAccess_dark}>
                    <Text style={commonStyles.textBtnAccess_dark}>Sign up</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}

export default UserAccess