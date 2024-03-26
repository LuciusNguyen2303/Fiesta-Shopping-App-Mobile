import React from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { MetarialIcon } from "../icon/Material";
import { commonStyles } from "../../css/styles/CommonStyles";
import { AppStyles } from "../../css/styles/CommonStyles";
import { FONTS } from "../../assets/Constants";
import { POPPINS_FONT } from "../../css/theme/Theme";
export const SearchTextView = ({ height, width, text, borderWidth, backGroundColor }) => {
    return (
        <View style={{borderWidth: borderWidth, borderRadius:30, borderColor: '#bcbcbcff', width:width, flexDirection:'row', alignItems:'center', paddingLeft:20, height:50, backgroundColor: backGroundColor}}>
            <MetarialIcon name='search' size={28} color='black'/>
            <TextInput value={text} placeholder="Search..." style={{fontSize:15, fontFamily:POPPINS_FONT.regular, textAlignVertical:'bottom', width:"80%", paddingLeft:10}}/>
        </View>
    )
}