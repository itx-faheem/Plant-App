import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppButton, AppHeader } from '../../../component/appcomponent'
import { COLORS } from '../../../constants'
import { OtpText, OtpFields } from './OtpCodeComponet'

const OtpCode = ({ navigation }) => {
  return (
    <View>
      <AppHeader onPress={() => navigation.goBack()} color={COLORS.black}
        backgroundColor={{ backgroundColor: COLORS.secondary }} />
      <View style={styles.innerContainer} >
        <OtpText />
        <OtpFields />
        <View style={{ gap: 16 }} >
          <AppButton
            onPress={() => navigation.replace("LastScreen")}
            title="Open Email App" style={styles.eamilBtn} />
          <AppButton
            title="Resend" style={[styles.eamilBtn, styles.resendBtn]} color={{ color: COLORS.black }} />
        </View>
      </View>
    </View>
  )
}

export default OtpCode

const styles = StyleSheet.create({
  innerContainer: {
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 14,
    gap: 24
  },
  eamilBtn: {
    width: "100%"
  },
  resendBtn: {
    backgroundColor: "transparent",
    color: COLORS.black,
    borderWidth: 1,
    borderColor: COLORS.tertiary
  }
})

