import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { AppButton, AppHeader } from '../../../component/appcomponent'
import { COLORS, SIZES } from '../../../constants'

const ForgotPass = ({navigation}) => {
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }} >
            <AppHeader color={COLORS.black} onPress={()=>navigation.goBack()}  />
            <View style={styles.warpper} >
                <View style={{gap:5, justifyContent:"center",alignItems:"center"}} > 
                    <Text style={styles.ForgotPassText} >Forgot password</Text>
                    <Text style={styles.description} >Enter the email address associated with your account and we’ll send you a link to reset your password.</Text>
                </View>
                <View style={{gap:16, justifyContent:"center",alignItems:"center"}} >
                    <TextInput 
                    style={styles.input}
                    placeholder='john@gmail.com' placeholderTextColor={COLORS.black} />
                    <AppButton title="Continue"  style={{width:"100%"}} 
                    onPress={()=>navigation.replace("ForgotStepto")}
                     />
                </View>
            </View>
        </View>
    )
}

export default ForgotPass

const styles = StyleSheet.create({
    input:{
        width:"100%",
        borderRadius:8,
        borderWidth:1,
        borderColor:COLORS.tertiary,
        paddingHorizontal:16,
        color:COLORS.dark,
        fontSize:SIZES.font
    },
    ForgotPassText:{
        fontSize:SIZES.xxxLarge,
        color:COLORS.black,
        fontWeight:"800",
        width:"100%",
    },
    description:{
        fontSize:SIZES.font,
        color:COLORS.dark,
        lineHeight:24,
        width:"100%",
    },
    warpper:{
        paddingHorizontal:18,
        paddingVertical:16,
        gap:16,
        borderWidth:1,
        borderColor:COLORS.tertiary
    }
})