import { View, Text, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { CardStyles } from '../styles'
import { VietTanBankCardStyles } from './styles'
import { commonStyles } from '../../../css/styles/CommonStyles'
import cutStringIntoEqualParts from '../AccountNumArgo'

const VietTanBankCard = ({ name, accountNum, expiredDate, style, front, CVV }) => {
  return (
    <View>
      <ImageBackground
        borderRadius={10}
        source={require('../Background/VietTanBank.png')}
        style={[CardStyles.CardViewStyle, style]}>

        {
          front ? (
            <>
              <View style={[CardStyles.textStyle, VietTanBankCardStyles.ViewInfo]}>
                <Text
                  style={[commonStyles.normalText, VietTanBankCardStyles.text, { color: 'white', fontStyle: 'italic' }]}
                >Account Number</Text>
                <Text
                  style={[CardStyles.accountNumStyle, VietTanBankCardStyles.Info]}
                >{accountNum}</Text>
                <Text
                  style={[commonStyles.normalText, VietTanBankCardStyles.text, { color: 'white', fontStyle: 'italic' }]}
                >Name</Text>
                <Text
                  style={[CardStyles.nameStyle, VietTanBankCardStyles.Info]}
                >{name}</Text>
              </View>
              <Text
                style={[CardStyles.expiredDateStyle, VietTanBankCardStyles.expiredDateStyle, VietTanBankCardStyles.text]}
              >Expired Date: {expiredDate}</Text>
            </>
          ) : (
            <View style={CardStyles.CardViewStyle}>
              <View style={[CardStyles.lineCardBack, CardStyles.textStyle, { backgroundColor: 'white' }]}>
                <Text
                  style={[CardStyles.accountNumStyle, { color: 'black', textAlign: 'center', fontSize: 24 }]}
                >{cutStringIntoEqualParts(accountNum, 4)}</Text>
              </View>

              <View style={[CardStyles.cardBack, CardStyles.expiredDateStyle, { bottom: 5 }]}>
                <Text
                  style={[CardStyles.nameStyle, { marginTop: 1, color: 'white', fontWeight: 'bold', fontStyle: 'italic' }]}
                >CVV:</Text>
                <Text
                  style={[CardStyles.nameStyle, CardStyles.textStyle, { marginLeft: 5, alignSelf: 'center', }]}
                >{CVV}</Text>
              </View>

            </View>
          )
        }
      </ImageBackground>
    </View>
  )
}

export default VietTanBankCard