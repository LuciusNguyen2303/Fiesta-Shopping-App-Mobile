import React, { useState } from "react";
import { Image, StyleSheet, View } from "react-native";

export const Star = ({ count }) => {
    const star = Array.from({ length: count }, (_, index) => index);
    return (
        <View style={{ flexDirection: 'row' }}>
            {star.map((star, index) => (
                <Image key={index} style={style.star} source={require('../../../assets/images/goldstar.png')} />
            ))}
        </View>
    )
}
const style = StyleSheet.create({
    star: {
        width: 20,
        height: 20,
        margin:4
    }
})
