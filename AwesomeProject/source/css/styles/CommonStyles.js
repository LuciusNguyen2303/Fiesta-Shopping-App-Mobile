import React from "react";
import { POPPINS_FONT } from "../theme/Theme";
import { StyleSheet } from "react-native";
import { styleUserAccess } from "./screens/StyleUserAccess";
import { StyleLogin } from "./screens/StyleLogin";
import { StyleSignUp } from "./screens/StyleSignUp";
import { StyleSearchScreen } from "./screens/StyleSearchScreen";
import { StyleOrderScreen } from "./screens/StyleOrderScreen";
import { StyleHome } from "./screens/StyleHome";
import { StyleChatDashboard } from "./screens/StyleChatDashboard";
export const commonStyles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20, backgroundColor:'white', height:'100%'
    },
    normalText: {
        fontSize: 15,
        fontFamily: POPPINS_FONT.regular
    },
    title: {
        fontSize: 40,
        fontFamily: POPPINS_FONT.bold,
        color: 'white'
    },
    btnAccess_light: {
        borderRadius: 30,
        backgroundColor: '#ffffff',
        width:350,
        borderWidth:1,
        borderColor: 'white'
    },
    btnAccess_dark: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 30,
        width:350,
        marginTop:20,
        backgroundColor:'black'
    },
    textBtnAccess_light: {
        textAlign: 'center',
        fontFamily: POPPINS_FONT.bold,
        padding: 8,
        color: 'black',
        fontSize:17,
        marginTop:4
    },
    textBtnAccess_dark: {
        textAlign: 'center',
        fontFamily: POPPINS_FONT.bold,
        padding: 8,
        color: 'white',
        fontSize:17,
        marginTop:4       
    },
    viewBtnAccess: {
        flexDirection:'column',
        alignItems:'stretch'
    },
    section : {
        fontFamily: POPPINS_FONT.bold,
        fontSize:18,
        color:'black'
    }
})

export const AppStyles = {
    styleUserAccess,
    StyleLogin,
    StyleSignUp,
    StyleSearchScreen,
    StyleOrderScreen,
    StyleHome,
    StyleChatDashboard
}