import { StyleSheet, Text, View, ScrollView, } from 'react-native'
import React from 'react'
import { AppHeader, StepHeader } from '../../../../component/appcomponent'
import { COLORS } from '../../../../constants'
import { Action, AddBudgetEvent } from './MoreInfoComponent'


const MoreInfo = ({ navigation, }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: COLORS.tertiary }} >
      <AppHeader
        onPress={() => navigation.goBack()}
        color={COLORS.black} title="More Info" backgroundColor={{ backgroundColor: COLORS.secondary }} />
      <StepHeader style={{ backgroundColor: COLORS.secondary }} />
      <AddBudgetEvent />
      <Action
        addtaskaction={() => navigation.navigate("AddTaskFileAction")}
        onPress={() => navigation.navigate("Invite")}
        AddSuppliesPress={() => navigation.navigate("DelegatesSupplies")}
      />
    </ScrollView>
  )
}

export default MoreInfo

const styles = StyleSheet.create({
})