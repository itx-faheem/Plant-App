import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import { SIZES, COLORS, icons, images } from '../../../../constants';

const InputField = ({ source, placeholder, secureTextEntry, value, onChangeText }) => (
    <View style={styles.inputContainer}>
        <Image style={styles.iconEmailLock}
            source={source}
        />
        <TextInput
            style={styles.inputs}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            placeholderTextColor={COLORS.gray}
            value={value}
            onChangeText={onChangeText}
        />
    </View>
);


export default InputField

const styles = StyleSheet.create({
    inputContainer: {
        borderWidth: 1, borderColor: COLORS.tertiary,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 16,
        borderRadius: 8

    },
    iconEmailLock: {
        width: 15,
        height: 15,
        resizeMode: "contain",
        tintColor: COLORS.gray
    },
    inputs: {
        width: "95%",
        paddingHorizontal: 15,
        fontSize: SIZES.font,
        color: COLORS.black,
        fontWeight: "500"
    }
})