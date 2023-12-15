import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View, Dimensions, Alert } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../../../../../constants'
import { AppButton } from '../../../../../component/appcomponent'

const QrCode = () => {
    const Dimensionsheight = Dimensions.get("window").height
    return (
        <View style={{ flex: 1, minHeight: Dimensionsheight / 2.82, justifyContent: "space-between", }} >
            <View style={{
                backgroundColor: COLORS.white,
                borderWidth: 1,
                borderColor: COLORS.tertiary,
                paddingVertical: 16,
                paddingHorizontal: 14,
                gap: 16,
                // flex:1
            }} >
                <View style={{ gap: 16 }} >
                    <View>

                        <Text
                            style={{
                                color: COLORS.black,
                                fontWeight: "600",
                                fontSize: SIZES.font
                            }}
                        >Invite via link or QR code</Text>
                    </View>
                    <View style={{
                        backgroundColor: COLORS.tertiary,
                        width: "100%",
                        paddingHorizontal: 16,
                        paddingVertical: 12,
                        borderRadius: 8
                    }}
                    >
                        <Text
                            style={{
                                fontSize: SIZES.font,
                                color: COLORS.black,
                                fontWeight: "400"
                            }}
                        >plan.it/927390</Text>
                    </View>
                </View>

                <View style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between"
                }} >
                    <AppButton
                        style={styles.appBtn}
                        title="Share" />
                    <TouchableOpacity
                    onPress={()=> Alert.alert("Comming Soon")}
                        style={styles.qrcodeContainer} >
                        <Image style={styles.qrcodeImg} source={icons.Qrimg} />
                    </TouchableOpacity>
                </View>


            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }} >
                <AppButton title="Continue" />
            </View>
        </View>
    )
}

export default QrCode

const styles = StyleSheet.create({
    appBtn: {
        height: 40,
        width: "85%"
    },
    qrcodeContainer: {
        height: 40,
        borderWidth: 1,
        width: 40,
        borderColor: COLORS.tertiary,
        justifyContent: "center", alignItems: "center",
        borderRadius: 20
    },
    qrcodeImg: {
        width: 13,
        height: 13,

    }
})