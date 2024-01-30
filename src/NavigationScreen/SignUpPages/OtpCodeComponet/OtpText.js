import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SIZES } from '../../../../constants'

const OtpText = () => {
    return (
        <View style={{gap:5}} >
            <Text style={styles.headerText} >Enter Verification Code</Text>
            <Text style={styles.dscription} >Enter the 5 digit code we just sent to
                hello@planIt.app & your provided number.
                If you don’t see it,
                check spam.</Text>
        </View>
    )
}

export default OtpText

const styles = StyleSheet.create({
    headerText: {
        fontSize: 24,
        fontWeight: '700',
        lineHeight: 24,
        color: '#000',
    },
    dscription: {
        fontWeight: '400',
        color: '#000',
        fontSize: SIZES.font,
        lineHeight: 24,
        width:"90%"
    }
})