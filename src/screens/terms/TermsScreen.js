import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const TermsScreen = ({ navigation }) => {
    return (
      <SafeAreaView
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff'
        }}
      >
        <View
          style={{
            marginTop: 40
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 35,
              color: '#FFFEFEFC'
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vestibulum a ex lectus. Nunc libero massa, viverra id sem ac, sagittis commodo justo.
            Donec hendrerit posuere dolor, a congue purus eleifend feugiat. Aliquam interdum eu purus
            vel vehicula. Nulla facilisi. In hac habitasse platea dictumst. Integer sit amet odio neque.
            Quisque eget erat purus. Nam laoreet orci sem, et fringilla felis pellentesque a.
            Donec accumsan neque a dolor aliquam, id ullamcorper eros elementum. 
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
            Nunc id dui quis felis sodales dignissim. Sed a nunc libero. Nulla feugiat porttitor pellentesque.
            Mauris sit amet bibendum neque. Donec ultrices augue justo, vitae egestas nibh porttitor in.
            Suspendisse potenti. Nullam elementum nisl risus, et gravida quam scelerisque in.
            Quisque elementum blandit consequat. Maecenas porta ante at dui blandit lacinia.
            Fusce augue quam, tempus ac mi sed, egestas tempus nulla. Nam quam nisl, luctus at est ut,
            accumsan interdum velit. Phasellus blandit rutrum dictum. Cras lobortis quis lectus ac cursus.
            Vivamus aliquet dui ut arcu blandit tristique. Praesent ac dolor non nibh efficitur 
            pellentesque sit amet non sem. Suspendisse malesuada quis tellus at laoreet.
            Maecenas et auctor magna. Vestibulum in lectus et turpis posuere cursus.
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#44012C',
            padding: 20,
            width: '90%',
            borderRadius: 10,
            marginBottom: 50,
            flexDirection: 'row',
            justifyContent: 'space-between'
          }}

  export default TermsScreen