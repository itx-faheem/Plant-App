import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, 
    Dimensions
 } from 'react-native'
import React from 'react'
import { AppButton, AppHeader, StepHeader } from '../../../../component/appcomponent'
import { COLORS } from '../../../../constants'
import { UploadFlay, CreateInput } from './CreateEventCompnent'

const CreateEvent = ({ navigation }) => {
    const windowHeight = Dimensions.get("screen").height*2; 
    // const windowHeight = Dimensions.get("screen").height; 

    console.log(windowHeight, "windowHeight");

    return (
        <ScrollView
        // showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1, justifyContent: "center",
            minHeight: windowHeight - windowHeight /2.23
             }}
            scrollEnabled
            // style={{  flex: 1 }}
            >

            <>
                <AppHeader title="Create An Event" color={COLORS.black} onPress={() => navigation.goBack()} />
                <StepHeader />
                <UploadFlay />
                <CreateInput />
            </>
        </ScrollView>
    )
}

export default CreateEvent;
