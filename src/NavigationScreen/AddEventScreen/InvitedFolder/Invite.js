import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { AppHeader, StepHeader } from '../../../../component/appcomponent'
import { COLORS } from '../../../../constants'
import { InputandBtn } from '../AddDelegatesFolder/DelegatesComponets'
import { ListInvite, QrCode } from './InvitedFolderComponent'

const Invite = ( {navigation} ) => {
  return (
    <ScrollView
    showsVerticalScrollIndicator={false}
    >
      <AppHeader backgroundColor={{backgroundColor:COLORS.secondary}}  color={COLORS.black} 
      onPress={()=>navigation.goBack()}
       title="Invite" />
       <StepHeader style={styles.stepstyle}  />
       <InputandBtn  title="Send Invites" />
       <ListInvite />
       <QrCode />
    </ScrollView>
  )
}

export default Invite

const styles = StyleSheet.create({
  stepstyle:{
    backgroundColor:COLORS.secondary,
    borderWidth:1,
    borderColor:COLORS.tertiary
  }
})