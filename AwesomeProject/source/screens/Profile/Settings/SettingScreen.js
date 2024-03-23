import { View, Text, Image, Switch, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { AppStyles } from '../../../css/styles/CommonStyles'
import { commonStyles } from '../../../css/styles/CommonStyles'
import { MySection } from '../../../components/textinput/AccessComponents'
import { MetarialIcon } from '../../../components/icon/Material'
import { InfoDisplayWithLabel } from '../../../components/InfoDisplay/View'
import { POPPINS_FONT } from '../../../css/theme/Theme'
import GenderSelection from './gender'
import { FoundationIcon } from '../../../components/icon/Foundation'
import { StyleSettingScreen } from './styles'
import { FontAwesomeIcon } from '../../../components/icon/FontAwesome'
import { ToggleButton } from './ToggleButton'
const SettingScreen = () => {
    const [isEnabled, setIsEnabled] = useState(false);

    // Gender handler...
    const [gender, setGender] = useState(null);
    const handleGenderChange = (selectedGender) => {
        setGender(selectedGender);
    };
    // Gender handler

    // Dark mode handler...
    const [isDarkMode, setisDarkMode] = useState('off')
    const darkModeChange = (selectedCurrentMode) => {
        setisDarkMode(selectedCurrentMode)
    }
    // Dark mode handler
    // Dark mode handler...
    const [onNotification, setOnNotification] = useState('off')
    const NotificationChange = (selectedCurrentMode) => {
        setOnNotification(selectedCurrentMode)
    }
    // Dark mode handler

    return (
        <View style={commonStyles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50 }}>
                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Image style={{ width: 80, height: 80, borderRadius: 18 }} source={require('../../../assets/images/avatar1.jpg')} />
                    <View style={{ backgroundColor: 'white', elevation: 5, borderRadius: 5, padding: 2, width: 22, height: 22, bottom: -4, position: 'absolute', right: -4 }}>
                        <MetarialIcon name={'edit'} size={17} color={'black'} />
                    </View>
                </View>
                <MySection label={'Upload image'} />
            </View>
            <View style={{ marginTop: 20 }}>
                <InfoDisplayWithLabel label={"Name"} info={"Fscreation"} />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                    <Text style={{ fontFamily: POPPINS_FONT.medium, fontSize: 16, opacity: 0.7, marginRight: 30 }}>Gender</Text>
                    <GenderSelection onGenderChange={handleGenderChange} />
                </View>
                <InfoDisplayWithLabel label={"Age"} info={"22 Year"} />
                <InfoDisplayWithLabel label={"Email"} info={"Fscreation441@gmail.com"} />
            </View>
            <View style={{ marginTop: 20 }}>
                <MySection label={'Settings'} />
                <View style={StyleSettingScreen.viewMenu}>
                    <View style={StyleSettingScreen.viewOption}>
                        <View style={StyleSettingScreen.viewTitle}>
                            <View style={StyleSettingScreen.viewIcon}>
                                <FontAwesomeIcon name={'globe'} size={22} color={'black'} />
                            </View>
                            <MySection label={'Language'} />
                        </View>
                        <View style={StyleSettingScreen.viewStatus}>
                            <Text style={[commonStyles.normalText, { marginTop: 4, fontSize: 11 }]}>
                                English
                            </Text>
                            <MetarialIcon name={'navigate-next'} color={'black'} size={23} />
                        </View>
                    </View>
                    <View style={StyleSettingScreen.viewOption}>
                        <View style={StyleSettingScreen.viewTitle}>
                            <View style={StyleSettingScreen.viewIcon}>
                                <MetarialIcon name={'notifications'} size={22} color={'black'} />
                            </View>
                            <MySection label={'Notification'} />
                        </View>
                        <View style={[StyleSettingScreen.viewStatus]}>
                            <Text style={[commonStyles.normalText, { marginTop: 4, fontSize: 11 }]}>
                                {onNotification}
                            </Text>
                            <ToggleButton currentMode={NotificationChange} />
                        </View>
                    </View>
                    <View style={StyleSettingScreen.viewOption}>
                        <View style={StyleSettingScreen.viewTitle}>
                            <View style={StyleSettingScreen.viewIcon}>
                                <FontAwesomeIcon name='apple' size={22} color={'black'} />
                            </View>
                            <MySection label={'Dark Mode'} />
                        </View>
                        <View style={StyleSettingScreen.viewStatus}>
                            <Text style={[commonStyles.normalText, { marginTop: 4, fontSize: 11 }]}>
                                {isDarkMode}
                            </Text>
                            <ToggleButton currentMode={darkModeChange} />
                        </View>
                    </View>
                    <View style={StyleSettingScreen.viewOption}>
                        <View style={StyleSettingScreen.viewTitle}>
                            <View style={StyleSettingScreen.viewIcon}>
                                <MetarialIcon name={'help'} size={22} color={'black'} />
                            </View>
                            <MySection label={'Help Center'} />
                        </View>
                        <View style={StyleSettingScreen.viewStatus}>
                            <View />
                            <MetarialIcon name={'navigate-next'} color={'black'} size={23} />
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <TouchableOpacity style={[commonStyles.btnAccess_dark, { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 11 }]}>
                    <MetarialIcon name={'logout'} size={25} color={'white'} />
                    <Text style={commonStyles.textBtnAccess_dark}>
                        Log Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SettingScreen