import React from 'react';
import { View, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Image, Text } from 'react-native';
import { COLORS, icons, images, SIZES } from '../../../constants';
import { AppHeader, AppButton } from '../../../component/appcomponent';

const whiteBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    marginHorizontal: 15,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 14,
    gap: 16,
    top: 35
};

const commonTextStyles = {
    fontSize: SIZES.font,
    color: COLORS.black,
};

// INnputField
const InputField = ({ icon, placeholder }) => {
    const { inputContainer, iconEmailLock, inputs } = styles;
    return (
        <View style={inputContainer}>
            <Image style={iconEmailLock} source={icon} />
            <TextInput style={inputs} placeholder={placeholder} placeholderTextColor={COLORS.gray} />
        </View>
    );
};



// BackgroundImageWrapper
const BackgroundImageWrapper = ({ children }) => (
    <ImageBackground source={images.Background} resizeMode="cover" style={styles.bgcImg}>
        {children}
    </ImageBackground>
);


// logoSection
const LogoSection = () => (
    <View style={styles.logoContainer}>
        <Image source={icons.LogoWhiteColor} style={styles.logo} />
        <Text style={styles.logoText}>You want to talk logistics?</Text>
    </View>
);



// main 

const Login = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <BackgroundImageWrapper>
                <AppHeader
                    title="Login"
                    color={COLORS.white}
                    backgroundColor={{ backgroundColor: 'transparent' }}
                    style={{ color: COLORS.white }}
                    onPress={() => navigation.goBack()}
                />
                <View style={{ flex: 1, top: 26 }}>
                    <LogoSection />
                    <View style={whiteBoxStyles}>
                        <Text style={{ ...commonTextStyles, fontWeight: 600, textAlign: 'left', width: '100%' }}>Sign In</Text>
                        <View style={{ gap: 14 }}>
                            <InputField icon={icons.emaiIcon} placeholder='Email Address' />
                            <InputField icon={icons.lock} placeholder='Password' />
                            <TouchableOpacity
                                onPress={() => navigation.push("ForgotPass")}
                                activeOpacity={0.5}>
                                <Text style={{ ...commonTextStyles, color: COLORS.primary, fontWeight: '600' }}>Forgot Password</Text>
                            </TouchableOpacity>
                            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                <AppButton title="Sign In" style={{ width: '100%' }} onPress={()=>navigation.push("Home")}  />
                            </View>
                        </View>
                    </View>
                </View>
            </BackgroundImageWrapper>
        </View>
    );
};

const styles = StyleSheet.create({
    bgcImg: {
        flex: 1
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        borderWidth: 1,
        borderColor: COLORS.tertiary,
        borderRadius: 8,
        paddingHorizontal: 16,
        gap: 10
    },
    iconEmailLock: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    inputs: {
        width: "90%",
        color:COLORS.dark
    },
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
    },
    logo: {
        width: 176,
        height: 48
    },
    logoText: {
        color: COLORS.white,
        fontSize: SIZES.font
    },
});

export default Login;
