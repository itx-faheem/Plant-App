import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, icons } from '../../../../../../constants'
import AppIcon from "react-native-vector-icons/AntDesign";

const Tasksfile = () => {
    return (
        <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal:16,
            paddingVertical:10
        }} >
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap:15
                }}
            >
                <Image 
                style={styles.taskImg}
                 source={icons.Tasks} />
                <Text
                style={{color:COLORS.gray}}
                >Tasks</Text>
            </View>
            <TouchableOpacity activeOpacity={0.5} >
            <AppIcon name='plus' color={COLORS.primary} size={20} />
            </TouchableOpacity>
        </View>
    )
}

export default Tasksfile

const styles = StyleSheet.create({
    taskImg:{
        width:18,
        height:18,
        resizeMode:"contain"
    }
})