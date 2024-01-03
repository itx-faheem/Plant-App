import { ScrollView, StyleSheet, Text, TextInput, View, Dimensions } from 'react-native'
import React from 'react'
import { AppButton, AppHeader, StepHeader } from '../../../../component/appcomponent'
import { COLORS, SIZES } from '../../../../constants'
import {
    InputandBtn,
    ListItems
} from "./DelegatesComponets";


const Delegates = ({ navigation }) => {
    return (
        <>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{ flex: 1, }}
            >
                <AppHeader
                    onPress={() => navigation.goBack()}
                    title="Add Delegates"
                    color={COLORS.black}
                    backgroundColor={{ backgroundColor: COLORS.secondary }} />
                <StepHeader style={{ backgroundColor: COLORS.secondary }} />
                <InputandBtn  title="Add event delegates" />
                <ListItems
                 onPress={()=>navigation.navigate("MoreInfo")}
                   />
            </ScrollView>
        </>
    );
};


export default Delegates

const styles = StyleSheet.create({
    headerstyle: {
        backgroundColor: COLORS.secondary
    },
})


