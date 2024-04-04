import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    Image
} from 'react-native'
import Slider from '@react-native-community/slider'
import React, { useState } from 'react'
import { AppStyles } from '../../css/styles/CommonStyles'
import { MetarialIcon } from '../../components/icon/Material'
import { commonStyles } from '../../css/styles/CommonStyles'
import { Star } from './components/star'
import { dataRating, dataDaily } from '../../screens/ProductSearch/components/dataCagtegory'
import { dataCategory } from '../../components/CategoryList/data'
import {
    MySection,
    MyTextInput,
    MyTextInputPassword,
    CheckBox,
    SuccesfulSignUpDialog
} from '../../components/textinput/AccessComponents'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
// import data from...

import { FontAwesomeIcon } from '../../components/icon/FontAwesome'
import { ListCategory } from '../../components/CategoryList/list'
// import data from...
const SearchScreen = (props) => {
    const [dataCate, setDataCategory] = useState(dataCategory);
    const [dataDailyy, setDataDailyy] = useState(dataDaily);
    //Radio button...
    const [categorySelected, setCategorySelected] = useState('');
    const [dailySelected, setDailySelected] = useState('');
    const [ratingSelected, setRatingSelected] = useState('')
    //Radio button
    //slider...
    const [selectedPrice, setSelectedPrice] = useState(0)
    //slider
    //rating...
    const [dataRatingSelected, setDataRatingSelected] = useState()
    //rating
    return (
        <View style={commonStyles.container}>
            <View style={AppStyles.StyleSearchScreen.container}>
                <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 50, padding: 2 }}>
                    <MetarialIcon name='arrow-back' color='white' size={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MetarialIcon name='search' color='black' size={30} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20 }}>
                <MySection label='Categories' />
                <ListCategory data={dataCate} style={{flexDirection: 'row', flexWrap: 'wrap', marginTop: 5, marginLeft: -5}}/>
                <View style={{ marginTop: 20 }}>
                    <MySection label='Price Range' />
                    <Slider
                        style={{ width: '100%', height: 10, backgroundColor: 'white', marginTop: 20 }}
                        minimumValue={0}
                        maximumValue={1750}
                        minimumTrackTintColor="#000000"
                        maximumTrackTintColor="#000000"
                        thumbTintColor='#000000'
                        onValueChange={setSelectedPrice}
                    />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', marginLeft: 7, marginTop: 5 }}>
                    <TouchableOpacity>
                        <MetarialIcon name='cached' color='black' size={18} />
                    </TouchableOpacity>
                    <Text style={[commonStyles.title, { color: 'black', fontSize: 15 }]}>
                        ${Math.round(selectedPrice + 0)}
                    </Text>
                    <TouchableOpacity>
                        <MetarialIcon name='cached' color='black' size={18} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 20 }}>
                    <MySection label='Sort By Latest' />
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5, marginLeft: -5 }}>
                        {
                            Object.keys(dataDailyy).length > 0 ?
                                dataDailyy.map(item =>
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        onPress={() => setDailySelected(item.id)}
                                        style={[
                                            AppStyles.StyleSearchScreen.listCat,
                                            { backgroundColor: dailySelected === item.id ? 'black' : 'white' }
                                        ]}
                                        key={item.id}>
                                        <Text
                                            style={[
                                                commonStyles.normalText,
                                                { color: dailySelected === item.id ? 'white' : 'black' }]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>) :
                                <View />
                        }
                    </View>
                </View>
                <View style={{ marginTop: 15 }}>
                    <MySection label='Rating' />
                    <View style={{ marginTop: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View style={{ marginLeft: -6 }}>
                            <Star count={5} />
                            <Star count={4} />
                            <Star count={3} />
                            <Star count={2} />
                            <Star count={1} />
                        </View>
                        <View style={{ height: '100%' }}>
                            {
                                Object.keys(dataRating).length > 0 ?
                                    dataRating.map(item =>
                                        <TouchableOpacity
                                            onPress={() => setRatingSelected(item.id)}
                                            activeOpacity={1}
                                            style={[
                                                { width: 15, height: 15, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginTop: 12 },
                                                ratingSelected === item.id ?
                                                    { backgroundColor: 'black' } : { backgroundColor: '#e8e8e8' }
                                            ]}
                                            key={item.id}>
                                            {
                                                ratingSelected === item.id ?
                                                    <FontAwesomeIcon name='circle' size={7} color='white' /> : <View />
                                            }
                                        </TouchableOpacity>
                                    )
                                    : <View />
                            }
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 40 }}>
                <TouchableOpacity style={commonStyles.btnAccess_dark}>
                    <Text style={commonStyles.textBtnAccess_dark}>
                        Apply
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default SearchScreen