import { View, Text , Image, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { LogBox } from 'react-native';
import StyleProfile from './styles'
import { useTranslation } from 'react-i18next';
import { styleCoProdScreen } from '../CategoryofProductScreen/Styles'
import Wrapper from '../../components/Wrapper';
import Language from './Language/Language';
const Profile = (props) => {
    LogBox.ignoreAllLogs();
    const {navigation}=props;

    const moveToNewScreen =()=>{
        navigation.navigate("Language")
    }
    const {t}=useTranslation();

const [open, setopen] = useState(false)
    return (

        <Wrapper style={{backgroundColor:'#ffffff'}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* HEADER */}
                {/* <View style={styleCoProdScreen.header}>
                    <TouchableOpacity onPress={() => console.log("back")}>
                        <Icon name="arrow-back-circle" color={"black"} size={50} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => console.log("search")} style={{ elevation: 50 }}>
                        <Icon name="settings-outline" color={"black"} size={30} />
                    </TouchableOpacity >
                </View> */}

                {/* PROFILE NAME */}
                <View style={[StyleProfile.card, StyleProfile.shadow, {flexDirection:'row',marginTop:25}]}>
                    <ImageBackground imageStyle={{ borderRadius: 10 }} style={StyleProfile.image} source={{ uri: "https://images.unsplash.com/photo-1514136649217-b627b4b9cfb2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmxhY2slMjBhbmQlMjB3aGl0ZSUyMG1vZGVsfGVufDB8fDB8fHww" }} />
                    <View style={[StyleProfile.Para, {}]}>
                        <Text style={[StyleProfile.boldText, {}]}>FScreation</Text>
                        <Text style={[StyleProfile.regularText, {}]}>Fscreation441@gmail.com</Text>
                    </View>
                </View>


                {/* USER ACCESS*/}

                <View style={[StyleProfile.card, StyleProfile.shadow, {}]}>
                    <TouchableOpacity  activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='person'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>Personal Details</Text>
                        </View>
                        <Icon  style={{marginLeft:110}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='cart'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>My Order</Text>
                        </View>
                        <Icon  style={{marginLeft:170}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='heart'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>My Favourites</Text>
                        </View>
                        <Icon  style={{marginLeft:130}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='home'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>Shipping Address</Text>
                        </View>
                        <Icon  style={{marginLeft:100}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='card'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>My Card</Text>
                        </View>
                        <Icon  style={{marginLeft:175}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='settings'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>Settings</Text>
                        </View>
                        <Icon  style={{marginLeft:175}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity 
                    onPress={()=>setopen(true)}
                    activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='settings'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>{t("language")}</Text>
                        </View>
                        <Icon  style={{marginLeft:150}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>
                    <Language open={open} setOpened={setopen}/>

                </View>
                <View style={[StyleProfile.card, StyleProfile.shadow, {}]}>
                    <TouchableOpacity  activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='alert-circle'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>FAQs</Text>
                        </View>
                        <Icon  style={{marginLeft:200}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='bug'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>Privacy Policy</Text>
                        </View>
                        <Icon  style={{marginLeft:127}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>
                    <TouchableOpacity  activeOpacity={0.8} style={StyleProfile.item}>
                        <View style={StyleProfile.miniItem}>
                            <View style={StyleProfile.iconWrapper}>
                                <Icon size={30} color={"black"} name='log-out'/>
                            </View>
                            <Text style={[StyleProfile.boldText,{fontSize:16,marginLeft:15}]}>Log Out</Text>
                        </View>
                        <Icon  style={{marginLeft:180}} size={25} color={"black"} name='chevron-forward'/>
                    </TouchableOpacity>

                </View>
            </ScrollView>

        </Wrapper>
    )
}

export default Profile