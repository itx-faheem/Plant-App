import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FinancialHeader, Collapfile, Tasksfile } from './AddTaskFinancialFolderComponent'
import { FinancialInput, FinancialPlus } from './AddTaskFinancialFolderComponent/InputFinancialOverView'
import MainBottomOverView from './AddTaskFinancialFolderComponent/BottomComponentOverView/MainBottomOverView'

const AddTaskFileAction = ({ navigation }) => {
    return (
        <ScrollView showsVerticalScrollIndicator={true} >    
            <FinancialHeader onbackCross={() => navigation.goBack()} />
            <Tasksfile />
            <Collapfile />
            <FinancialInput />
            <FinancialPlus />
            <MainBottomOverView />
        </ScrollView>
    )
}

export default AddTaskFileAction

const styles = StyleSheet.create({
})