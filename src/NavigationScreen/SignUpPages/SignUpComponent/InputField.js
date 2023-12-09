import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import React from 'react'
import {  SIZES, COLORS, icons, images } from '../../../../constants';

const InputField = ({ source, placeholder, viewRef,  }) => (
    <View style={styles.inputContainer}>
        <Image style={styles.iconEmailLock} 
        source={source}
         />
        <TextInput style={styles.inputs} placeholder={placeholder}
         placeholderTextColor={COLORS.gray} 
         ref={viewRef} />
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
        resizeMode: "contain"
    },
    inputs: {
        width: "95%",
        paddingHorizontal: 15,
        fontSize: SIZES.font,
        color: COLORS.black,
    }
})