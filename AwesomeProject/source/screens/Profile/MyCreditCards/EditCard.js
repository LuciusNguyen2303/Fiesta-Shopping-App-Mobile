import { View, Text, TouchableOpacity, TextInput, Dimensions, SafeAreaView, KeyboardAvoidingView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import DatePicker from 'react-native-date-picker'
import { styleCoProdScreen } from '../../CategoryofProductScreen/Styles'
import { commonStyles } from '../../../css/styles/CommonStyles';
import CreditCard from '../../../components/CreditCard/CreditCard';
import { cardHeight, titleCardHeight, cardPadding } from './MyCards';

import { MySection } from '../../../components/textinput/AccessComponents';
import { FontAwesomeIcon } from '../../../components/icon/FontAwesome';
import cutStringIntoEqualParts from '../../../components/CreditCard/AccountNumArgo';
const EditCard = () => {

    //card info var
    // expired date
    const [date, setDate] = useState(new Date())
    const [dateString, setDateString] = useState("")
    const [isDate, setIsDate] = useState(true)

    const [open, setOpen] = useState(false)

    //name
    const [name, setName] = useState("")
    const [isName, setIsName] = useState(true)

    // account num
    const [accountNum, setAccountNum] = useState("")
    const [isAccountNum, setIsAccountNum] = useState(true)

    //CVV
    const [CVV, setCVV] = useState("")
    const [isCVV, setIsCVV] = useState(true)

    // // check card's info 
    // const [checkingCard, setCheckingCard] = useState(false);

    // Flip card 
    // variables 
    const handleNumberChange = (text) => {
        // Loại bỏ các ký tự không phải là số từ chuỗi text
        const formattedText = text.replace(/[^0-9]/g, '');
       return formattedText;
      };
    const rotate = useSharedValue(0);
    const frontAnimatedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(rotate.value, [0, 1], [0, 180])
        return {
            transform: [
                {
                    rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 })
                }
            ]
        }
    })
    const backAnimatedStyles = useAnimatedStyle(() => {
        const rotateValue = interpolate(rotate.value, [0, 1], [180, 360])
        return {
            transform: [
                {
                    rotateY: withTiming(`${rotateValue}deg`, { duration: 1000 })
                }
            ]
        }
    })
    // Prevent user paste
    const handlePaste = () => {
        // Ngăn chặn hành động paste
        return false;
      };
// check each element by regex



// check empty card element
    const cardValidate = () => {
        if (dateString && name && CVV && accountNum) {
            console.log("Đúng thông tin...", "Điền code ở đấyyyyy.");
            return
        }
        if (!dateString)
            setIsDate(false)

        if (!name)
            setIsName(false)

        if (!CVV)
            setIsCVV(false)

        if (!accountNum)
            setIsAccountNum(false);
        ToastAndroid.show("You must fill in your card's information!!!", ToastAndroid.SHORT)
        return;

    }


    const checkElementinCards = () => {
        if (name.length > 0 && !isName) {
            setIsName(true)

        }
        if (CVV.length > 0 && !isCVV) {
            setIsCVV(true)
        }
        if (dateString.length > 0 && !isDate) {
            setIsDate(true)
        }
        if (accountNum.length > 0 && !isAccountNum) {
            setIsAccountNum(true);
        }
    }
    useEffect(() => {
        checkElementinCards();



        return () => {

        }
    }, [name, accountNum, CVV, dateString])

    return (

        <KeyboardAwareScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps={'always'} style={{ flex: 1 }} >
            <Header></Header>
            <View>

                <Animated.View
                    style={[{
                        transform: [{ scaleX: 0.9, }]

                    },

                    ]}>
                    <CreditCard
                        styleCreditCard={{ borderRadius: 10, marginHorizontal: 20, }}
                        name={""}
                        accountNum={""}
                        expiredDate={""}
                        cardName={'TPBank'}
                        front={true} CVV={""} />

                </Animated.View>
                <Animated.View
                    style={[{ marginTop: -190, backfaceVisibility: 'hidden' }, frontAnimatedStyles]}
                >
                    <CreditCard styleCreditCard={{ margin: 20 }} name={name} accountNum={accountNum} expiredDate={dateString} cardName={'VietzBank'} front={true} CVV={CVV} />

                </Animated.View>
                <Animated.View
                    style={[{ marginTop: -240, backfaceVisibility: 'hidden' }, backAnimatedStyles]}
                >
                    <CreditCard styleCreditCard={{ margin: 20 }} name={name} accountNum={accountNum} expiredDate={dateString} cardName={'VietzBank'} front={false} CVV={CVV} />

                </Animated.View>
            </View >

            <View style={commonStyles.container}>
                <Text style={[commonStyles.normalText, { margin: 10, fontSize: 20, color: 'black', fontWeight: 'bold' }]}>
                    Card Details
                </Text>
                <TextInput
                    keyboardType='decimal-pad'
                    keyboardAppearance='dark'
                    placeholder='Account Number'
                    placeholderTextColor={"#c3c3c3"}
                    onChangeText={(text) => { setAccountNum(handleNumberChange(text)) }}
                    
                    style={[commonStyles.normalText,

                    {
                        fontSize: 18,
                        color: 'black',
                        textAlignVertical: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: !isAccountNum ? 'red' : '#cccccc',
                        borderRadius: 10,
                        padding: 15,
                        margin: 10,

                    }]}

                />
                <TextInput
                    keyboardType='default'
                    keyboardAppearance='dark'
                    placeholder='Account Name'
                    placeholderTextColor={"#c3c3c3"}
                    onChangeText={(text) => { setName(text) }}

                    style={[commonStyles.normalText,

                    {
                        fontSize: 18,
                        color: 'black',
                        textAlignVertical: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: !isName ? 'red' : '#cccccc',
                        borderRadius: 10,
                        padding: 15,
                        margin: 10,

                    }]}

                />
                <View

                    style={[commonStyles.normalText,

                    {
                        flexDirection: 'row',
                        fontSize: 18,
                        color: 'black',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        borderWidth: 1,
                        borderColor: !isDate ? 'red' : '#cccccc',
                        borderRadius: 10,
                        padding: 15,
                        margin: 10,
                    }]}

                >
                    <DatePicker
                        modal
                        mode='date'
                        minimumDate={date}
                        open={open}
                        date={date}
                        onConfirm={(date) => {
                            setOpen(false)
                            console.log(date);
                            setDateString(date.getMonth() + 1 + "/" + date.getFullYear())
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                    <Text
                        style={{
                            fontSize: 18,
                            color: dateString ? 'black' : '#c3c3c3',
                            fontWeight: 'bold'
                        }}
                    >{dateString ? "Exp: " + dateString : "Choose your card's expire date"}</Text>
                    <TouchableOpacity
                        onPress={() => setOpen(!open)}>
                        <FontAwesomeIcon size={25} name={"calendar"} color={"black"} />
                    </TouchableOpacity>
                </View>
                <TextInput
                    keyboardType='decimal-pad'
                    keyboardAppearance='dark'
                    placeholder='CVV'
                    placeholderTextColor={"#c3c3c3"}
                    onChangeText={(text) => { setCVV(text) }}
                    onTouchStart={() => { rotate.value = 1 }}
                    onBlur={() => { rotate.value = 0 }}
                    style={[commonStyles.normalText,

                    {
                        fontSize: 18,
                        color: 'black',
                        textAlignVertical: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderColor: !isCVV ? 'red' : '#cccccc',
                        borderRadius: 10,
                        padding: 15,
                        margin: 10,
                    }]}

                />

                <View style={{ flexDirection: 'row', }}>
                    <TouchableOpacity style={[commonStyles.btnAccess_dark, { width: '50%' }]}
                        onPress={() => { cardValidate() }}
                    >
                        <Text style={commonStyles.textBtnAccess_dark}>Confirm</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[commonStyles.btnAccess_light, { justifyContent: 'center', marginTop: 20, marginLeft: 5, height: 50, width: '50%', elevation: 2, shadowColor: 'black', shadowOffset: { width: 1, height: 1 } }]}>
                        <Text style={[commonStyles.textBtnAccess_light]}>Cancel</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}
const Header = ({ onBack, onCart }) => {
    return (
        <View
        >
            <View style={[styleCoProdScreen.header,]}>

                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => { console.log("back"); onBack(); }}>
                    <Icon name="arrow-back-circle" color={"black"} size={50} />

                </TouchableOpacity>
                <Text style={[commonStyles.normalText, { fontSize: 25, fontWeight: 'bold', color: 'black' }]}>Editing your card</Text>
                <TouchableOpacity style={{ marginRight: 10 }} onPress={() => { console.log("search"); onCart(); }}>
                    <Icon name="cart-outline" color={"black"} size={40} />

                </TouchableOpacity >
            </View>
        </View>
    )
}
export default EditCard