import { View, Text, ScrollView } from 'react-native'
import React from 'react'
// import PropTy
const Wrapper = ({children,style}) => {
  // const {style}=props;
  return (
    <View style={[style,{paddingHorizontal:15}]}>
      {children}
      {/* <Text>{style}</Text> */}
    </View>
  )
}
// Wrapper.propTypes = {
//   style: PropTypes.object // Kiểm tra kiểu dữ liệu của style là một object
// };
export default Wrapper