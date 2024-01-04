import {
    StyleSheet, Text,
    View, ImageBackground,
    Image, TouchableOpacity,
    TextInput, ScrollView,
    KeyboardAvoidingView,
    Platform, Keyboard,
    Dimensions
} from 'react-native'
import { LogoSection, SignUpForm } from "./SignUpComponent";
import React, { useRef } from 'react'
import {
    AppButton,
    AppHeader
} from '../../../component/appcomponent'
import {
    COLORS,
    icons,
    images,
    SIZES
} from '../../../constants'


const handleDismissKeyboard = () => {
    Keyboard.dismiss()
}



const BackgroundImageWrapper = ({ children }) => {
    return (
        <ImageBackground source={images.Background} resizeMode="cover" style={styles.bgcImg}>
            {children}
        </ImageBackground>
    )
}


const SignUp = ({ navigation }) => {
    const windowHeight = Dimensions.get("window").height;
    return (
        <TouchableOpacity style={styles.container} activeOpacity={2}
            onPress={handleDismissKeyboard}>
            <BackgroundImageWrapper>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ minHeight: windowHeight - windowHeight / 3.2 }} >
                    <AppHeader
                        onPress={() => navigation.goBack()}
                        title="Sign Up"
                        color={COLORS.white}
                        style={{ color: COLORS.white }}
                        backgroundColor={{ backgroundColor: 'transparent' }}
                    />
                    <View style={styles.contentContainer}>
                        <LogoSection />
                        <SignUpForm onPress={() => navigation.navigate("OtpCode")} />
                    </View>
                </ScrollView>
            </BackgroundImageWrapper>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red"
    },
    contentContainer: {
        top: 24,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    signUpButton: {
        width: '100%',
    },
    bgcImg: {
        height: "100%",

    },
});

export default SignUp;
