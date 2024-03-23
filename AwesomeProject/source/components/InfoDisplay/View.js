import { View, Text } from 'react-native'
import React from 'react'
import { AppStyles } from '../../css/styles/CommonStyles'
import { commonStyles } from '../../css/styles/CommonStyles'
import { POPPINS_FONT } from '../../css/theme/Theme'
export const InfoDisplayWithLabel = ({label, info}) => {
    return (
        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:5}}>
            <Text style={{fontFamily: POPPINS_FONT.medium, fontSize:16, opacity:0.7}}>{label}</Text>
            <View style={{borderBottomWidth:0.5, width:'68%', borderColor:'#b4b3b3'}}>
                <Text style={[commonStyles.normalText, {color:'black', marginTop:5, paddingLeft:12, fontSize:16}]}>
                    {info}
                </Text>
            </View>
        </View>
    )
}
