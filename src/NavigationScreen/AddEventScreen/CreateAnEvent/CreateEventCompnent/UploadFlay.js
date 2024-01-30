import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../../../../../constants'

const UploadFlay = () => {
    return (
        <View style={styles.container}>
            <View style={{ flex: 1, justifyContent: "flex-end" }} >
                <TouchableOpacity style={styles.innerContainer} >
                    <Image style={{ width: 15, height: 15 }} source={icons.photo} />
                    <Text style={styles.textstyle} >Upload Flyer</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default UploadFlay

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.soft,
        height: "25%", paddingVertical: 16,
        paddingHorizontal: 14
    },
    innerContainer: {
        flexDirection: "row", alignItems: "center",
        backgroundColor:COLORS.white,
        width:145,
        height:40,
        justifyContent:"center",
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:100,
        gap:5
    },
    textstyle:{
        fontSize:SIZES.font,
        fontWeight:"600",
        color:COLORS.black
    }

})