import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppHeader } from '../../../../../component/appcomponent'
import { COLORS } from '../../../../../constants'
import ChangePasswordInputs from './ChangePasswordInputs'

const ChangePassword = ({navigation}) => {
  return (
    <View>
      <AppHeader title="Change Password"  
      backgroundColor={{backgroundColor:COLORS.secondary}}
      onPress={()=>navigation.goBack()}
      color={COLORS.black}
       />
       <ChangePasswordInputs />
    </View>
  )
}

export default ChangePassword

const styles = StyleSheet.create({})