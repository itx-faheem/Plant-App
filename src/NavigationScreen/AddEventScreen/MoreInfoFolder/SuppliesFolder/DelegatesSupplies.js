import { ScrollView, } from 'react-native'
import React from 'react'
import { InputandBtn } from '../../AddDelegatesFolder/DelegatesComponets'
import { AppHeader } from '../../../../../component/appcomponent'
import { COLORS } from '../../../../../constants'
import DelegatesSuppliesList from './DelegatesSuppliesList'

const DelegatesSupplies = ({ navigation }) => {
    return (
        <>
            <ScrollView showsVerticalScrollIndicator={false} >
                <AppHeader
                    onPress={() => navigation.goBack()}
                    color={COLORS.black}
                    backgroundColor={{ backgroundColor: COLORS.secondary }}
                    title="Delegates" />
                <InputandBtn title="Manage event delegates" />
                <DelegatesSuppliesList />
            </ScrollView>
        </>
    )
}

export default DelegatesSupplies
