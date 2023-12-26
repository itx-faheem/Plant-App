import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIcon from "react-native-vector-icons/Entypo";
import { COLORS, icons, images, size } from "../../../../../../constants";
const FinancialHeader = ({ onbackCross }) => {
    return (
        <View style={{
            flexDirection: "row", alignItems: "center", justifyContent: "space-between",
            paddingHorizontal: 16, paddingVertical: 10
        }} >
            <TouchableOpacity
                onPress={onbackCross}
                activeOpacity={0.5}
            >
                <AppIcon color={COLORS.black} name='cross' size={20} />
            </TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center", gap: 20
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                >
                    <Image
                        source={icons.addIcon}
                        style={{
                            width: 16,
                            height: 16,
                            resizeMode: "contain"
                        }}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                >
                    <AppIcon name='dots-three-horizontal' size={20} color={COLORS.black} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FinancialHeader

const styles = StyleSheet.create({})