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

    <SearchScreen/>
  )
}
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text>
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

// const App: () => Node = () => {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView
//         contentInsetAdjustmentBehavior="automatic"
//         style={backgroundStyle}>
//         <Header />
//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//           <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.js</Text> to change this
//             screen and then come back to see your edits.
//           </Section>
//           <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks />
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

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
