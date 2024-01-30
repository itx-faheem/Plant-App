import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../../../constants'
import AppButton from "../../../../../component/appcomponent/AppButton";
const LastEventDescription = () => {
    return (
        <View style={{gap:20,marginTop:20, }} >
            <View style={{
                width: "85%",
                paddingHorizontal: 24,
                alignItems: "center", gap: 6

            }} >
                <Text style={styles.creadedName} >Your O-week BBQ rager is created</Text>
                <Text style={styles.creaderDescription} >We have customized feeds according to your account.</Text>
            </View>
            <View
            style={{
                justifyContent:"center",
                alignItems:"center"
            }}
            >
                <AppButton 
                style={{ 
                    backgroundColor:COLORS.white,
                    width: "85%",
                 }}
                 color={{color:COLORS.black}}
                title="View Event" />
            </View>
        </View>
    )
}

export default LastEventDescription

const styles = StyleSheet.create({
    creaderDescription: {
        color: COLORS.white,
        fontWeight: "400",
        fontSize: SIZES.font,
        textAlign: "center"
    },
    creadedName: {
        color: COLORS.white,
        fontWeight: "600",
        fontSize: SIZES.xxxLarge,
        textAlign: "center"
    },
    appInnerBtn: {
        backgroundColor: COLORS.white,
        color: COLORS.black
    }
})