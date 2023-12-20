import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../../../constants'
import { HeaderNameLastEvent, LastEventDescription } from './LastEventComponent'

const CreatedEvent = () => {
    return (
        <View style={styles.container} >
            <HeaderNameLastEvent />
            <LastEventDescription />
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
        gap:40
    }
})