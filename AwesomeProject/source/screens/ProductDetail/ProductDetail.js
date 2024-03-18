import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, StatusBar, ImageBackground, SafeAreaView, Modal, StyleSheet, FlatList } from 'react-native';
import StyleProductDetail from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { StylePublic, commonStyles } from '../../css/styles/public';
import Slideshow from '../../components/SlideShow/Slideshow';
import { styleCoProdScreen } from '../CategoryofProductScreen/Styles';
import Wrapper from '../../components/Wrapper';
import { Dimensions } from 'react-native';
import { styleCart } from '../Cart/styles';
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { POPPINS_FONT } from '../../css/theme/Theme';
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width;

const App = () => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [header, setHeader] = useState(true);
  const [quantity, setQuantity] = useState(1)
  const [color, setColor] = useState({})
  const [size, setSize] = useState({})

  // 
  const [modalPosition, setModalPosition] = useState({ top: 0, right: 0 });
  const [numLines, setNumLines] = useState(3)
  const touchableOpacityRef = useRef(null);

  const measureView = () => {
    if (touchableOpacityRef.current) {
      touchableOpacityRef.current.measure((fx, fy, width, height, px, py) => {
        setModalPosition({ top: py, right: 0 });
        console.log(fx, fy, width, height, px, py);
        setModalVisible(true);
      });
    }
  };
  const lorem_ipsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Leo vel fringilla est ullamcorper eget nulla. Mi bibendum neque egestas congue quisque egestas diam in. In vitae turpis massa sed elementum tempus egestas sed. Sed odio morbi quis commodo odio aenean sed. Aenean et tortor at risus viverra. Quam viverra orci sagittis eu volutpat odio facilisis mauris. Id eu nisl nunc mi ipsum faucibus vitae aliquet nec. Nisi lacus sed viverra tellus in hac habitasse platea. Mauris in aliquam sem fringilla ut. Convallis a cras semper auctor neque vitae tempus quam pellentesque. Ipsum a arcu cursus vitae congue mauris rhoncus.";
  const paragraphLimit = () => {
    if (numLines == 0)
      setNumLines(3)
    else
      setNumLines(0)
  }
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const Header = (props) => {
    return (
      <View


      >
        <View style={[styleCoProdScreen.header, { marginTop: -420 }]}>

          <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => console.log("back")}>
            <Icon name="arrow-back-circle" color={"white"} size={50} />

          </TouchableOpacity>
          <TouchableOpacity style={{ marginRight: 10 }} onPress={() => console.log("search")}>
            <Icon name="cart-outline" color={"white"} size={40} />

          </TouchableOpacity >
        </View>
      </View>
    )
  }
  return (
    <View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[2]}
      >
        <View style={{ flex: 1 }}>
          <Slideshow

            children={Header}
            isAutoSroll={false}
            width={'100%'}
            imagesource={dataImage}
            flex={0.8}
            image
            heightRate={0.7}
            paginationEnabled={true}
          />
          <Header />
          <TouchableOpacity
            activeOpacity={0.8}
            style={[StyleProductDetail.favorite,]}
          >
            <Icon name='heart' size={25} color={'black'} />
          </TouchableOpacity>

        </View>
        <View style={StyleProductDetail.BigView}>
          <Wrapper>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text style={StyleProductDetail.title}>Luciusxury</Text>
                <Text style={StyleProductDetail.regular}>The space</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <StarRatingDisplay
                    rating={4.5}
                    style={{ width: 110, height: 30, alignItems: 'center' }}
                    starSize={20}
                    starStyle={{ width: 10 }}
                  />
                  <Text>
                    ( 259 Reviews )
                  </Text>
                </View>

              </View>
              <View style={{ alignSelf: 'center', alignItems: 'flex-end', marginTop: 8 }}>
                <View style={[StyleProductDetail.quantity, { backgroundColor: '#e4e4e4', }]}>
                  <TouchableOpacity >
                    <Text style={[, { fontFamily: POPPINS_FONT.regular, fontSize: 13, afontSize: 15, margin: 0 }]}>-</Text>
                  </TouchableOpacity>
                  <TextInput style={[, { fontFamily: POPPINS_FONT.regular, fontSize: 14, textAlign: 'center', height: 50, color: 'black', margin: 0 }]} value={"" + quantity} onChangeText={(text) => setQuantity(text)}></TextInput>
                  <TouchableOpacity>
                    <Text style={[, { fontFamily: POPPINS_FONT.regular, fontSize: 13, fontSize: 15, margin: 0 }]}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={[StyleProductDetail.title, { fontSize: 14, marginTop: 15, marginBottom: 10 }]} >Available in stock</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <View>
                <Text
                  style={[StyleProductDetail.title, { fontSize: 17, margin: 10 }]}
                >Size</Text>
                <FlatList
                  horizontal
                  data={dataSize}
                  nestedScrollEnabled={true}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={[StyleProductDetail.itemSizeView, {
                        marginHorizontal: 2,
                        backgroundColor: size._id == item._id ? "gray" : "white",

                      }]}
                      onPress={() => { if (size._id == item._id) setSize({}); else setSize(item); }}
                    >
                      {Object.keys(color).length > 0 && color._id == item._id ?
                        <Icon name='checkmark-outline' size={20} color={'gray'} /> :
                        <Text style={[{ fontFamily: POPPINS_FONT.regular, color: size._id == item._id ? "white" : "gray" }]}>{item.size}</Text>}

                    </TouchableOpacity>)}
                />
              </View>
              <View style={{ alignItems: 'flex-end' }}>
                <Text
                  style={[StyleProductDetail.title, { fontSize: 17, marginVertical: 10 }]}

                >Color</Text>
                {/* <FlatList 
              data={dataSize}
              renderItem={(item)=>(<)}
              /> */}
                <View style={[StyleProductDetail.itemView,]}>
                  <TouchableOpacity
                    activeOpacity={0.5}
                    ref={touchableOpacityRef}
                    style={[StyleProductDetail.colorView, StylePublic.shadow, {
                      backgroundColor: Object.keys(color).length > 0 ? color.color : 'gray'
                    }]}
                    onPress={() => { measureView(this.viewRef) }}
                  ></TouchableOpacity>
                  <Modal
                    transparent={true}
                    animationType="fade"
                    visible={isModalVisible}
                    onRequestClose={toggleModal}
                    style={[StyleProductDetail.modal,
                    ]}
                  >
                    <View style={[StyleProductDetail.modalContent, StylePublic.shadow,
                    {
                      position: 'absolute',
                      top: modalPosition.top - 150, // Điều chỉnh vị trí top để đặt dialog gần nút "Show Dialog"
                      right: 15
                    }
                    ]}>
                      <FlatList
                        style={{}}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            activeOpacity={0.5}
                            style={[StyleProductDetail.colorView, StylePublic.shadow, {
                              backgroundColor: item.color,
                              marginVertical: 4,
                              borderWidth: 0.5,
                              borderColor: '#9b9b9bfe'
                            }]}
                            onPress={() => { if (color._id == item._id) setColor({}); else setColor(item); setModalVisible(false) }}
                          >
                            {Object.keys(color).length > 0 && color._id == item._id ? <Icon name='checkmark-outline' size={20} color={'gray'} /> : <View />}
                          </TouchableOpacity>
                        )}
                        data={dataColor}

                      />
                    </View>
                  </Modal>
                </View>
              </View>
            </View>
            <View>
              <Text style={[StyleProductDetail.title, { fontSize: 17, marginVertical: 10 }]}>Description</Text>
              <View>
                <Text
                  style={[StyleProductDetail.regular, { width: 370 }]}
                  ellipsizeMode='tail'
                  numberOfLines={numLines}
                >
                  {lorem_ipsum}

                </Text>
                {numLines == 3 && <Text
                  onPress={() => paragraphLimit()}
                  style={[StyleProductDetail.regular, {}]}>See more</Text>}

                {numLines == 0 && <Text
                  onPress={() => paragraphLimit()}
                  style={[StyleProductDetail.regular, {}]}>See less</Text>}
              </View>
            </View>

          </Wrapper>
        </View>

       
      </ScrollView>
      <View style={{position:'absolute',bottom:0}}>
      <Wrapper>
          <View style={[StyleProductDetail.addCartView, {}]}>
            <View>
              <Text style={[StyleProductDetail.regular, { color: '#d1c8c8' }]}>Total Price</Text>
              <Text style={[StyleProductDetail.title, { color: '#000000' }]}>$245.00</Text>
            </View>
            <TouchableOpacity 
            style={[
              commonStyles.btnAccess_dark
              ,{
              backgroundColor:'black',
              width:220,
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              padding:10
            }]}
            >
              <Icon name='cart-outline' size={30} color={"white"}/>
              <Text style={[StyleProductDetail.title, { color: '#ffffff' }]}>Add to cart</Text>
            </TouchableOpacity>      
          </View>
        </Wrapper>
      </View>
    </View>
  );
};
export const dataImage = [
  {
    _id: 0,
    image: 'https://w0.peakpx.com/wallpaper/975/501/HD-wallpaper-galaxy-pink-purple-thumbnail.jpg'
  },
  {
    _id: 1,

    image: 'https://wallpapers.com/images/hd/best-samsung-galaxy-g1peamh755qcrglx.jpg'
  }, {
    _id: 2,

    image: 'https://w.forfun.com/fetch/95/95ca17243a31b21dad06e6ef6c35e6e6.jpeg'
  }
]

export const dataColor = [
  {
    _id: 0,
    color: '#0b0269'
  },
  {
    _id: 1,

    color: '#25139a'
  }, {
    _id: 2,

    color: '#b8a916'
  }, {
    _id: 3,

    color: ''
  }, {
    _id: 4,

    color: '#ffffff'
  }, {
    _id: 5,

    color: '#ffe700'
  }, {
    _id: 6,

    color: '#ed7d31'
  }, {
    _id: 7,

    color: '#685073'
  }
]
export const dataSize = [
  {
    _id: 0,
    size: 'S'
  },
  {
    _id: 1,
    size: 'M'
  }, {
    _id: 2,
    size: 'L'
  }, {
    _id: 3,
    size: 'XL'
  }, {
    _id: 4,
    size: 'XXL'
  }
]


export default App;
