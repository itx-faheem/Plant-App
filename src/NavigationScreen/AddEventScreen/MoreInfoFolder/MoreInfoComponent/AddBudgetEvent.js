import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../../../constants'

const AddBudgetEvent = () => {
    return (
        <View style={{ flex: 1, paddingVertical:16,paddingHorizontal:14, gap:16, backgroundColor:COLORS.white }} >
            <Text
                style={{
                    fontSize: SIZES.font,
                    fontWeight: "600",
                    color: COLORS.black
                }}
            >Add budget for event</Text>
            <View
                style={{
                    gap:5
                }}
            >
                <Text
                    style={{
                        fontSize: SIZES.font,
                        fontWeight: "400",
                        color: COLORS.dark
                    }}
                >Event Budget</Text>
                <TextInput
                    style={{
                        fontSize: SIZES.font,
                        fontWeight: "500",
                        color: COLORS.black,
                        borderWidth: 1,
                        borderColor: COLORS.tertiary,
                        width: "100%",
                        borderRadius:8,
                        paddingHorizontal: 16
                    }}
                    placeholder='$300' placeholderTextColor={COLORS.black} />
            </View>
        </View>
    )
}

export default AddBudgetEvent

const styles = StyleSheet.create({})