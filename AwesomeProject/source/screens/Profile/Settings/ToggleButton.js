import { View, Text, Animated } from 'react-native'
import React, { useState, useRef, useEffect } from 'react'
import { AppStyles } from '../../../css/styles/CommonStyles'
import { commonStyles } from '../../../css/styles/CommonStyles'
import { MetarialIcon } from '../../../components/icon/Material'
import { TouchableOpacity } from 'react-native'
export const ToggleButton = ({ currentMode }) => {
    const [isEnabled, setisEnabled] = useState(false);
    const animatedValue = useRef(new Animated.Value(0)).current;
    const otherAnimation = Animated.timing(animatedValue, {
        toValue: isEnabled === false ? 0 : 13,
        duration: 400,
        useNativeDriver: false,
    });

    const isEnabledHandler = (isEnabled) => {
        currentMode(isEnabled)
        console.log(typeof currentMode);
    }
    // useEffect(() => {
    //     isEnabledHandler(isEnabled)
    
    //   return () => {
        
    //   }
    // }, [isEnabled])
    
    const doneWorkChangeMode = () => {
        otherAnimation.start();
        if (isEnabled === false) {
            setisEnabled(true)
        } else {
            setisEnabled(false)
        }
        isEnabledHandler(isEnabled)

    }
    return (
        <TouchableOpacity
            onPress={doneWorkChangeMode}
            style={{ padding: 2, backgroundColor: 'black', width: 30, borderRadius: 10 }}>
            <Animated.View style={{ marginLeft: animatedValue }}>
                <MetarialIcon name={'fiber-manual-record'} color={'white'} size={13} />
            </Animated.View>
        </TouchableOpacity>
    )
}

