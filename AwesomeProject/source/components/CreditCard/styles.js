import { StyleSheet } from "react-native"
import { POPPINS_FONT } from "../../css/theme/Theme"

export const CardStyles = StyleSheet.create({
    CardViewStyle:{
        height:200,
        width:370,
        justifyContent:'center',
        alignItems:'center'
        ,borderRadius:20,
        margin:20
    },accountNumStyle:{
        color:'white',
        fontFamily:POPPINS_FONT.semibold,
        letterSpacing:2,
        fontSize:19
    },
    nameStyle:{
        color:'white',
        fontFamily:POPPINS_FONT.semibold,
        fontSize:19
    },
    expiredDateStyle:{
        color:'white',
        fontFamily:POPPINS_FONT.semibold,
        textAlign:'center',
        position:'absolute',
        bottom:10,right:130
    },textStyle:{
        justifyContent:'center',
        alignSelf:'center',
    }
})
