import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { commonStyles } from '../../css/styles/CommonStyles'
import { AppStyles } from '../../css/styles/CommonStyles'
import { MetarialIcon } from '../../components/icon/Material'
import { POPPINS_FONT } from '../../css/theme/Theme'
import { SearchTextView } from '../../components/SearchView/SearchTextView'
import { dataCategory } from '../../components/CategoryList/data'
import { ListCategory } from '../../components/CategoryList/list'
import { MySection } from '../../components/textinput/AccessComponents'
const Home = () => {
    return (
        <View style={commonStyles.container}>
            <View style={AppStyles.StyleHome.container}>
                <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 50, padding: 6 }}>
                    <MetarialIcon name='menu' color='white' size={23} />
                </TouchableOpacity>
                <View style={{ backgroundColor: '#d2d2d2', borderRadius: 50, padding: 6 }}>
                    <MetarialIcon name='face' color='black' size={30} />
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontFamily: POPPINS_FONT.bold, fontSize: 25, color: 'black' }}>
                    Welcome,
                </Text>
                <Text style={{ fontFamily: POPPINS_FONT.bold, fontSize: 20, marginTop: -8 }}>
                    Our Fashions App
                </Text>
            </View>
            <View style={AppStyles.StyleHome.viewSearchBar}>
                <SearchTextView width={290} borderWidth={0} backGroundColor={'#eeeeee'} />
                <TouchableOpacity style={AppStyles.StyleHome.touchCapture}>
                    <MetarialIcon name='menu' color='white' size={23} />
                </TouchableOpacity>
            </View>
            <View style={AppStyles.StyleHome.cardViewShadow}>
                <View style={{ backgroundColor: '#eeeeee', borderRadius: 10 }}>
                    <Image style={{ width: 80, height: 80 }} source={require('../../assets/images/giay.png')} />
                </View>
                <View style={{ width: '50%' }}>
                    <Text style={{ fontFamily: POPPINS_FONT.bold, color: 'black' }}>Axel Arigato</Text>
                    <Text style={{ fontFamily: POPPINS_FONT.regular }}>Clean triple Sneakers</Text>
                    <Text style={{ fontFamily: POPPINS_FONT.bold, color: 'black' }}>$245.00</Text>
                </View>
                <View style={{}}>
                    <TouchableOpacity style={{ backgroundColor: 'black', borderRadius: 10, padding: 6 }}>
                        <MetarialIcon name='navigate-next' color='white' size={23} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{ marginTop: 25 }}>
                <MySection label={'Categories'} />
                <ScrollView horizontal={true} overScrollMode='never'
                showsHorizontalScrollIndicator={false} style={{overflow:'visible'}}>
                    <ListCategory data={dataCategory}
                        style={{ flexDirection: 'row', marginTop: 5, marginLeft: -3 }} />
                </ScrollView>
            </View>
        </View>
    )
}

export default Home