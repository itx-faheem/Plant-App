import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { AppButton, AppHeader, StepHeader } from '../../../../component/appcomponent'
import { COLORS } from '../../../../constants'
import { InputandBtn } from '../AddDelegatesFolder/DelegatesComponets'
import { ListInvite, QrCode } from './InvitedFolderComponent'
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const Invite = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <AppHeader
        backgroundColor={{ backgroundColor: COLORS.secondary }}
        color={COLORS.black}
        onPress={() => navigation.goBack()}
        title="Invite" />
      <StepHeader style={styles.stepstyle} />
      <InputandBtn title="Send Invites" />
      <ListInvite />
      <QrCode
       onPress={() => navigation.navigate("CreatedEvent")}
        />
        
    </ScrollView>
  )
}

export default Invite

const styles = StyleSheet.create({
  stepstyle: {
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: COLORS.tertiary
  }
})