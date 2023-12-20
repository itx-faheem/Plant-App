import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../../../../constants'
import { AppButton } from '../../../../../component/appcomponent'

const LinkandQRcode = () => {
    return (
        <View style={{
            paddingVertical: 16,
            paddingHorizontal: 14,
            gap: 16,
        }} >
            <View style={{ justifyContent: "center", alignItems: "center", }} >
                <Image style={{
                    width: 291,
                    height: 291,
                    resizeMode: "cover",
                }} source={images.QRimg} />
            </View>
            <View style={{ gap: 16 }}  >
                <Text style={{ fontSize: SIZES.font, fontWeight: "600", color: COLORS.black }} >Event Link</Text>
                <View style={styles.innertextContainer} >
                    <Text style={{ color: COLORS.black, fontWeight: "500", fontSize: SIZES.font }} >plan.it/927390</Text>
                </View>
            </View>
            <AppButton title="Share" style={{ width: "100%" }} />
        </View>
    )
}

export default LinkandQRcode

const styles = StyleSheet.create({
    innertextContainer: {
        backgroundColor: COLORS.tertiary,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
        height: 48
    }
})