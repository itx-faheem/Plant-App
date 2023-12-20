import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../../../../../constants'

const HeaderNameLastEvent = () => {
    return (
        <View style={{ alignItems: "center", paddingHorizontal: 24,gap:40,top:20}} >
            <Image style={{ width: 96, height: 96, resizeMode: "contain" }} source={icons.LastTick} />
            <View style={styles.innerContainer} >
                <View style={{
                    flexDirection: "row",
                    gap: 15,
                    alignItems: "center",
                }} >
                    <Image
                        style={{ width: 48, height: 48, resizeMode: "contain", borderRadius: 5 }}
                        source={icons.eventImg} />
                    <View>
                        <Text style={styles.eventName}>O-week BBQ rager</Text>
                        <Text style={styles.eventDate}>19 Aug 2023</Text>
                    </View>
                </View>
                <View style={{ width: 40, height: 48 }} ></View>
            </View>
        </View>
    )
}

export default HeaderNameLastEvent

const styles = StyleSheet.create({
    innerContainer: {
        backgroundColor: COLORS.white,
        alignItems: "center",
        flexDirection: "row",
        padding: 16,
        borderRadius: 10,
        width: "85%",
        justifyContent: "space-between"
    },
    eventDate: {
        color: COLORS.dark,
        fontSize:SIZES.medium,
        fontWeight: "400"
    },
    eventName:{
        color: COLORS.black,
        fontSize: SIZES.font,
        fontWeight: "600"
    }
})