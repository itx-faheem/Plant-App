import React, { useState } from 'react';
import { View, StyleSheet, TextInput, ImageBackground, TouchableOpacity, Image, Text, ScrollView } from 'react-native';
import { COLORS, icons, images, SIZES } from '../../../constants';
import { AppHeader, AppButton } from '../../../component/appcomponent';
import { useSelector, useDispatch } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import LogoSectionLogin from './LogoSectionLogin';
import InputFieldLogin from './InputFieldLogin';
import { loginUser, logoutUser } from "../../redux/RootReducer";

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



const BackgroundImageWrapper = ({ children }) => (
    <ImageBackground source={images.Background} resizeMode="cover" style={styles.bgcImg}>
        {children}
    </ImageBackground>
);



// main 

const Login = ({ navigation }) => {
    const [email, setEmail] = useState("")
    const [handData, setHandleData] = useState(false)
    const [erroremail, seterroremail] = useState("")
    const [password, setPassword] = useState("")
    const [errorPassword, seterrorPassword] = useState("")

    const dispatch = useDispatch()
    const usersData = useSelector(state => state.signCartRduser)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    console.log(usersData, "usersData");
    const handleEmail = (email) => {
        setEmail(email)
        if (email.trim() === "") {
            seterroremail("")
        } else if (usersData.email && email !== usersData.email) {
            seterroremail("Invalid email address")
        } else {
            seterroremail("")
        }
    }

    const handlePassword = (x) => {
        setPassword(x)
        if (usersData.password && x !== usersData.password) {
            seterrorPassword("Password is incorrect")
        } else {
            seterrorPassword("")
        }
    }
    const showData = async () => {

    }

    const handlePress = () => {
        if (email !== usersData.email || password !== usersData.password) {
            alert("Incorrect email or password");
        } else {
            navigation.push("Home");
        }
    };


    return (
        <View
            style={{ flex: 1 }}
        >
            <BackgroundImageWrapper>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                    <AppHeader
                        title="Login"
                        color={COLORS.white}
                        backgroundColor={{ backgroundColor: 'transparent' }}
                        style={{ color: COLORS.white }}
                        onPress={() => navigation.goBack()}
                    />
                    <View style={{ flex: 1, top: 26 }}>
                        <LogoSectionLogin />
                        <View style={whiteBoxStyles}>
                            <Text style={{ ...commonTextStyles, fontWeight: 600, textAlign: 'left', width: '100%' }}>Sign In</Text>
                            <View style={{ gap: 14 }}>
                                <View>

                                    <InputFieldLogin
                                        value={email}
                                        onChangeText={(x) => handleEmail(x)}
                                        icon={icons.emaiIcon}
                                        placeholder='Email Address' />
                                    {erroremail &&
                                        <Text style={styles.errorStyle} >{erroremail}</Text>
                                    }
                                </View>
                                <View>
                                    <InputFieldLogin
                                        secureTextEntry={true}
                                        value={password}
                                        onChangeText={(x) => handlePassword(x)}
                                        icon={icons.lock} placeholder='Password' />
                                    {errorPassword &&
                                        <Text style={styles.errorStyle} >{errorPassword}</Text>
                                    }
                                </View>
                                <TouchableOpacity
                                    onPress={showData}
                                    // onPress={() => navigation.navigate("ForgotP/ass")}
                                    activeOpacity={0.5}>
                                    <Text style={{ ...commonTextStyles, color: COLORS.primary, fontWeight: '600' }}>Forgot Password</Text>
                                </TouchableOpacity>
                                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                                    <AppButton
                                        disabled={!email || !password}
                                        title="Sign In"
                                        style={{ width: '100%' }}
                                        onPress={() => handlePress()}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView >
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
        color: COLORS.dark
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
    errorStyle: {
        color: COLORS.red,
        fontWeight: "500",
        textAlign: "right",
        marginTop: 1,
        fontSize: SIZES.medium
    }
});

export default Login




// const onSignIn = async () => {
//     try {
//         const saveData = { email, password };
//         let savedData = await AsyncStorage.getItem('userData');
//         savedData = savedData ? [setEmail, setPassword] : [];
//         savedData.push(saveData);
//         await AsyncStorage.setItem('userData', JSON.stringify(savedData));
//     } catch (error) {
//         console.error('Error saving data:', error);
//     }
// };
// const showData = async () => {
//     try {
//         const showSaveData = await AsyncStorage.getItem('userData');
//         alert(showSaveData);
//     } catch (error) {
//         console.error('Error retrieving data:', error);
//     }
// }

// let show = await AsyncStorage.getItem("userData");
// alert(show)

// let stringData = JSON.stringify(data)
// await AsyncStorage.setItem("data", stringData);
// let existingDataString = await AsyncStorage.getItem("final");
// let existingData = existingDataString ? JSON.parse(existingDataString) : [];
// let newArray = [...existingData, data]
// await AsyncStorage.setItem("final", JSON.stringify(newArray))
// console.log(usersData, "usersData");