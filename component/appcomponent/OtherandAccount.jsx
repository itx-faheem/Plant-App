import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'

const OtherandAccount = ({accoutAndOther}) => {
  return (
    <View 
    style={{
      paddingVertical:10,
      paddingHorizontal:14,
      backgroundColor:COLORS.secondary
    }}
     >
      <Text style={{
        fontSize:SIZES.font,
        color:COLORS.black,
        fontWeight:"500"
      }} >{accoutAndOther}</Text>
    </View>
  )
}

export default OtherandAccount

const styles = StyleSheet.create({})