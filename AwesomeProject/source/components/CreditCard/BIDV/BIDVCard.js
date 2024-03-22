import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { BIDVCardStyles } from './styles'
import { CardStyles } from '../styles'

const BIDVCard = ({ name, accountNum, expiredDate }) => {
  return (
    <ImageBackground
      borderRadius={10}
      source={require('../Background/BIDV.png')}
      style={[CardStyles.CardViewStyle]}>
      <View style={CardStyles.textStyle}>
        <Text
          style={[CardStyles.accountNumStyle]}
        >0123 5487 9791 2376</Text>
        <Text
          style={[CardStyles.nameStyle]}
        >NGUYEN MINH NHAT</Text>
      </View>
      <Text
        style={[CardStyles.expiredDateStyle]}
      >Expired Date: {"24/11"}</Text>
    </ImageBackground>
  )
}

export default BIDVCard;