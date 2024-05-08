import { View, Text, Image, TouchableOpacity, ScollVi, ScrollView } from 'react-native'
import React from 'react'
import { dataChatList } from './data'
import { POPPINS_FONT } from '../../../css/theme/Theme'
const maleAvatar = 'http://ecochicgardens.com/wp-content/uploads/2021/03/avatar-male.png'
const femaleAvatar = 'http://i0.wp.com/gwmga.com/wp-content/uploads/2021/09/female-avatar-1.jpg?fit=500%2C500&ssl=1'
const ChatList = ({ data }) => {
    const checkGender = (userGender) => {
        return userGender === 'male' ? maleAvatar : femaleAvatar
    }
    return (

        <ScrollView
            style={{ overflow: 'visible' }}
            horizontal={false}
            overScrollMode='never'
            showsHorizontalScrollIndicator={false}>
            {
                Object.keys(dataChatList).length > 0 ?
                    dataChatList.map(item =>
                        <View key={item.id} style={{ alignItems: 'center', marginRight: 15 }}>
                            <TouchableOpacity
                                style={{ borderRadius: 100, overflow: 'hidden', borderWidth: 2, borderColor: '#39e862f8', padding: 1.3 }}
                            >
                                <Image style={{ width: 65, height: 65, borderRadius: 100 }} source={{ uri: item.avatar ? item.avatar : checkGender(item.gender) }} />
                            </TouchableOpacity>
                            <Text style={{ textAlign: 'center', fontFamily: POPPINS_FONT.regular, marginTop: 5 }}>
                                {item.name}
                            </Text>
                        </View>)
                    : <View />
            }
        </ScrollView>
    )
}

export default ChatList