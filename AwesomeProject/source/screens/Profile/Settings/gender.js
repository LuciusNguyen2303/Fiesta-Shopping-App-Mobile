import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MetarialIcon } from '../../../components/icon/Material';
import { POPPINS_FONT } from '../../../css/theme/Theme';

const GenderSelection = ({ onGenderChange }) => {
    const [selectedGender, setSelectedGender] = useState(null);

    const handleGenderSelection = (gender) => {
        setSelectedGender(gender);
        // onGenderChange gọi hàm callback và trả giá trị gender
        onGenderChange(gender);
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.genderButton, selectedGender === 'Male' ? styles.selectedButton : null]}
                onPress={() => handleGenderSelection('Male')}>
                    {
                        selectedGender === 'Male' ?
                        <MetarialIcon name={'radio-button-checked'} size={13} color={'white'} />
                        : <MetarialIcon name={'radio-button-off'} size={13} color={'#a9a9a9'} />
                    }
                <Text style={[styles.buttonText, selectedGender === 'Male' ? {color:'white'}: {}]}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.genderButton, selectedGender === 'Female' ? styles.selectedButton : null]}
                onPress={() => handleGenderSelection('Female')}>
                    {
                        selectedGender === 'Female' ?
                        <MetarialIcon name={'radio-button-checked'} size={13} color={'white'} />
                        : <MetarialIcon name={'radio-button-off'} size={13} color={'#a9a9a9'} />
                    }
                <Text style={[styles.buttonText, selectedGender === 'Female' ? {color:'white'}: {}]}>Female</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    genderButton: {
        backgroundColor: '#fffdfd',
        borderRadius: 7,
        marginHorizontal: 5,
        alignItems: 'center',
        borderWidth: 0.3,
        flexDirection: 'row',
        justifyContent:'center',
        paddingLeft:7, paddingRight:7,
        height:32, marginTop:10, marginRight:10
    },
    selectedButton: {
        backgroundColor: 'black',
    },
    buttonText: {
        color: '#a9a9a9',
        paddingLeft:5,
        fontFamily: POPPINS_FONT.medium,
        paddingTop:3,
        fontSize:13

    },
});

export default GenderSelection;