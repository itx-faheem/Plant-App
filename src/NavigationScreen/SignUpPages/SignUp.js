import {
    StyleSheet,
    View, ImageBackground,
    ScrollView, Keyboard,
    Dimensions,
    Pressable
} from 'react-native'
import { LogoSection, SignUpForm } from "./SignUpComponent";
import React, { useRef } from 'react'
import {

    AppHeader
} from '../../../component/appcomponent'
import {
    COLORS,
    icons,
    images,
    SIZES
} from '../../../constants'
import SignUpImg from './SignUpImg';


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
    return (
        <Pressable style={styles.container}
            onPress={handleDismissKeyboard}>
            <BackgroundImageWrapper>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <AppHeader
                        onPress={() => navigation.goBack()}
                        title="Sign Up"
                        color={COLORS.white}
                        style={{ color: COLORS.white }}
                        backgroundColor={{ backgroundColor: 'transparent' }}
                    />
                    <View style={{ gap: 16, paddingVertical: 12, }} >
                        <LogoSection />
                        <SignUpImg />
                        <SignUpForm navigation={navigation} />
                    </View>
                </ScrollView>
            </BackgroundImageWrapper>
        </Pressable>
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
