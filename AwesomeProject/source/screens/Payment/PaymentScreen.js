import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Wrapper from '../../components/Wrapper'
import StyleProductDetail from '../ProductDetail/styles'
import { StylePublic, commonStyles } from '../../css/styles/public'

import { useNavigation } from '@react-navigation/native';
import { styleCoProdScreen } from '../CategoryofProductScreen/Styles';
import StyleProfile from '../Profile/styles';
import Item from '../../components/Product/RecProductList/Item';
import CodeItem from '../../components/CodeList/Item';
import StyleDeliveryAddressScreen from '../Order/styles';
import HistoryItem from '../../components/HistoryList/HistoryItem';
import { FontAwesomeIcon } from '../../components/icon/FontAwesome';
const PaymentScreen = () => {
    const [paymentMethod, setpaymentMethod] = useState(null)
    const onBack = () => {
        // if (navigation.canGoBack())
        //     navigation.goBack()
        console.log("Back in Delivery Address Screen!");
    }
    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Header
                    onBack={onBack}
                />
                <Wrapper style={{
                    paddingBottom: 50
                }}>
                    <Text style={[
                        commonStyles.title,
                        StyleDeliveryAddressScreen.title,
                        {fontSize:22}
                    ]}>Payment</Text>
                    <View>

                        {
                            typeOfCards.map((item, i) => {
                                const isCheck = item._id === paymentMethod;
                                return (
                                    <TouchableOpacity
                                        onPress={() => setpaymentMethod(item._id)}
                                        key={item._id}
                                        style={[
                                            StyleProfile.shadow,
                                            StyleDeliveryAddressScreen.boxView,
                                            {
                                                borderRadius:20,
                                                elevation: 4,
                                                flexDirection: 'row',
                                                justifyContent: 'space-between',
                                                alignItems: 'center',
                                                backgroundColor: isCheck ? "black" : "white"
                                            }]}
                                    >
                                        <View
                                            style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
                                        >
                                            <View
                                                style={{ padding: 20, width: 60, height: 60, borderRadius: 80, backgroundColor: '#f6f6f6', justifyContent: 'center', alignItems: 'center' }}
                                            >
                                                <Image style={{ width: 50, height: 50, borderRadius: 80, padding: 20 }} source={{ uri: item.image?item.image:"data:image/png;base64,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" }} />

                                            </View>
                                            <Text
                                                style={[
                                                    commonStyles.normalText
                                                    ,
                                                    {
                                                        color: isCheck?"white":"black",
                                                        fontSize: 18,
                                                        fontWeight: 'bold',
                                                        marginLeft: 10,
                                                        
                                                    }]}
                                            >{item.name}</Text>
                                        </View>
                                        <View style={{
                                            height: 20,
                                            width: 20,
                                            borderRadius: 20,
                                            borderColor:isCheck?"white":"black",
                                            borderWidth:1,
                                            backgroundColor: '#000',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }} >
                                          {
                                            isCheck?( <View
                                                style={{
                                                 width:8,
                                                 height:8,
                                                 borderRadius:16,
                                                 backgroundColor:"white"
                                                }}
                                                />):null
                                          }

                                        </View>
                                    </TouchableOpacity>
                                )
                            })
                        }


                        <TouchableOpacity
                            activeOpacity={0.4}
                            style={[

                                StyleDeliveryAddressScreen.boxView,
                                {
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    borderStyle: 'dashed',
                                    borderWidth: 1
                                }]}
                        >
                            <View style={{
                                padding: 10,
                                borderRadius: 20,
                                borderWidth: 0.5,
                                borderColor: 'black',
                                width: 40, height: 40,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <FontAwesomeIcon name={"plus"} size={14} color={"black"} />
                            </View>
                            <Text
                                style={[commonStyles.normalText,
                                {
                                    marginLeft: 10,
                                    color: 'black',
                                    fontSize: 20,
                                    fontWeight: 'bold'
                                }]}
                            >Add card</Text>
                        </TouchableOpacity>
                    </View>

                    <Text style={[commonStyles.title, StyleDeliveryAddressScreen.title, { fontSize: 21, marginVertical: 10 }]}>History</Text>
                    <View>
                        <HistoryItem />
                        <HistoryItem />
                        <HistoryItem />
                        <HistoryItem />
                    </View>

                </Wrapper>

            </ScrollView>

        </View>
    )
}
export const typeOfCards = [
    {
        _id: 0,
        name: "Credit Card",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0yYZr5h2YMi24R0StxFVAtFfrh8XWP-xcJ0duBMwpnw&s"
    },
    {
        _id: 1,
        name: "Paypal",
        image: "https://w7.pngwing.com/pngs/294/895/png-transparent-donation-logo-pinballz-paypal-paypal-icon-blue-donation-logo-thumbnail.png"
    },
    {
        _id: 2,
        name: "Visa",
        image: "https://w7.pngwing.com/pngs/618/512/png-transparent-visa-logo-mastercard-credit-card-payment-visa-blue-company-text.png"
    }, {
        _id: 3,
        name: "Google Pay",
        image: "https://i.pinimg.com/originals/74/65/f3/7465f30319191e2729668875e7a557f2.png"
    }
];
export const Header = ({ onBack }) => {
    return (
        <View
        >
            <View style={[styleCoProdScreen.header, { alignItems: 'flex-start' }]}>

                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => { console.log("back"); onBack(); }}>
                    <Icon name="arrow-back-circle" color={"black"} size={50} />

                </TouchableOpacity>
            </View>
        </View>
    )
}
export default PaymentScreen
