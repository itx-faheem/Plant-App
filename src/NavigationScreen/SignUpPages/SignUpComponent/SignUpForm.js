import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import InputField from "./InputField";
import { AppButton } from '../../../../component/appcomponent';
import { COLORS, SIZES, icons, } from '../../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { SignUpInfo } from '../../../redux/userReducer';

const SignUpForm = ({ navigation }) => {


    const [errorPassword, seterrorPassword] = useState("")
    const [errorConfirmPassword, seterrorConfirmPassword] = useState(false)
    const [errorName, seterrorName] = useState(false)
    const [errorNickName, seterrorNickName] = useState(false)
    const [erroremail, seterroremail] = useState("")
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [name, setname] = useState();
    const [nickName, setNickName] = useState();
    const dispatch = useDispatch();
    const galleryiamges = useSelector(state => state.signCartRduser?.SignUpInfo);
    console.log(galleryiamges, "galleryiamges");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const pressHandle = async () => {
        if (!name || !email || !nickName || !password || !confirmPassword) {
        }
        else {
            const signUpData = { name, email, nickName, password, confirmPassword, }
            dispatch(SignUpInfo(signUpData));
            navigation.navigate("Home");
        }

    }

    const handleEmailChange = (email) => {
        setEmail(email)
        if (email.trim() === "") {
            seterroremail("");
        } else if (!emailRegex.test(email)) {
            seterroremail("Invalid email address");
        } else {
            seterroremail("")
        }

    }

    const passwordHandle = (input) => {
        setPassword(input);
        if (confirmPassword && input !== confirmPassword) {
            seterrorConfirmPassword(true);
        } else {
            seterrorConfirmPassword(false);
        }

        if (input.length < 8) {
            seterrorPassword("Password must be at least 8 characters");
        } else {
            seterrorPassword("");
        }
        if (input.trim() === "") {
            seterrorPassword("");
        }
    };

    const confirmPasswordHandle = (input) => {
        setConfirmPassword(input);
        if (password && input !== password) {
            seterrorConfirmPassword(true);
        } else {
            seterrorConfirmPassword(false);
        }
    };


    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Get Started</Text>
            <View style={styles.inputWrapper}>
                <View>
                    <InputField
                        onChangeText={(x) => setname(x)}
                        value={name}
                        source={icons.avatar} placeholder="name" />
                </View>
                <View>
                    <InputField
                        onChangeText={(x) => setNickName(x)}
                        value={nickName}
                        source={icons.avatar} placeholder="Nick Name" />

                </View>
                <View>
                    <InputField
                        onChangeText={(x) => handleEmailChange(x)}
                        value={email}
                        source={icons.emaiIcon} placeholder="Email Address" />
                    {erroremail &&
                        <Text style={styles.errorStyle} >{erroremail}</Text>
                    }
                </View>
                <View>
                    <InputField
                        secureTextEntry
                        onChangeText={(x) => passwordHandle(x)}
                        value={password}
                        source={icons.lock} placeholder="Password" />
                    {errorPassword ?
                        <Text style={styles.errorStyle} >{errorPassword}</Text>
                        : null}
                </View>
                <View>
                    <InputField secureTextEntry
                        onChangeText={(x) => confirmPasswordHandle(x)}
                        value={confirmPassword}
                        source={icons.lock}
                        placeholder="Confirm Password" />
                    {errorConfirmPassword ? (
                        <Text style={styles.errorStyle}>Passwords do not match</Text>
                    ) : null}
                </View>
            </View>
            <AppButton
                disabled={!name || !email || !nickName || !password || !confirmPassword}
                onPress={pressHandle}
                style={styles.btn}
                title="Sign Up" />
        </View>
    );
};
export default SignUpForm;

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingVertical: 16,
        paddingHorizontal: 14,
        gap: 16,
    },
    inputWrapper: {
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        width: "100%",
    },
    textStyle: {
        fontSize: SIZES.font,
        color: COLORS.black,
        fontWeight: "600",
    },
    btn: {
        width: "100%",
    },
    errorStyle: {
        color: COLORS.red,
        fontWeight: "500",
        textAlign: "right",
        marginTop: 1,
        fontSize: SIZES.medium
    }
});







// const signUpData = { name, email, nickName, password, confirmPassword };
// dispatch(SignUpInfo(signUpData));
// navigation.navigate("Home");