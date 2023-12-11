import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../../constants'
import { AppButton } from '../../../component/appcomponent'

const LastScreen = ({ navigation }) => {
    return (
        <View>
            <Image
                style={styles.headerImg}
                source={images.cloudBgc} />
            <View
                style={{ top: "15%", gap: 40 }}>
                <View style={{ justifyContent: "center", alignItems: "center", gap: 3 }} >
                    <Text style={styles.headertext} >Allow tracking for more relevant event</Text>
                    <Text style={styles.descriptionText} >Your account has been created successfully, now create you event and manage </Text>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center", }} >
                    <AppButton title="Create Event" style={{ width: "50%" }} />
                </View>
                <TouchableOpacity
                    onPress={() => navigation.replace("Home")}
                    style={styles.willdoLate} activeOpacity={0.5} >
                    <Text style={{ color: COLORS.gray, fontSize: SIZES.font, fontWeight: 400 }} >Will do lete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LastScreen

const styles = StyleSheet.create({
    headerImg: {
        width: "100%",
        height: "40%",
        resizeMode: "cover"
    },
    headertext: {
        fontSize: SIZES.xxxLarge,
        fontWeight: "700",
        lineHeight: 32,
        textAlign: "center",
        color: COLORS.black,
        width: "70%",
    },
    descriptionText: {
        width: "80%",
        textAlign: "center",
        fontWeight: "400",
        color: COLORS.dark,
        fontSize: SIZES.font
    },
    willdoLate: {
        justifyContent: "center",
        alignItems: "center"
    }
})