import React from 'react';
import {View, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Image,Text} from 'react-native';
import {COLORS, icons, images, SIZES} from '../../../constants';
import {AppHeader,AppButton }from '../../../component/appcomponent';

const Login = ({navigation}) => {
    const InputField = ({icon, placeholder}) => (
        <View style={styles.inputContainer}>
            <Image style={styles.iconEamilLock} source={icon} />
            <TextInput style={styles.inputs} placeholder={placeholder} placeholderTextColor={COLORS.gray} />
        </View>
    );

    return (
        <View style={{flex: 1}}>
            <ImageBackground source={images.Background} resizeMode="cover" style={styles.bgcImg}>
                <AppHeader
                    title="Login"
                    color={COLORS.white}
                    backgroundColor={{backgroundColor: 'transparent'}}
                    style={{color: COLORS.white}}
                    onPress={() => navigation.goBack()}
                />
                <View style={{flex: 1, top: 26}}>
                    <View style={{justifyContent: 'center', alignItems: 'center', gap: 16}}>
                        <Image source={icons.LogoWhiteColor} style={{width: 176, height: 48}} />
                        <Text style={{color: COLORS.white, fontSize: SIZES.font}}>You want to talk logistics?</Text>
                    </View>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: COLORS.white,
                        marginHorizontal: 15,
                        borderRadius: 8,
                        paddingVertical: 16,
                        paddingHorizontal: 14,
                        gap: 16,
                        top: 35
                    }}>
                        <Text style={{
                            fontSize: SIZES.font,
                            color: COLORS.black,
                            fontWeight: 600,
                            textAlign: 'left',
                            width: '100%'
                        }}>Sign In</Text>
                        <View style={{gap: 14}}>
                            <InputField icon={icons.emaiIcon} placeholder='Email Address' />
                            <InputField icon={icons.lock} placeholder='Password' />
                            <TouchableOpacity 
                            onPress={()=>navigation.push("ForgotPass")}
                            activeOpacity={0.5}>
                                <Text style={{
                                    fontSize: SIZES.font,
                                    color: COLORS.primary,
                                    fontWeight: '600'
                                }}>Forgot Password</Text>
                            </TouchableOpacity>
                            <View style={{justifyContent: 'center', alignItems: 'center',}}>
                                <AppButton title="Sign In" style={{width: '100%'}} />
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
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
    iconEamilLock: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    inputs: {
        width: "90%",
    }
});

export default Login;