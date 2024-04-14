import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import { BIDVCardStyles } from './styles'
import { CardStyles } from '../styles'
import { commonStyles } from '../../../css/styles/CommonStyles'
import { Animated } from 'react-native'
import cutStringIntoEqualParts from '../AccountNumArgo'
const BIDVCard = ({ name, accountNum, expiredDate, style, front, CVV }) => {


  return (
    <ImageBackground
      borderRadius={10}
      source={require('../Background/BIDV.png')}
      style={[CardStyles.CardViewStyle, style]}>
      {
        front ? (
          <>
            <View style={[CardStyles.textStyle, BIDVCardStyles.ViewInfo]}>
              <Text
                style={[commonStyles.normalText, { color: 'white', fontStyle: 'italic' }]}
              >Account Number</Text>
              <Text
                style={[CardStyles.accountNumStyle, BIDVCardStyles.Info]}
              >{cutStringIntoEqualParts(accountNum,5)}</Text>
              <Text
                style={[commonStyles.normalText, { color: 'white', fontStyle: 'italic' }]}
              >Name</Text>
              <Text
                style={[CardStyles.nameStyle, BIDVCardStyles.Info]}
              >{name}</Text>
            </View>
            <Text
              style={[CardStyles.expiredDateStyle]}
            >Expired Date: {expiredDate}</Text>
          </>
        ) : (
          <View style={CardStyles.CardViewStyle}>
            <View style={[CardStyles.lineCardBack,CardStyles.textStyle, { backgroundColor: 'white' }]}>
              <Text
                style={[CardStyles.accountNumStyle,{padding:accountNum?0:10,color:'black',textAlign:'center',fontSize:24}]}
              >{cutStringIntoEqualParts(accountNum,4)}</Text>
            </View>

            <View style={[CardStyles.cardBack, CardStyles.expiredDateStyle, { bottom: 5 }]}>
              <Text
                style={[CardStyles.nameStyle, { paddingBottom:CVV?0:10,marginTop: 1, color: 'white', fontWeight: 'bold', fontStyle: 'italic' }]}
              >CVV:</Text>
              <Text
                style={[CardStyles.nameStyle, CardStyles.textStyle, { marginLeft: 5, alignSelf: 'center', }]}
              >{CVV}</Text>
            </View>

          </View>
        )
      }
    </ImageBackground>
  )
}

export default BIDVCard;