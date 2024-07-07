import { View, Text, TouchableOpacity, ScrollView, Alert, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import Wrapper from '../../components/Wrapper'
import StyleProductDetail from '../ProductDetail/styles'
import { StylePublic, commonStyles } from '../../css/styles/public'
import StyleDeliveryAddressScreen from './styles'
import { useNavigation } from '@react-navigation/native';
import { styleCoProdScreen } from '../CategoryofProductScreen/Styles';
import StyleProfile from '../Profile/styles';
import Item from '../../components/Product/RecProductList/Item';
import CodeItem from '../../components/CodeList/Item';
import { useStripe, usePlatformPay, PlatformPayButton, PlatformPay,confirmPayment } from '@stripe/stripe-react-native';
import AxiosInstance from '../../util/AxiosInstance';
const DeliveryAddressScreen = () => {
    // const navigation = useNavigation();
    const { initPaymentSheet, presentPaymentSheet } = useStripe();
    // let paymentIntents = "";
    const [paymentIntents, setPaymentIntents] = useState("")
    const onBack = () => {
        // if (navigation.canGoBack())
        //     navigation.goBack()
        setPaymentIntents("")
        console.log("Back in Delivery Address Screen!");
    }

    // Payment method

    const { isPlatformPaySupported, confirmPlatformPayPayment } = usePlatformPay();

    React.useEffect(() => {
        (async function () {
            if (!(await isPlatformPaySupported({ googlePay: { testEnv: true } }))) {
                Alert.alert('Google Pay is not supported.');
                return;
            }
        })();
        ToastAndroid.show("USEEFFECT", ToastAndroid.SHORT);
    }, []);
    const demoData = {
        "userId": "4654876532sfasfafaf354g6a512",
        "products": [
            {
                "productId": "666144e6e0b48dff98e05191",
                "variationId": "609d6d426d601b15c5f68101",
                "quantity": 20
            },
            {
                "productId": "666144e6e0b48dff98e05191",
                "variationId": "609d6d426d601b15c5f68102",
                "quantity": 20
            }
        ]
    }
    const fetchPaymentIntentClientSecret = async () => {
        // Fetch payment intent created on the server, see above
        const response = await AxiosInstance.post("payment/intent", demoData)



        return response.data;
    };

    const pay = async () => {
        const clientSecret = await fetchPaymentIntentClientSecret();

        const { error } = await confirmPlatformPayPayment(
            clientSecret,
            {
                googlePay: {
                    testEnv: true,
                    merchantName: 'My merchant name',
                    merchantCountryCode: 'US',
                    currencyCode: 'USD',
                    billingAddressConfig: {
                        format: PlatformPay.BillingAddressFormat.Full,
                        isPhoneNumberRequired: true,
                        isRequired: true,
                    },
                },
                
            }
        );

        if (error) {
            Alert.alert(error.code, error.message);
            // Update UI to prompt user to retry payment (and possibly another payment method)
            return;
        }
        Alert.alert('Success', 'The payment was confirmed successfully.');
    };
    const onCheckOut = async () => {
        try {
            let data123 = paymentIntents
            // console.log("CHECK OUTT");
            if (!data123.length > 0) {
                const response = await AxiosInstance.post("payment/intent", demoData)
                data123 = response.data;
                if (response.statusCode !== 200) {
                    console.log("ERROR send intent !!!!");

                } else
                    setPaymentIntents(data123);

            }
            // console.log(!data123.length > 0,"fasdfasafa", paymentIntents,data123);

            const sheet = await initPaymentSheet({
                merchantDisplayName: 'Example, Inc.',
                paymentIntentClientSecret: data123,
                googlePay: {
                    merchantCountryCode: 'US', // Mã quốc gia của thương nhân
                    currencyCode: 'USD', // Mã tiền tệ
                    testEnv: true, // Chế độ thử nghiệm
                    billingAddressRequired: true, // Yêu cầu địa chỉ thanh toán
                    existingPaymentMethodRequired: false,

                } // retrieve this from your server
            });
            if (sheet.error)
                throw sheet.error

            const windowPayment = await presentPaymentSheet()
            if (windowPayment.error)
                throw windowPayment.error

            onCreateOrder()
        } catch (error) {
            console.log("ERROR CHECKOUT:", error.message);
            return
        }
    }
    const onCreateOrder = async () => {
        console.log("CREATEEEEE ORDERRRR");
    }


    return (
        <View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                stickyHeaderIndices={[2]}
            >
                <Header
                    onBack={onBack}
                />
                <Wrapper style={{ paddingBottom: 110 }}>
                    <Text style={[commonStyles.title, StyleDeliveryAddressScreen.title]}>Delivery Address</Text>

                    <View
                        style={[StyleProfile.shadow, StyleDeliveryAddressScreen.boxView, {}]}
                    >
                        <Text
                            style={[commonStyles.normalText, StyleDeliveryAddressScreen.textBoxView]}
                        >
                            Street:
                            <Text
                                style={[commonStyles.normalText, StyleDeliveryAddressScreen.miniTextBoxView]}
                            > 3512 Pearl Street</Text>
                        </Text>
                        <Text
                            style={[commonStyles.normalText, StyleDeliveryAddressScreen.textBoxView]}
                        >
                            City:
                            <Text
                                style={[commonStyles.normalText, StyleDeliveryAddressScreen.miniTextBoxView]}
                            > Nagercoil</Text>
                        </Text>
                        <Text
                            style={[commonStyles.normalText, StyleDeliveryAddressScreen.textBoxView]}
                        >
                            State/city/area:
                            <Text
                                style={[commonStyles.normalText, StyleDeliveryAddressScreen.miniTextBoxView]}
                            > TAmil Nadu</Text>
                        </Text>
                        <Text
                            style={[commonStyles.normalText, StyleDeliveryAddressScreen.textBoxView]}
                        >
                            Zip code:
                            <Text
                                style={[commonStyles.normalText, StyleDeliveryAddressScreen.miniTextBoxView]}
                            > 8870523416</Text>
                        </Text>
                        <Text
                            style={[commonStyles.normalText, StyleDeliveryAddressScreen.textBoxView]}
                        >
                            Country calling code:
                            <Text
                                style={[commonStyles.normalText, StyleDeliveryAddressScreen.miniTextBoxView]}
                            > +91</Text>
                        </Text>
                        <Text
                            style={[commonStyles.normalText, StyleDeliveryAddressScreen.textBoxView]}
                        >
                            Country:
                            <Text
                                style={[commonStyles.normalText, StyleDeliveryAddressScreen.miniTextBoxView]}
                            > India</Text>
                        </Text>
                        <Text
                            style={[commonStyles.normalText, StyleDeliveryAddressScreen.textBoxView]}
                        >
                            Street:
                            <Text
                                style={[commonStyles.normalText, StyleDeliveryAddressScreen.miniTextBoxView]}
                            > 3512 Pearl Street</Text>
                        </Text>
                    </View>
                    <Text style={[commonStyles.title, StyleDeliveryAddressScreen.title, { fontSize: 16, marginVertical: 10 }]}>Product Item</Text>
                    <View>
                        <Item />
                        <Item />
                        <Item />
                        <Item />
                        <Item />

                    </View>
                    <Text style={[commonStyles.title, StyleDeliveryAddressScreen.title, { fontSize: 16, marginVertical: 10 }]}>Code</Text>
                    <View>
                        <CodeItem />

                    </View>
                    <PlatformPayButton
                        type={PlatformPay.ButtonType.Pay}
                        onPress={pay}
                        style={{
                            width: '100%',
                            height: 50,

                        }}
                    />
                </Wrapper>

            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0 }}>
                {/* <Wrapper> */}
                <View style={[StyleProductDetail.addCartView, { width: 400, marginHorizontal: 6 }]}>
                    <View>
                        <Text style={[StyleProductDetail.regular, { color: '#d1c8c8' }]}>Total Price</Text>
                        <Text style={[StyleProductDetail.title, { color: '#000000' }]}>$245.00</Text>
                    </View>
                    <TouchableOpacity
                        style={[
                            commonStyles.btnAccess_dark
                            , {
                                backgroundColor: 'black',
                                width: 220,
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 10
                            }]}
                        onPress={() => onCheckOut()}
                    >
                        {/* <Icon name='cart-outline' size={30} color={"white"} /> */}
                        <Text style={[StyleProductDetail.title, { color: '#ffffff' }]}>Place order</Text>
                    </TouchableOpacity>
                </View>
                {/* </Wrapper> */}
            </View>
        </View>
    )
}
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
export default DeliveryAddressScreen

const data = [
    { name: "gsdfsdf", brand: "guchi", price: 20000 },
    { name: "gsdfsdf", brand: "guchi", price: 20000 },
    { name: "gsdfsdf", brand: "guchi", price: 20000 },
    { name: "gsdfsdf", brand: "guchi", price: 20000 }
]