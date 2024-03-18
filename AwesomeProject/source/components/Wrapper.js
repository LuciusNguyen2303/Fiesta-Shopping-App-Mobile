import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Wrapper = ({children,props}) => {
  return (
    <View style={{paddingHorizontal:15}}>
      {children}
    </View>
  )
}

export default Wrapper