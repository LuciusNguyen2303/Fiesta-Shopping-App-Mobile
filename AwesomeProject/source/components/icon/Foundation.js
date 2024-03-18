import Icon from "react-native-vector-icons/Foundation";
import { View, Text, StyleSheet, Easing } from "react-native";
import { POPPINS_FONT } from "../../css/theme/Theme";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Animated } from "react-native";
import { useEffect, useRef,useCallback } from "react";
export const FoundationIcon = ({ name, size, color }) => {
    {
        return (
            <Icon name={name} color={color} size={size} />
        )
    }
}
export const FocusedFoundationIcon = ({ name, size, color, label, focused }) => {
    const animatedValue = useRef(new Animated.Value(0)).current;
    const spinAnimationValue = useRef(new Animated.Value(0)).current;

    const navigation= useNavigation();
    const otherAnimation = Animated.timing(animatedValue, {
        toValue: 95,
        duration: 400,
        useNativeDriver: false,
    });
    const spin = spinAnimationValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });
    // const animatedRotateValue = useRef(new Animated.Value(0)).current;
    // // animation quay tròn
    const spinAnimation =
        Animated.timing(spinAnimationValue, {
            toValue: 1,
            duration: 300,
            easing: Easing.linear,
            useNativeDriver: false,
        })
        // First set up animation 
        
        // Next, interpolate beginning and end values (in this case 0 and 1)
     
    // animation trượt từ trái sang





    
    // useEffect(() => {
    //     const unsubscribe = navigation.addListener('tabPress', (e) => {
    //         // Prevent default behavior
        
    //         // Do something manually
    //         // ...
    //         console.log("afhaskfhasfkl: " +focused);
    //         const otherAnimation = Animated.timing(animatedValue, {
    //             toValue: 95,
    //             duration: 1000,
    //             useNativeDriver: false,
    //         })
    //         // if (focused === true) {
    //             // Bắt đầu animation khi được focus
    //             otherAnimation.start();
    //         // } else 
    //         // if (focused === false) {
    //             // Dừng animation khi không được focus
    //             // Animated.parallel(otherAnimation).stop();
    //         // }
    //         setTimeout(() => {
                
    //         }, timeout);

    //       });
      
    //       return unsubscribe;
    // }, [navigation])
    
    useFocusEffect(
        useCallback(() => {
            spinAnimation.start();
            otherAnimation.start();
          return () => {
            spinAnimation.reset();
            otherAnimation.reset()
           
    
          };
        }, [])
      );
    return (
        <View style={styles.bgIconFocused}>
            <Animated.View
                style={[styles.viewIconFocused,{transform:[{rotate:spin}]}]}>
                <Icon name={name} color={color} size={size} />
            </Animated.View >
            <Animated.View style={{ zIndex: 0, width: animatedValue, backgroundColor: '#EEEEEE', marginLeft: -35, borderRadius: 30, padding: 5 }}>
                <Text style={styles.label} numberOfLines={1}>{label}</Text>
            </Animated.View>
        </View>
    )
}


export const RenderIcon = ({ name, size, color, label, focused }) => {

    return focused === 'false' ? <FocusedFoundationIcon name={name} size={size} color={color} label={label} /> : <FoundationIcon name={name} size={size} color={color} />

}


const styles = StyleSheet.create({
    viewIconFocused: {
        backgroundColor: 'black',
        width: '45%',
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 50, padding: 8, marginLeft: 0, zIndex: 1
    },
    bgIconFocused: {
        boderRadius: 20, width: 'auto', paddingRight: 5,
        borderRadius: 50, flexDirection: 'row', alignItems: 'center'
    },
    label: {
        fontFamily: POPPINS_FONT.black,
        fontSize: 13,
        paddingTop: 5, paddingRight: 3, marginLeft: 37
    }
})