import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatListMianFile, MessagesHeader } from './MessagesComponent'
import { CreatedBottomSheetandInputheader } from '../TaksScreen/SeacondHeader'

const Messages = ({ navigation }) => {
  const handlePress = (item) => {
    navigation.navigate('ChatBox', { item: item });
  }
  return (
    <View>
      <MessagesHeader />
      <CreatedBottomSheetandInputheader />
      <FlatListMianFile
        handlePress={(x) => {
          handlePress(x);
        }}
      />
    </View>
  )
}

export default Messages

const styles = StyleSheet.create({})
