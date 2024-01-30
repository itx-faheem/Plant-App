import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import { COLORS, images } from '../../../../../constants'

const InviteBottomSheetHeader = ({ onClose, bref }) => {
    const handlePress = () => {
        bref.current.close()
    }
    return (
        <View
            style={{
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                padding: 14,
                paddingHorizontal: 16
            }}
        >
            <TouchableOpacity
                onPress={handlePress}
                activeOpacity={0.5}
            >
                <Text style={{
                    backgroundColor: COLORS.white,
                    fontSize: 16,
                    fontWeight: "400",
                    color: COLORS.black
                }} >Cancel</Text>
            </TouchableOpacity>
            <Text style={{
                textAlign: "center", backgroundColor: COLORS.white,
                fontSize: 16,
                fontWeight: "500",
                color: COLORS.black
            }} >Share as QR Code</Text>
            <Text style={{ width: 30, height: 20 }} ></Text>
        </View>
    )
}

export default InviteBottomSheetHeader

const styles = StyleSheet.create({})