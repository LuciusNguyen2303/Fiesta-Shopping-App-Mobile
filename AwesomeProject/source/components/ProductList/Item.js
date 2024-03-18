import { View, Text, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import StyleProdList from './StyleProdList'
const Item = ({itemData}) => {
    return (
        <View>
            <View style={StyleProdList.itemView}>
                <ImageBackground style={[StyleProdList.image, {}]} imageStyle={{ borderRadius: 30 }} source={{ uri: itemData.image }}>
                    <View style={{ backgroundColor: 'white', borderRadius: 50, width: 30, height: 30, justifyContent: 'center', position: 'absolute', top: 10, right: 10 }}>
                    <TouchableOpacity activeOpacity={0.8}>
                        <Icon name='heart-circle' color={'black'} size={30} />
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
                <Text style={StyleProdList.boldText}>{itemData.designer}</Text>
                <Text style={StyleProdList.regularText}>{itemData.name}</Text>
                <Text style={StyleProdList.boldText}>`${itemData.price}`</Text>
            </View>

        </View>
    )
}

export default Item