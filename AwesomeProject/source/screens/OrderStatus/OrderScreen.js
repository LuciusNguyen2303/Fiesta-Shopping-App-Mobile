import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { AppStyles } from "../../css/styles/CommonStyles";
import { commonStyles } from "../../css/styles/CommonStyles";
import { MetarialIcon } from "../../components/icon/Material";
import { SearchTextView } from "../../components/SearchView/SearchTextView";
import { MySection } from "../../components/textinput/AccessComponents";
import { POPPINS_FONT } from "../../css/theme/Theme";
import OrderStatusIndicator from "./components/OrderStatusIndicator";
const OrderScreen = () => {
    return (
        <View style={commonStyles.container}>
            <View style={AppStyles.StyleOrderScreen.container}>
                <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 50, padding: 2 }}>
                    <MetarialIcon name='arrow-back' color='white' size={25} />
                </TouchableOpacity>
            </View>
            <View style={AppStyles.StyleOrderScreen.viewSearchBar}>
                <SearchTextView width={290} />
                <TouchableOpacity style={AppStyles.StyleOrderScreen.touchCapture}>
                    <MetarialIcon name='party-mode' size={27} color='white' />
                </TouchableOpacity>
            </View>
            <View style={AppStyles.StyleOrderScreen.cardViewShadow}>
                < View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <MetarialIcon name='payment' size={32} color='black' />
                    <View style={{ width: 220 }}>
                        <Text style={AppStyles.StyleOrderScreen.textIdOrder}>
                            6556233418090
                        </Text>
                        <Text style={[commonStyles.normalText, { marginTop: -8, fontSize: 13 }]}>
                            Ene Express
                        </Text>
                    </View>
                    <MySection label='transit' />
                </View>
                <View>
                    <OrderStatusIndicator status='shipping' />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <View>
                        <Text style={[commonStyles.normalText, { fontSize: 13 }]}>
                            25 June, 2021
                        </Text>
                        <Text style={AppStyles.StyleOrderScreen.textLocation}>
                            Sacramnto
                        </Text>
                    </View>
                    <View>
                        <Text style={[commonStyles.normalText, { fontSize: 13 }]}>
                            30 June, 2021
                        </Text>
                        <Text style={AppStyles.StyleOrderScreen.textLocation}>
                            Tamil Nadu
                        </Text>
                    </View>
                </View>
            </View>
            <View style={{marginTop:20}}>
                <MySection label='Order List' />
            </View>
        </View >
    )
}
export default OrderScreen