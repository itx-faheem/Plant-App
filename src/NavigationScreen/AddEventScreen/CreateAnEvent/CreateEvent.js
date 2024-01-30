import {
    StyleSheet, Text, View, ScrollView, KeyboardAvoidingView,
    Dimensions,
    Alert
} from 'react-native'
import React from 'react'
import { AppButton, AppHeader, StepHeader } from '../../../../component/appcomponent'
import { COLORS } from '../../../../constants'
import {
    CreateInput,
    UploadFlay

} from "./CreateEventCompnent";
import { EventinfoHeaderApp } from '../../../../component/appcomponent/AppStepHeaders';

const CreateEvent = ({ navigation }) => {
    const windowHeight = Dimensions.get("screen").height * 2;

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
                flexGrow: 1,
                justifyContent: "center",
                minHeight: windowHeight - windowHeight / 2.2,
            }}>

            <>
                <AppHeader title="Create An Event" color={COLORS.black} onPress={() => navigation.goBack()} />
                {/* <EventinfoHeaderApp /> */}
                <StepHeader />
                <UploadFlay />
                <CreateInput
                    onPress={() => navigation.navigate("Delegates")}
                />
            </>
        </ScrollView>
    )
}

export default CreateEvent;