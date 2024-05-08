import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
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
const DeliveryAddressScreen = () => {
    // const navigation = useNavigation();

    const onBack = () => {
        // if (navigation.canGoBack())
        //     navigation.goBack()
        console.log("Back in Delivery Address Screen!");
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
                        <CodeItem/>

                    </View>
                </Wrapper>

            </ScrollView>
            <View style={{ position: 'absolute', bottom: 0 }}>
                {/* <Wrapper> */}
                    <View style={[StyleProductDetail.addCartView, {width:400,marginHorizontal:6}]}>
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