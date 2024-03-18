import { Dimensions, StyleSheet,SafeAreaView,StatusBar,ImageBackground, View, Text, Image } from 'react-native';
import React from 'react';
import StyleSlideShow from './Styles';
const { width, height } = Dimensions.get('screen');
const SlideItems = props => {
  const { item, widthR, flexH, heightRate, widthRate, styleItem,Children } = props;
  return (
    <SafeAreaView style={{ flex: 1,height: height * heightRate, width: width * widthRate ,
  }}>
    <StatusBar translucent backgroundColor='transparent' />
   
    <ImageBackground
        
        source={{uri:item.image}}
        style={[styleItem ? styleItem : StyleSlideShow.backgroundImage, { width: widthR, flex: flexH }]}      >
        {/* Nội dung bên trong ImageBackground */}
    </ImageBackground>

    </SafeAreaView>
  
  );
};
export default SlideItems;
// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//   },
//   image: {
//     resizeMode: 'contain',
//   },
// });
