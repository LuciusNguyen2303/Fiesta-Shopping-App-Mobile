import React, { useState } from "react";
import { TextInput, StyleSheet, Text, View, TouchableOpacity, Modal } from "react-native";
import { commonStyles } from "../../css/styles/CommonStyles";
import { POPPINS_FONT } from "../../css/theme/Theme";
import { FoundationIcon } from "../icon/Foundation";
import { MetarialIcon } from "../icon/Material";
import { FontAwesomeIcon } from "../icon/FontAwesome";
export const MySection = ({ label }) => {
    return <Text style={styles.section}>{label}</Text>
}

export const MyTextInput = ({ text, placeholder, length }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                textAlignVertical="bottom"
                placeholder={placeholder}
                maxLength={length}
                value={text}
            />
            <View style={styles.icon}>
                <MetarialIcon name='done' size={20} color='black' />
            </View>
        </View>
    )
}

export const MyTextInputPassword = ({ text, placeholder, length }) => {
    const [isVisible, setisVisible] = useState(true)
    const handlerIcon1 = () => {
        setisVisible(!isVisible)
    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput}
                textAlignVertical="bottom"
                secureTextEntry={isVisible}
                placeholder={placeholder}
                maxLength={length}
                value={text}
            />
            <TouchableOpacity onPress={handlerIcon1} style={styles.icon}>
                <MetarialIcon name={isVisible === true ? 'visibility-off' : 'visibility'} size={20} color='black' />
            </TouchableOpacity>
        </View>
    )
}

export const SocialSignInButton = ({ label, iconName, iconColor, backgroundColor, labelColor, iconSize, borderColor }) => {
    return (
        <TouchableOpacity style={[
            styles.btnSocialContainer,
            { backgroundColor: backgroundColor, borderWidth: 1, borderColor: borderColor }]}>
            <FontAwesomeIcon name={iconName} size={iconSize} color={iconColor} />
            <Text style={[commonStyles.textBtnAccess_light, { color: labelColor }]}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export const LineWithTextBetween = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '100%', height: 1.5, opacity: 0.3, marginTop: 15, marginBottom: 15, backgroundColor: '#c3c3c3' }} />
            <Text style={{
                fontSize: 15, backgroundColor: 'white',
                marginLeft: -190, marginTop: 4, width: 25, textAlign: 'center', fontFamily: POPPINS_FONT.regular
            }}>
                or
            </Text>
        </View>
    )
}

export const CheckBox = ({ checked }) => {
    return (
        <View
            style={{ borderWidth: 1, width: 15, height: 15, opacity: checked === true ? 1 : 0.5 }}>
            {
                checked === true ? <View style={{ backgroundColor: '#3669c9', width: 15, height: 15 }}>
                    <MetarialIcon name='done' size={13} color='white' />
                </View> : <View />
            }
        </View>
    )
}

export const SuccesfulSignUpDialog = ({ isVisible, onClose }) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
            onRequestClose={onClose}
        >
            <View style={[commonStyles.container, { backgroundColor: 'white', height: '100%', alignItems: 'center' }]}>
                {/* View này là view tổng */}
                <View style={{ marginTop: 230, width: '80%', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', borderRadius: 50, borderWidth: 4, borderColor: '#65BA67', width: 43 }}>
                        <MetarialIcon name='done' color='#65BA67' size={35} />
                    </View>

                    <Text style={[commonStyles.title, { color: 'black', fontSize: 25, marginTop: 35 }]}>
                        Successful!
                    </Text>
                    <Text style={[commonStyles.normalText, { textAlign: 'center' }]}>
                        You have successfully registered in out app and start working on it.
                    </Text>
                </View>
                <TouchableOpacity
                    style={[commonStyles.btnAccess_dark, { marginTop: 230 }]}>
                    <Text style={commonStyles.textBtnAccess_dark}>
                        Start Shopping
                    </Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}
const styles = StyleSheet.create({
    section: {
        color: 'black',
        fontFamily: POPPINS_FONT.bold,
        fontSize: 15
    },
    textInput: {
        backgroundColor: 'white',
        borderBottomWidth: 0.2,
        height: 30,
        borderColor: '#d1d1d1',
        marginTop: -8,
        width: '100%',
        fontSize: 17,
        paddingBottom: -5,
        paddingLeft: -5
    },
    container: {
        flexDirection: 'row'
    },
    icon: {
        position: 'absolute',
        right: 0
    },
    btnSocialContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 350,
        borderRadius: 30,
        justifyContent: 'center'
    }
})