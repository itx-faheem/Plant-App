import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ThreeDotBottomSheetHeader from './ThreeDotBottomSheetHeader'
import ThreeDotBottomSheetFotter from './ThreeDotBottomSheetFotter'

const DotThreeBottomComponent = () => {
  return (
    <View>
        <ThreeDotBottomSheetHeader />
        <ThreeDotBottomSheetFotter />
    </View>
  )
}

export default DotThreeBottomComponent

const styles = StyleSheet.create({})