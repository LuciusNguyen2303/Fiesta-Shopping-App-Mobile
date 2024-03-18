import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import Item from './Item'

const ProductList1 = (props) => {
  const {header}=props;
  const [column, setcolumn] = useState(2)
  return (
      <FlatList
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={header}
      nestedScrollEnabled={true}
      data={data}
      numColumns={column}
      renderItem={({item})=>(<Item itemData={item}/>)}
      >

      </FlatList>
  )
}
export const data=[
  {
    _id:0,
    image:'http://www.shutterstock.com/image-photo/art-portrait-woman-black-turtleneck-600nw-2313398105.jpg',
    designer:'The Orders',
    name:'Something ...',
    price:1000
  }, {
    _id:1,
    image:'http://www.shutterstock.com/image-photo/art-portrait-woman-black-turtleneck-600nw-2313398105.jpg',
    designer:'The Orders',
    name:'Something ...',
    price:1000
  }, {    
    _id:2,
    image:'http://www.shutterstock.com/image-photo/art-portrait-woman-black-turtleneck-600nw-2313398105.jpg',
    designer:'The Orders',
    name:'Something ...',
    price:1000
  }, {
    _id:3,
    image:'http://www.shutterstock.com/image-photo/art-portrait-woman-black-turtleneck-600nw-2313398105.jpg',
    designer:'The Orders',
    name:'Something ...',
    price:1000
  },
  {
    _id:4,
    image:'http://www.shutterstock.com/image-photo/art-portrait-woman-black-turtleneck-600nw-2313398105.jpg',
    designer:'The Orders',
    name:'Something ...',
    price:1000
  },{
    _id:5,
    image:'http://www.shutterstock.com/image-photo/art-portrait-woman-black-turtleneck-600nw-2313398105.jpg',
    designer:'The Orders',
    name:'Something ...',
    price:1000
  }
]
export default ProductList1