import {
    StyleSheet, Text, View, Image, ImageBackground
} from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images } from '../../../constants'
import { AppButton } from "../../../component/appcomponent";

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground
                source={images.Background}
                resizeMode="cover"
                style={styles.bgcImg}
            >
                <View style={styles.wrapper} >
                    <View style={{ gap: 16, alignItems: "center", justifyContent: "center" }}>
                        <Image source={icons.LogoWhiteColor} style={{ width: 176, height: 48 }} />
                        <Text style={{ color: COLORS.white, fontSize: SIZES.font }} >You want to talk logistics?</Text>
                    </View>
                    <View style={{ justifyContent: "center", alignItems: "center", gap: 12 }} >
                        <AppButton title="Login" style={{ width: "85%", backgroundColor: COLORS.white }} color={{ color: COLORS.primary }} onPress={() => navigation.navigate("Login")} />
                        <AppButton title="Get Started" style={{ width: "85%", backgroundColor: "transparent", borderWidth: 1, borderColor: COLORS.tertiary }} onPress={() => navigation.navigate("SignUp")} />
                    </View>
                    <View style={{ alignItems: "center" }} >
                        <Text style={{ width: "85%", textAlign: "center", fontSize: SIZES.medium, color: COLORS.white }} >By signing up you agree to the User Notice and Privacy policy</Text>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default WelcomeScreen;

const styles = StyleSheet.create({
    bgcImg: {
        flex: 1,
    },
    wrapper: {
        gap: 32,
        justifyContent: "center",
        top: "18%"
    },
    profileImg: {
        width: "40%",
        height: 40,
    },
    getStartedBtn: {
        backgroundColor: "transparent",
        borderColor: COLORS.tertiary,
        borderWidth: 1,
    },
    disclaimerText: {
        color: COLORS.white,
        fontSize: SIZES.medium,
        lineHeight: 18,
        fontWeight: "600",
        width: "90%",
        textAlign: "center"
    }
});
