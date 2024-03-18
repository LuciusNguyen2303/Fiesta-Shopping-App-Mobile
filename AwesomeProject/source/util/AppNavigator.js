import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// screen import form...
import Login from "../screens/access/Login";
import SignUp from "../screens/access/SignUp";
import UserAccess from "../screens/access/UserAccess";
import Home from "../screens/store/Home";
import Profile from "../screens/store/Profile";
import Cart from "../screens/store/Cart";
import Notified from "../screens/store/Notified";
import { AppContext } from "./AppContext";
// screen import form...
const TabNavigator = createBottomTabNavigator();
const StackNavigator = createNativeStackNavigator();
import { FontAwesomeIcon } from "../components/icon/FontAwesome";
import { FoundationIcon, FocusedFoundationIcon } from "../components/icon/Foundation";
const CloneStack = () => {
    return (
        <StackNavigator.Navigator screenOptions={{ headerShown: false }} initialRouteName="UserAccess">
            <StackNavigator.Screen name="UserAccess" component={UserAccess} />
            <StackNavigator.Screen name="Login" component={Login} />
            <StackNavigator.Screen name="SignUp" component={SignUp} />
        </StackNavigator.Navigator>
    )
}

const Tab = () => {
    return (
        <TabNavigator.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor:'white', borderTopLeftRadius:30, 
                    borderTopRightRadius:30, height:70, paddingLeft:30, paddingRight:30
                },
                tabBarIconStyle: {
                    position:'relative',
                    bottom:3,
                    alignItems:'center',
                },
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        return !focused ? <FoundationIcon name='home' size={25} color='black' /> :
                            <FocusedFoundationIcon name='home' size={20} color='white' label='Home' focused={focused} />
                    } else if (route.name === 'Cart') {
                        return !focused ? <FoundationIcon name='shopping-cart' size={25} color='black' /> :
                            <FocusedFoundationIcon name='shopping-cart' size={20} color='white' label='Cart' focused={focused}/>
                    }else if (route.name === 'Profile') {
                        return !focused ? <FoundationIcon name='torso' size={25} color='black' /> :
                            <FocusedFoundationIcon name='torso' size={20} color='white' label='Profile' focused={focused}/>
                    }else if (route.name === 'Notified') {
                        return !focused ? <FoundationIcon name='social-squidoo' size={25} color='black' /> :
                            <FocusedFoundationIcon name='social-squidoo' size={20} color='white' label='Alert' focused={focused} />
                    }
                }
            })}>
            <TabNavigator.Screen name="Home" component={Home} />
            <TabNavigator.Screen name="Cart" component={Cart} />
            <TabNavigator.Screen name="Profile" component={Profile} />
            <TabNavigator.Screen name="Notified" component={Notified} />
        </TabNavigator.Navigator>
    )
}

const AppNavigator = () => {
    const { isLogin } = useContext(AppContext)
    return (
        <>
            {
                isLogin === false ? <Tab /> : <CloneStack />
            }
        </>
    )
}
export default AppNavigator;