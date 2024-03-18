import { StyleSheet } from "react-native";
import { POPPINS_FONT } from "../../css/theme/Theme";
const StyleProdList = StyleSheet.create({
  
    // flatlist 


    // item
    itemView: {
        // backgroundColor:'red',
        width: '100%',
        padding: 5,
        margin:5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 165,
        height: 200,
        marginBottom: 10,
    },boldText:{
        fontFamily:POPPINS_FONT.bold,
        fontSize:20,
        color:'black'
    },regularText:{
        fontFamily:POPPINS_FONT.regular
        ,fontSize:16
    }

})
export default StyleProdList;