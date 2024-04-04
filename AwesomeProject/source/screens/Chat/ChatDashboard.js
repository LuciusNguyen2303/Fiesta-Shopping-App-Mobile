import { View, Text, TouchableOpacity } from 'react-native'
import { AppStyles } from '../../css/styles/CommonStyles'
import { commonStyles } from '../../css/styles/CommonStyles'
import { MetarialIcon } from '../../components/icon/Material'
import { FoundationIcon } from '../../components/icon/Foundation'
import { FontAwesomeIcon } from '../../components/icon/FontAwesome'
import React from 'react'
import { SearchTextView } from '../../components/SearchView/SearchTextView'
import { MySection } from '../../components/textinput/AccessComponents'
import OnlineList from './components/OnlineList'
import ChatList from './components/ChatList'

const ChatDashboard = () => {
    return (
        <View style={commonStyles.container}>
            <View style={AppStyles.StyleChatDashboard.container}>
                <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 50, padding: 7 }}>
                    <MetarialIcon name='arrow-back' color='white' size={20} />
                </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <MetarialIcon name='notifications-none' color='#3b3b3b' size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <MetarialIcon name='more-vert' color='#3b3b3b' size={25} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <SearchTextView width={'100%'} borderWidth={1} />
            </View>
            <View style={{ marginTop: 20 }}>
                <MySection label={'Activities'} />
                <OnlineList />
            </View>
            <View style={{ marginTop: 20 }}>
                <MySection label={'Messages'} />
                
            </View>
        </View>
    )
}

export default ChatDashboard