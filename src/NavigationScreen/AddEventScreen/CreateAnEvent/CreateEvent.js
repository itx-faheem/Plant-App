import {
    StyleSheet, Text, View, ScrollView, KeyboardAvoidingView,
    Dimensions,
    Alert
} from 'react-native'
import React from 'react'
import { AppButton, AppHeader, StepHeader } from '../../../../component/appcomponent'
import { COLORS } from '../../../../constants'
// import {  CreateInput } from './CreateEventCompnent'
// import CreataddComponen from './CreataddComponen'

import {
    CreateInput,
    UploadFlay

} from "./CreateEventCompnent";

const CreateEvent = ({ navigation }) => {
    const windowHeight = Dimensions.get("screen").height * 2;

    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
                minHeight: windowHeight - windowHeight / 2.2,
                // alignItems:"center"
                // height:windowHeight
            }}>

            <>
                <AppHeader title="Create An Event" color={COLORS.black} onPress={() => navigation.goBack()} />
                <StepHeader />
                <UploadFlay />
                <CreateInput 
                onPress={()=>navigation.push("Delegates")}
                />

            </>
        </ScrollView>
    )
}

export default CreateEvent;
