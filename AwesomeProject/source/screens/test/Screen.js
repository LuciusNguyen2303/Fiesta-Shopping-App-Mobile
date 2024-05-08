import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import DatePicker from 'react-native-date-picker'
import { SocialSignInButton } from '../../components/textinput/AccessComponents'
import { formatTime } from '../../components/DatePicker/time'

const Screen = () => {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    const [formattedDate, setFormattedDate] = useState({})
    useEffect(() => {
        const formattedTime = formatTime(date)
        setFormattedDate({
            day: formattedTime.day,
            month: formattedTime.month,
            year: formattedTime.year,
            formattedVNITime: formattedTime.formattedVNITime
        })
        return () => {
        }
    }, [date])

    return (
        <View>
            <TouchableOpacity onPress={() => setOpen(!open)}>
                <SocialSignInButton iconName={'facebook'} iconColor={'#080707'} />
            </TouchableOpacity>
            <View>
                {formattedDate ? <Text>
                    {formattedDate.formattedVNITime}
                </Text> : <Text />}
            </View>
            <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)
                }}
                onCancel={() => {
                    setOpen(false)
                }}
            />
        </View>
    )
}

export default Screen