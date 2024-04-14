import { StyleSheet, ScrollView, Dimensions, Text, View, Animated, SafeAreaView } from 'react-native'
import React, {useRef, useCallback, useState, useEffect } from 'react'
import CreditCard from '../../../components/CreditCard/CreditCard'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { PanResponder } from 'react-native'


export const cardHeight = 200
export const titleCardHeight = 30
export const cardPadding = 10;
const { height } = Dimensions.get("window");
const isDefault = "5698789a7fsdsdf";
const MyCards = () => {

  const y = useRef(new Animated.Value(0)).current;
    const handleScroll = event => {
    const { contentOffset } = event.nativeEvent;
    const offsetY = contentOffset.y;
    console.log('Giá trị y:', offsetY);
    // Thực hiện các hành động khác dựa trên giá trị của y tại đây
  };

    //  Wallet animation
  // const y = new Animated.Value(0)
  
  return (
    <GestureHandlerRootView >
      <Animated.ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        decelerationRate={'normal'}
        // onScroll={handleScroll}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y }
              }
            }
          ],
          { useNativeDriver: true },
         
        )}
      // pagingEnabled={true}
      // snapToAlignment={1000}
      >
        {/* Card lists  */}
        <View style={{}}>
          {
            cardsItemsUsers.map((item, i) => {
              if (typeof item._id !== "undefined") {



                // Wallet Animation 
                const inputRange = [-cardHeight, 0];
                const outputRange = [
                  cardHeight * i,
                  (cardHeight - titleCardHeight) * -i
                ];
                if (i > 0) {
                  inputRange.push(cardPadding * i);
                  outputRange.push((cardHeight - 180) * i);
                }
                const translateY = y.interpolate({
                  inputRange,
                  outputRange,
                  extrapolate: "clamp",
                });
                return (
                  <Animated.View
                    key={item._id}
                    style={{
                      
                      // zIndex:cardsItemsUsers.length-i,
                      transform: [{ translateY}],
                    }}
                  >
                    <CreditCard

                      name={item.name}
                      cardName={item.cardName}
                      styleCreditCard={{ marginHorizontal: 20,width: i>0?370-((cardsItemsUsers.length-i)*10):0,alignSelf:'center'}}
                      accountNum={item.AccountNum}
                      expiredDate={item.expiredDate}
                      onSwipeable={cardsItemsUsers.length-1==i}
                    />
                  </Animated.View>
                )
              }
            })
          }
        </View>
      </Animated.ScrollView>
    </GestureHandlerRootView>
  )
}

export default MyCards

const styles = StyleSheet.create({
  cardItem: {
    marginHorizontal: 20,
  },
  content: {
    height: height + cardHeight + 50,
    marginTop: 50
  },

})

const cardsItemsUsers = [
  {
    _id: "9w0i2039423424",
    name: "Nguyen Minh Nhat",
    AccountNum: '0213139585423',
    expiredDate: '23/12',
    cardName: "BIDV"
  },
  {
    _id: "4ffagf566216546",
    name: "Nguyen Hong Quang",
    AccountNum: '0213139585423',
    expiredDate: '16/07',
    cardName: "TPBank"
  },
  {
    _id: "97av0i20394vs24",
    name: "Tran Minh Quoc",
    AccountNum: '2659989895643',
    expiredDate: '21/02',
    cardName: "VietzBank"
  },
  {
    _id: "6549879734424ss",
    name: "Nguyen Minh Nhat",
    AccountNum: '0213139585423',
    expiredDate: '23/12',
    cardName: "BIDV"
  },
  {
    _id: "5698789a7fsdsdf",
    name: "Nguyen Hong Quang",
    AccountNum: '0213139585423',
    expiredDate: '16/07',
    cardName: "TPBank"
  },
  {
    _id: "56879789a7sdfaf",
    name: "Tran Minh Quoc",
    AccountNum: '2659989895643',
    expiredDate: '21/02',
    cardName: "VietzBank"
  }
]