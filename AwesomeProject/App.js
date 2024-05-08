/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { FONTS } from './source/assets/Constants';






// POPPINS_BLACK: 'PoppinsBlack',
//   POPPINS_BLACK_ITALIC: 'PoppinsBlackItalic',
//     POPPINS_BOLD: 'PoppinsBold',
//       POPPINS_BOLD_ITALIC: 'PoppinsBoldItalic',
//         POPPINS_EXTRA_BOLD: 'PoppinsExtraBold',
//           POPPINS_EXTRA_BOLD_ITALIC: 'PoppinsExtraBoldItalic',
//             POPPINS_EXTRA_LIGHT: 'PoppinsExtraLight',
//               POPPINS_EXTRAL_LIGHT_ITALIC: 'PoppinsExtraLightItalic',
//                 POPPINS_ITALIC: 'PoppinsItalic',
//                   POPPINS_LIGHT: 'PoppinsLight',
//                     POPPINS_LIGHT_ITALIC: 'PoppinsLightItalic',
//                       POPPINS_MEDIUM: 'PoppinsMedium',
//                         POPPINS_MEDIUM_ITALIC: 'PoppinsMediumItalic',
//                           POPPINS_REGULAR: 'PoppinsRegular',
//                             POPPINS_SEMIBOLD: 'PoppinsSemiBold',
//                               POPPINS_SEMIBOLD_ITALIC: 'PoppinsSemiBoldItalic',
//                                 POPPINS_THIN: 'PoppinsThin',
//                                   POPPINS_THIN_ITALIC: 'PoppinsThinItalic',
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { StyleLogin } from './source/css/styles/screens/StyleLogin';
import { LIGHT_MODE } from './source/config/ThemeAction';
import { DARK_MODE } from './source/config/ThemeAction';
import { POPPINS_FONT } from './source/css/theme/Theme';
import UserAccess from './source/screens/access/UserAccess';
import { AppContext, AppContextProvider } from './source/util/AppContext';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './source/util/AppNavigator';
import Login from './source/screens/access/Login';
import SearchScreen from './source/screens/ProductSearch/SearchScreen';
import OrderScreen from './source/screens/OrderStatus/OrderScreen';

import SettingScreen from './source/screens/Profile/Settings/SettingScreen';

import Home from './source/screens/Home/Home';

const App = () => {

  return (

    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </AppContextProvider>

    <Login />
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
