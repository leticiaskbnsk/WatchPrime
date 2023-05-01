import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

const ProfileScreen = ({ navigation }) => {
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
              color: '#666'
            }}
          >
            PERFIL 
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
        >
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              textAlign: 'center',
              fontWeight: 'bold'
            }}
          >
            Personalizar
          </Text>
          <MaterialIcons
            name="personalize"
            size={20}
            color={'#fff'}
            style={{ marginRight: 5 }}
          />
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
  
  export default ProfileScreen