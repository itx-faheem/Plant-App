import React, { useRef, useState } from 'react';
import {
    View, Text,
    TouchableOpacity,
    Image, Dimensions,
    StyleSheet
} from 'react-native';
import { AppButton } from '../../../../../component/appcomponent';
import { COLORS, SIZES, icons } from '../../../../../constants';
import InvitQRcode from "./InvitQRcode";

const heightDimensions = Dimensions.get('window').height;

const QrCode = ({ navigation, onPress, bref }) => {
    const bottomSheetRef = useRef(null);
    const [showQRCode, setShowQRCode] = useState(false); 

    const handlePress = () => {
        setShowQRCode(true);
        bottomSheetRef.current?.expand()
    };

    return (
        <>
            <View style={styles.container}>
                <View style={styles.qrCodeView}>
                    <View style={styles.textContainer}>
                        <Text style={styles.title}>Invite via link or QR code</Text>
                    </View>
                    <View style={styles.qrCodeTextContainer}>
                        <View style={styles.qrCodeTextBox}>
                            <Text style={styles.qrCodeText}>plan.it/927390</Text>
                        </View>
                    </View>
                    <View style={styles.buttonContainer}>
                        <AppButton style={styles.appBtn} title="Share" />
                        <TouchableOpacity
                            onPress={handlePress}
                            style={styles.qrCodeContainer}>
                            <Image style={styles.qrCodeImg} source={icons.Qrimg} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }} >
                    <AppButton onPress={onPress} title="Continue" />
                </View>
            </View>
            {showQRCode && (
                <InvitQRcode bref={bottomSheetRef} />
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        minHeight: heightDimensions - heightDimensions / 1.603,
        justifyContent: 'space-between',
        paddingBottom: 16
    },
    qrCodeView: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.tertiary,
        paddingVertical: 16,
        paddingHorizontal: 14,
        gap: 16,
    },
    textContainer: {
        gap: 16,
    },
    title: {
        color: COLORS.black,
        fontWeight: '600',
        fontSize: SIZES.font,
    },
    qrCodeTextContainer: {
        backgroundColor: COLORS.tertiary,
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 8,
    },
    qrCodeTextBox: {
        fontSize: SIZES.font,
        color: COLORS.black,
        fontWeight: '400',
    },
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 30,
    },
    appBtn: {
        height: 40,
        width: '80%',
    },
    qrCodeContainer: {
        height: 40,
        width: 40,
        borderRadius: 22,
        borderWidth: 1,
        borderColor: COLORS.tertiary,
        alignItems: "center",
        justifyContent: "center",
    },
    qrCodeImg: {
        width: 13,
        height: 13,
        resizeMode: "contain"
    },
    continueButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrCodeText: {
        fontSize: SIZES.font,
        color: COLORS.black,
        fontWeight: "400",
    }
});

export default QrCode;







