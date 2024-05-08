import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import { AppStyles } from '../../css/styles/CommonStyles'
import { commonStyles } from '../../css/styles/CommonStyles'
export const ListCategory = ({ data, style }) => {
    const [categorySelected, setCategorySelected] = useState('');
    return (
        <View style={style}>
            {
                Object.keys(data).length > 0 ?
                    data.map(item =>
                        <TouchableOpacity
                            activeOpacity={1}
                            onPress={() => setCategorySelected(item.id)}
                            style={[
                                AppStyles.StyleSearchScreen.listCat,
                                { backgroundColor: categorySelected === item.id ? 'black' : 'white' }
                            ]}
                            key={item.id}>
                            <Text
                                style={[
                                    commonStyles.normalText,
                                    { color: categorySelected === item.id ? 'white' : 'black' }]}>
                                {item.name}
                            </Text>
                        </TouchableOpacity>) :
                    <View />
            }
        </View>
    )
}
