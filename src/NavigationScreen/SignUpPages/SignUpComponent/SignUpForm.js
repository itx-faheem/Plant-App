import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import InputField  from "./InputField";
import { AppButton } from '../../../../component/appcomponent';
import { COLORS, SIZES, icons,} from '../../../../constants';

// const handlePress = () => navigation.push("OtpCode"); 
const SignUpForm = ({ viewRef, viewRef1, viewRef2, navigation, onPress }) => {
    return(
        <View style={styles.formContainer}>
        <Text style={{ width: "100%", fontSize: SIZES.font, color: COLORS.black, fontWeight: "700" }} >Get Started</Text>
        <View style={{ gap: 16, justifyContent: "center", alignItems: "center" }} >
            <InputField placeholder="Email Address" source={icons.emaiIcon} viewRef={viewRef} />
            <InputField placeholder="Password" source={icons.lock} viewRef={viewRef1} />
            <InputField placeholder="Confirm Password" source={icons.lock} viewRef={viewRef2} />
        </View>
        <AppButton
            title="Sign Up" style={{ width: "100%" }}
            onPress={onPress}
             />
    </View>
    )
}
export default SignUpForm

const styles = StyleSheet.create({
    formContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        width: "100%",
        paddingVertical: 16,
        paddingHorizontal: 14,
        gap: 16,
        top: 35,
    },
})