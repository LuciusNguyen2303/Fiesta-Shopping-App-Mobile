import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import BIDVCard from '../components/CreditCard/BIDV/BIDVCard'
import GodiBankCard from '../components/CreditCard/GodiBank/GodiBankCard'
import NBBankCard from '../components/CreditCard/NBBank/NBBankCard'
import TechniBankCard from '../components/CreditCard/TechniBank/TechniBankCard'
import TPBankCard from '../components/CreditCard/TPBank/TPBankCard'
import VietTanBankCard from '../components/CreditCard/VietTanBank/VietTanBankCard'
import VietzBankCard from '../components/CreditCard/VietzBank/VietzBankCard'
import CreditCard from '../components/CreditCard/CreditCard'  
const XXX = () => {
  return (
   <View style={{overflow:'hidden'}}>
     <CreditCard styleCreditCard={{margin:20}}  name={"Nguyen Quang Tuan"} accountNum={"89546562359874"} expiredDate={"18/23"} cardName={'VietzBank'} front={false} CVV={"236"}/>
   </View>
  )
}

export default XXX