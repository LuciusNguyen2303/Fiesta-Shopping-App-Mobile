import { View, Text, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import { CardStyles } from '../styles'
import { TPBankCardStyles } from './styles'
import { commonStyles } from '../../../css/styles/CommonStyles'
import cutStringIntoEqualParts from '../AccountNumArgo'

const TPBankCard = ({ name, accountNum, expiredDate, style, front, CVV }) => {
  return (
    <View>
      <ImageBackground
        borderRadius={10}
        source={require('../Background/TPBANK.png')}
        style={[CardStyles.CardViewStyle, style]}>

        {
          front ? (
            <>
              <View style={[CardStyles.textStyle, TPBankCardStyles.ViewInfo]}>
                <Text
                  style={[commonStyles.normalText, TPBankCardStyles.text, { color: 'white', fontStyle: 'italic' }]}
                >Account Number</Text>
                <Text
                  style={[CardStyles.accountNumStyle, TPBankCardStyles.Info]}
                >{accountNum}</Text>
                <Text
                  style={[commonStyles.normalText, TPBankCardStyles.text, { color: 'white', fontStyle: 'italic' }]}
                >Name</Text>
                <Text
                  style={[CardStyles.nameStyle, TPBankCardStyles.Info]}
                >{name}</Text>
              </View>
              <Text
                style={[CardStyles.expiredDateStyle, TPBankCardStyles.expiredDateStyle, TPBankCardStyles.text]}
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

export default TPBankCard