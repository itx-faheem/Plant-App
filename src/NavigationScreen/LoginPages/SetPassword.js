import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons } from '../../../constants'
import { AppButton, AppHeader } from '../../../component/appcomponent'

const SetPassword = ( {navigation} ) => {

    const InputField = ({ icon, placeholder }) => (
        <View style={styles.inputContainer}>
            <Image style={styles.iconEamilLock} source={icon} />
            <TextInput style={styles.inputs} placeholder={placeholder} placeholderTextColor={COLORS.gray} />
        </View>
    );

    return (
        <View style={{ backgroundColor: COLORS.secondary }} >
            <AppHeader
            onPress={()=>navigation.goBack()} 
             backgroundColor={{ backgroundColor: COLORS.tertiary }} color={COLORS.black} />
            <View style={styles.warpper} >
                <View>
                    <Text style={{
                        fontSize:SIZES.xxxLarge,
                        fontWeight:"800",
                        color:COLORS.black
                    }} >Set new password</Text>
                    <Text style={{
                        fontSize:SIZES.font,
                        fontWeight:"400",
                        lineHeight:24,
                        color:COLORS.dark
                    }} >Your new password mush be different to previously used passwords.</Text>
                </View>
                <View style={{gap:16}} >
                    <InputField icon={icons.lock} placeholder='New Password'/>
                    <InputField icon={icons.lock} placeholder='Confirm Password' />
                </View>
                <View>
                    <AppButton title="Reset Passwrod" 
                    onPress={()=>navigation.pop(1)}
                     style={{width:"100%"}} />
                </View>
            </View>
        </View>
    )
}

export default SetPassword

const styles = StyleSheet.create({
    warpper: {
        backgroundColor: COLORS.lightWhite,
        paddingHorizontal:14,
        paddingVertical:16,
        gap:24,
        borderWidth:1,
        borderColor:COLORS.tertiary
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
        color:COLORS.dark
    }
})