import { View, Text, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { CardStyles } from '../styles'
import { VietzBankCardStyles } from './styles'
import { commonStyles } from '../../../css/styles/CommonStyles'
import cutStringIntoEqualParts from '../AccountNumArgo'

const VietzBankCard = ({ name, accountNum, expiredDate, style, front, CVV }) => {
  return (
    <View>
      <ImageBackground
        borderRadius={10}
        source={require('../Background/VIETZBANK.png')}
        style={[CardStyles.CardViewStyle, style]}>
        {
          front ? (
            <>
              <View style={[CardStyles.textStyle, VietzBankCardStyles.ViewInfo]}>
                <Text
                  style={[commonStyles.normalText, VietzBankCardStyles.text, { color: 'white', fontStyle: 'italic' }]}
                >Account Number</Text>
                <Text
                  style={[CardStyles.accountNumStyle, VietzBankCardStyles.Info]}
                >{cutStringIntoEqualParts(accountNum, 4)}</Text>
                <Text
                  style={[commonStyles.normalText, VietzBankCardStyles.text, { color: 'white', fontStyle: 'italic' }]}
                >Name</Text>
                <Text
                  style={[CardStyles.nameStyle, VietzBankCardStyles.Info]}
                >{name}</Text>
              </View>
              <Text
                style={[CardStyles.expiredDateStyle, VietzBankCardStyles.expiredDateStyle, VietzBankCardStyles.text]}
              >Expired Date: {expiredDate}</Text>
            </>
          ) : (
            <View style={CardStyles.CardViewStyle}>
              <View style={[CardStyles.lineCardBack, CardStyles.textStyle, { backgroundColor: 'white',opacity:0.6 }]}>
                <Text
                  style={[CardStyles.accountNumStyle, { color: 'white', textAlign: 'center', fontSize: 24 }]}
                >{cutStringIntoEqualParts(accountNum, 4)}</Text>
              </View>

              <View style={[CardStyles.cardBack, CardStyles.expiredDateStyle, { bottom: 5 }]}>
                <Text
                  style={[CardStyles.nameStyle, { marginTop: 0, color: 'white', fontWeight: 'bold', fontStyle: 'italic' }]}
                >CVV: </Text>
                <Text
                  style={[CardStyles.nameStyle, CardStyles.textStyle, { marginLeft: 5, textAlign: 'center', }]}
                >{CVV}</Text>
              </View>

            </View>
          )
        }
      </ImageBackground>
    </View>
  )
}

export default VietzBankCard