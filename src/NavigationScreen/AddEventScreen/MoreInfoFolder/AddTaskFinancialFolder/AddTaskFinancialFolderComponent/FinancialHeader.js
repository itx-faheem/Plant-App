import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS, icons, images, size } from "../../../../../../constants";
const FinancialHeader = ({ onbackCross, crossColor, gap, iconColor, tintColor, }) => {
    return (
        <View style={{
            flexDirection: "row", alignItems: "center", justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingVertical: 10
        }}>
            <TouchableOpacity
                onPress={onbackCross}
                activeOpacity={0.5}
            >

                <Entypo color={iconColor || COLORS.black} name="cross" size={20} />

            </TouchableOpacity>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 25, ...gap
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.5}
                >
                    <Image
                        source={icons.addIcon}
                        style={{
                            width: 20,
                            height: 20,
                            resizeMode: "contain",
                            tintColor: COLORS.black,
                            ...tintColor,
                        }} />
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                >
                    <Entypo name='dots-three-horizontal' size={20} color={iconColor || COLORS.black} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default FinancialHeader
