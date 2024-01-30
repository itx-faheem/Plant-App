import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader } from '../../../../../component/appcomponent'
import FAQlogo from './FAQlogo'
import { COLORS } from '../../../../../constants'
import FaqMapData from './FaqMapData'

const FAQFile = ({navigation}) => {
  return (
    <View style={{flex:1}}   >
      <AppHeader 
      color={COLORS.black}
      onPress={()=>navigation.goBack()}
      title="FQA" backgroundColor={{backgroundColor:COLORS.secondary}}  />
      <FAQlogo />
      <FaqMapData />
    </View>
  )
}

export default FAQFile

const styles = StyleSheet.create({})