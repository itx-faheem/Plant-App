import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../../../../../constants'
import AppIcon from "react-native-vector-icons/AntDesign";

const Tasksfile = ({ plusePress,backgroundColor, tintColor, style }) => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            paddingVertical: 10,
            ...backgroundColor

        }} >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 15
                }}
            >
                <Image
                    style={{
                        width: 18,
                        height: 18,
                        resizeMode: "contain",
                        ...tintColor
                    }}
                    source={icons.Tasks} />
                <Text
                    style={{ color: COLORS.gray, ...style}}
                >Tasks</Text>
            </View>
            <TouchableOpacity
                onPress={plusePress}
                activeOpacity={0.5} >
                <AppIcon name='plus' color={COLORS.primary} size={20} />
            </TouchableOpacity>
        </View>
    )
}

export default Tasksfile

const styles = StyleSheet.create({
    taskImg: {
      
    }
})