/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
} from 'react-native';
import { FONTS } from './source/assets/Constants';
import DeliveryAddressScreen from './source/screens/Order/DeliveryAddressScreen';
import Dialog from './source/components/Dialog/Dialog';
import dialogStyle from './source/components/Dialog/style';
import ProductDetail from './source/screens/ProductDetail/ProductDetail';
import PaymentScreen from './source/screens/Payment/PaymentScreen';
const App = () => {
  
  return (
    // <AppContextProvider>
    //   <NavigationContainer>
    //     <AppNavigator />
    //   </NavigationContainer>
    // </AppContextProvider>
  <PaymentScreen/>
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
