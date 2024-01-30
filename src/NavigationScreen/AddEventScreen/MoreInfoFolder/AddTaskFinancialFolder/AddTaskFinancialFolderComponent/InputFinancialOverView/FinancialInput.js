import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../../../../../constants'

const FinancialInput = () => {
    return (
        <View style={{ 
            justifyContent: "center", 
            alignItems: "center", 
            flexDirection: "row",
            borderWidth:1,borderColor:COLORS.tertiary,
            backgroundColor:COLORS.white
            }} >
            <View style={styles.innerView}></View>
            <TextInput
                placeholder='Add Task'
                placeholderTextColor={COLORS.gray}
                style={{
                    fontWeight: "400",
                    fontSize: SIZES.medium,
                    width: "80%",
                    paddingVertical: 12,
                    paddingHorizontal: 16,
                }}
            />
            <View style={styles.innerView} ></View>
        </View>
    )
}

export default FinancialInput

const styles = StyleSheet.create({
    innerView: {
        width: 32,
        height: 35
    }
})