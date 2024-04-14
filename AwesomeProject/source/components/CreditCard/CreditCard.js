import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useRef } from 'react'

// Importing card components
import BIDVCard from './BIDV/BIDVCard';
import TechniBankCard from './TechniBank/TechniBankCard';
import TPBankCard from './TPBank/TPBankCard';
import VietzBankCard from './VietzBank/VietzBankCard';
import VietTanBankCard from './VietTanBank/VietTanBankCard';
import NBBankCard from './NBBank/NBBankCard';
import GodiBankCard from './GodiBank/GodiBankCard';
// Import other libraries
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import { FontAwesomeIcon } from '../icon/FontAwesome';
// import card lists
import { cardLists } from './CardLists';

// Card branding suggestion 
/**
* Component gợi ý props.
* @param {{
*    front:true|false,
*    name:string,
*    accountNum:string,
*    expiredDate:string,
*    cardName: "BIDV" | "TechniBank" | "VietTanBank"| "NBBank" | "GodiBank" | "TPBank" | "VietzBank";
* }} props - Props của component.
*/
// 




const CreditCard = ({ name, accountNum, expiredDate, cardName, styleCreditCard, onSwipeable,onLongPress ,front,CVV }) => {
    // Variable in component
    const swipeableRef = useRef(null);


    // Method in cards
    const onCardHandle = () => {
        
    }
    const onDeleteCard = () => {
        console.log("Deleted card ", name, styleCreditCard, "!!!!");
    }
    const onEditCard = () => {
        console.log("Edited card ", name, cardName, "!!!!");

    }
    const onSwipeableClose = () => {
        swipeableRef.current.close();
    }
    // Action Delete
    const renderRightActions = () => (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { onDeleteCard(); onSwipeableClose(); }}
            style={{
                marginLeft: -20,
                backgroundColor: 'black',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 200,
                borderTopRightRadius: 20
                , borderBottomRightRadius: 20
                , marginRight: 20
            }}>
            {/* <Text>Delete</Text> */}

            <FontAwesomeIcon name={"trash"} size={60} color={'white'} />
        </TouchableOpacity>
    );
    const renderLeftActions = () => (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => { onEditCard(); onSwipeableClose(); }}

            style={{
                marginLeft: 20,
                backgroundColor: 'black',
                alignSelf: 'center',
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 100,
                marginRight: -18,
                height: 200,
                borderTopLeftRadius: 20,
                borderBottomLeftRadius: 20
            }}>
            {/* <Text>Edit card</Text> */}
            <FontAwesomeIcon name={"edit"} size={60} color={'white'} />
        </TouchableOpacity>
    );
    // Check info from cards
    const [checkInfoa, setcheckInfo] = useState(false);
    useEffect(() => {

        const checkInfo = () => {
            if (name && accountNum && expiredDate && cardName) {
                setcheckInfo(true)
            }
        }
        checkInfo();

    }, [name, accountNum, expiredDate, cardName])

    return (

        // (checkInfoa == true) ?
            (
                <GestureHandlerRootView
                >

                    <Swipeable
                        ref={swipeableRef}
                        renderRightActions={renderRightActions}
                        renderLeftActions={renderLeftActions}
                        dragOffsetFromLeftEdge={onSwipeable ? Number.MIN_VALUE_FOR_SWIPEABLE_OFFSET : Number.MAX_VALUE_FOR_SWIPEABLE_OFFSET}
                        dragOffsetFromRightEdge={onSwipeable ? Number.MIN_VALUE_FOR_SWIPEABLE_OFFSET : Number.MAX_VALUE_FOR_SWIPEABLE_OFFSET}

                        rightThreshold={100}
                        leftThreshold={100}
                        overshootLeft={false}
                        overshootRight={false}
                        overshootFriction={8}
                        friction={1}

                    >
                        <TouchableOpacity
                          
                            activeOpacity={1} 
                            onLongPress={() => onCardHandle()}
                            >
                            {RenderCardComponent(cardName, name, accountNum, expiredDate,styleCreditCard ,front,CVV)}
                        </TouchableOpacity>
                    </Swipeable>
                </GestureHandlerRootView>
            ) 
            // : <View style={{height:200}}>

            // </View>

    )
}

export default CreditCard;

const RenderCardComponent = (string, name, accountNum, expiredDate,styleCreditCard,front,CVV) => {
    switch (string) {
        case cardLists[0]:
            return (
                <BIDVCard name={name} accountNum={accountNum} expiredDate={expiredDate}  style={styleCreditCard} front={front} CVV={CVV}/>
            )
        case cardLists[1]:
            return (
                <TechniBankCard name={name} accountNum={accountNum} expiredDate={expiredDate} style={styleCreditCard} front={front} CVV={CVV}/>
            )
        case cardLists[2]:
            return (
                <VietTanBankCard name={name} accountNum={accountNum} expiredDate={expiredDate} style={styleCreditCard} front={front} CVV={CVV}/>
            )
        case cardLists[3]:
            return (
                <NBBankCard name={name} accountNum={accountNum} expiredDate={expiredDate} style={styleCreditCard} front={front} CVV={CVV}/>
            )
        case cardLists[4]:
            return (
                <GodiBankCard name={name} accountNum={accountNum} expiredDate={expiredDate} style={styleCreditCard} front={front}  CVV={CVV}/>
            )
        case cardLists[5]:
            return (
                <TPBankCard name={name} accountNum={accountNum} expiredDate={expiredDate} style={styleCreditCard} front={front}  CVV={CVV}/>
            )
        case cardLists[6]:
            return (
                <VietzBankCard name={name} accountNum={accountNum} expiredDate={expiredDate} style={styleCreditCard} front={front} CVV={CVV}/>
            )
        default:
            break;
    }
}
const Number = {
    MAX_VALUE_FOR_SWIPEABLE_OFFSET: 2000000,
    MIN_VALUE_FOR_SWIPEABLE_OFFSET: 0
}
