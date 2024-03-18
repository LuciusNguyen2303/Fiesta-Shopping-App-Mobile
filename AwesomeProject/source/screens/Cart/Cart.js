import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react';
import { styleCoProdScreen } from '../CategoryofProductScreen/Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import Wrapper from '../../components/Wrapper';
import { StylePublic, commonStyles } from '../../css/styles/public';
import { styleCart } from './styles';
import { POPPINS_FONT } from "../../css/theme/Theme";


const Cart = () => {

    const [quantity, setQuantity] = useState(1)
    const Header = (props) => {
        return (
            <View>
                <View style={styleCoProdScreen.header}>

                    <TouchableOpacity onPress={() => console.log("back")}>
                        <Icon name="arrow-back-circle" color={"black"} size={50} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("search")}>

                        <View style={[StylePublic.shadow, { borderRadius: 100, padding: 8 }]}>
                            <Icon name="cart-outline" color={"black"} size={25}>
                            </Icon>
                            <Text style={[styleCart.notifyCart, {}]}>4</Text>

                        </View>
                    </TouchableOpacity >
                </View>
                <Text style={[styleCoProdScreen.title, {}]}>My Cart</Text>


            </View>
        )
    }
    return (
        <Wrapper>
            <Header />


            {/* CART ITEM */}
            <View style={[styleCart.card, {
                borderBottomWidth: 0.5,
                borderColor: '#bebebe'
            }]}>
                <Image style={[styleCart.image, {}]} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj8KGnjRW7Qka52dX7FI_pIM4XLDLIp5HSsj4wBS7nvA&s" }} />
                <View style={[styleCart.para, {}]}>
                    <View style={{}}>
                        <Text style={styleCart.title}>Alexandro Arnold</Text>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={styleCart.regular}>Vadio Oselia Handbag from the USA</Text>
                    </View>
                    <Text style={[styleCart.title, { fontSize: 18, textAlignVertical: 'bottom' }]}>$500</Text>
                </View>
                <View style={[styleCart.quantity, { backgroundColor: '#e4e4e4', }]}>
                    <TouchableOpacity >
                        <Text style={[, { fontFamily: POPPINS_FONT.regular, fontSize: 13, afontSize: 15, margin: 0 }]}>-</Text>
                    </TouchableOpacity>
                    <TextInput style={[, { fontFamily: POPPINS_FONT.regular, fontSize: 14, textAlign: 'center', height: 50, color: 'black', margin: 0 }]} value={"" + quantity} onChangeText={(text) => setQuantity(text)}></TextInput>
                    <TouchableOpacity>
                        <Text style={[, { fontFamily: POPPINS_FONT.regular, fontSize: 13, fontSize: 15, margin: 0 }]}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[StylePublic.card, StylePublic.shadow, { elevation: 3, borderRadius: 7,marginTop:30 }]}>
                <View style={[, {paddingVertical:5, flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={[styleCart.title, { fontSize: 16, textAlignVertical: 'bottom' }]}>Subtotal:</Text>
                    <Text style={[styleCart.title, { fontSize: 16, textAlignVertical: 'bottom' }]}>$500</Text>
                </View>
                <View style={StylePublic.horizonLine}></View>
                <View style={[, {paddingVertical:5, flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={[styleCart.title, { fontSize: 16, textAlignVertical: 'bottom' }]}>Shipping:</Text>
                    <Text style={[styleCart.title, { fontSize: 16, textAlignVertical: 'bottom' }]}>$20</Text>
                </View>
                <View style={StylePublic.horizonLine}></View>
                <View style={[, {paddingVertical:5, flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <Text style={[styleCart.title, { fontSize: 16, textAlignVertical: 'bottom' }]}>BagTotal:</Text>
                    <Text style={[styleCart.title, { fontSize: 16, textAlignVertical: 'bottom' }]}>$520</Text>
                </View>
                <View style={StylePublic.horizonLine}></View>
            </View>
            <TouchableOpacity style={[commonStyles.btnAccess_light,{backgroundColor:'black',marginVertical:10}]}>
                <Text style={[commonStyles.textBtnAccess_dark,{}]}>Proceed to Checkout</Text>
            </TouchableOpacity>
        </Wrapper>
    )
}

export default Cart