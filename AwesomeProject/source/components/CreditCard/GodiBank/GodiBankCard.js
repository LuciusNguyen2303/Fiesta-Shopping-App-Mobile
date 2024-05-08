import { View, Text, ImageBackground, Switch } from 'react-native'
import React, { useState } from 'react'
import { CardStyles } from '../styles'
import { GodiBankCardStyles } from './styles'
import { commonStyles } from '../../../css/styles/CommonStyles'
import cutStringIntoEqualParts from '../AccountNumArgo'

const GodiBankCard = ({ name, accountNum, expiredDate, style, front, CVV }) => {

  const [isEnabled, setIsEnabled] = useState(false)
  return (
    <View>
      <ImageBackground
        borderRadius={10}
        source={require('../Background/GODIBANK.png')}
        style={[CardStyles.CardViewStyle, style]}>
        {
          front ? (
            <>
              <View style={[CardStyles.textStyle]}>
                <Text
                  style={[commonStyles.normalText, GodiBankCardStyles.text, { color: 'white', fontStyle: 'italic' }]}
                >Account Number</Text>
                <Text
                  style={[CardStyles.accountNumStyle, GodiBankCardStyles.Info]}
                >{cutStringIntoEqualParts(accountNum, 4)}</Text>
                <Text
                  style={[commonStyles.normalText, GodiBankCardStyles.text, { color: 'white', fontStyle: 'italic' }]}
                >Name</Text>
                <Text
                  style={[CardStyles.nameStyle, GodiBankCardStyles.Info]}
                >{name}</Text>
              </View>
              <Text
                style={[CardStyles.expiredDateStyle, GodiBankCardStyles.expiredDateStyle]}
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

export default GodiBankCard