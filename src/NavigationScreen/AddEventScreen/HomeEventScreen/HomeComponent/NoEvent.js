import { Image, StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images,  } from '../../../../../constants'

const heightDimensions =  Dimensions.get("screen").height
const NoEvent = () => {
    return (
        <View style={styles.container} >
            <Image source={images.Artwork} style={{ width: 111, height: 157 }} />
            <View style={{justifyContent:"center",alignItems:"center", width:"70%",gap:8 }} >
                <Text style={styles.eventTitle} >No Event</Text>
                <Text style={styles.eventDescription} >You haven’t created event yet. click add event button to add new event.</Text>
            </View>
        </View>
    )
}

export default NoEvent

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap:24,
        minHeight:heightDimensions-heightDimensions/2.93
    },
    eventDescription:{
        color: COLORS.gray,
        fontSize:SIZES.medium,
        fontWeight: "400",
        textAlign: "center"
    },
    eventTitle:{
        color:COLORS.gray,
        fontSize:SIZES.xLarge,
        fontWeight:"700",
        textAlign: "center",
        lineHeight:24
    }
})