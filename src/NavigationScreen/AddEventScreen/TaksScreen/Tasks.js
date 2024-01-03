import { ScrollView, View, } from 'react-native'
import React from 'react'
import { HomeHeaderBar } from '../HomeEventScreen/HomeComponent'
import { CreatedBottomSheetandInputheader } from './SeacondHeader';
import Tasksfile from '../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/Tasksfile';
import { BuysuppliesColl, SetupCollasipble } from './TaskcollapsibleFiles';
const Tasks = () => {

  return (
    <View style={{ flex: 1 }} >
      <HomeHeaderBar />
      <CreatedBottomSheetandInputheader  />
      <Tasksfile />
      <ScrollView showsVerticalScrollIndicator={false} >
        <BuysuppliesColl />
        <SetupCollasipble />
      </ScrollView>
    </View>
  )
}

export default Tasks