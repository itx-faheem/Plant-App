import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../../../constants'
import { HeaderNameLastEvent, LastEventDescription } from './LastEventComponent'

const CreatedEvent = () => {
    return (
        <View style={styles.container} >
            <View style={{top:"10%",gap:40, justifyContent:"center",alignItems:"center"}} >
            <HeaderNameLastEvent />
            <LastEventDescription />
            </View>
        </View>
    )
}

export default CreatedEvent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
    }
})