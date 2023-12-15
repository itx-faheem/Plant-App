import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { AppHeader, StepHeader } from '../../../../component/appcomponent'
import { COLORS } from '../../../../constants'
import { InputandBtn } from '../AddDelegatesFolder/DelegatesComponets'
import { ListInvite } from './InvitedFolderComponent'

const Invite = ( {navigation} ) => {
  return (
    <ScrollView>
      <AppHeader backgroundColor={{backgroundColor:COLORS.tertiary}}  color={COLORS.black} 
      onPress={()=>navigation.goBack()}
       title="Invite" />
       <StepHeader style={{backgroundColor:COLORS.tertiary}}  />
       <InputandBtn  title="Send Invites" />
       <ListInvite />
    </ScrollView>
  )
}

export default Invite

const styles = StyleSheet.create({})