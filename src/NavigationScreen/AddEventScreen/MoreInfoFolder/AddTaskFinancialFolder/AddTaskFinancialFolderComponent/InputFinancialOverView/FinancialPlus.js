import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../../../../../../../constants'
import AppIcon from "react-native-vector-icons/AntDesign";
const FinancialPlus = () => {
    return (
        <View style={styles.container} >
            <View style={styles.innerContainer} >
                <Image style={styles.iconStyle} source={icons.circularDollar} />
                <Text style={styles.titltext} >Financial Overview</Text>
                {/* <TextInput style={styles.titltext}
                    placeholderTextColor={COLORS.gray}
                    placeholder='Financial Overview'
                /> */}
            </View>
            <TouchableOpacity activeOpacity={0.5} >
                <AppIcon color={COLORS.primary} name='plus' size={20} />
            </TouchableOpacity>
        </View>
    )
}

export default FinancialPlus

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        width: "100%",
        backgroundColor:COLORS.secondary
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
        // gap:10
    },
    iconStyle: {
        height: 20,
        width: 20,
        resizeMode: "contain"
    },
    titltext: {
        fontSize: SIZES.font,
        color: COLORS.gray,
        fontWeight: "500",
        width: "88%",
        paddingHorizontal: 16
    }
})