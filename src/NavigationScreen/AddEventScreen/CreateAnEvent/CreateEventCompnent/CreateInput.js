import { Image, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, SIZES, icons } from '../../../../../constants'
import AppIcon from "react-native-vector-icons/AntDesign";
import RadioButton from './RadioButton';
import { AppButton } from '../../../../../component/appcomponent';
// import CreateBottomSheet from './CreateBottomSheet';

const CreateInput = ({ onPress }) => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


    const EventInput = () => (
        <View style={{ gap: 14 }} >
            <View style={{ justifyContent: "center", alignItems: "center", gap: 4 }} >
                <Text style={styles.inputNames} >Event Name</Text>
                <TextInput placeholder='Event Name' style={styles.multiInputs} placeholderTextColor={COLORS.lightGray} />
            </View>
            <View style={{ justifyContent: "center", alignItems: "center", gap: 4 }} >
                <Text style={styles.inputNames} >Event Description</Text>
                <View style={{ height: 91, width: "100%", borderRadius: 8, borderWidth: 1, borderColor: COLORS.tertiary, }} >
                    <TextInput
                        multiline={true}
                        placeholder='Description'
                        style={styles.DescriptionInput}
                        placeholderTextColor={COLORS.lightGray} />
                </View>
            </View>
        </View>
    )

    const DataTIme = () => (
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 10,}} >
            <View style={{gap:4}} >
                <Text style={styles.inputNames} >Event Date</Text>
                <View style={styles.dateandTimewarpper} >
                    <Image style={styles.iconstyle} source={icons.date} />
                    <TextInput placeholder='Event Date' style={{ color: COLORS.dark }} placeholderTextColor={COLORS.lightGray} />
                    <TouchableOpacity activeOpacity={0.5}
                        // onPress={() => openModal()}
                    >
                        <AppIcon name="down" color={COLORS.lightGray} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{gap:4}} >
                <Text style={styles.inputNames} >Event Time</Text>
                <View style={styles.dateandTimewarpper} >
                    <Image style={styles.iconstyle} source={icons.time} />
                    <TextInput placeholder='Choose Time' style={{ color: COLORS.dark }} placeholderTextColor={COLORS.lightGray} />
                    <TouchableOpacity activeOpacity={0.5}   >
                        <AppIcon name="down" color={COLORS.lightGray}
                            // onPress={() => openModal()}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            {/* <CreateBottomSheet   
            // visible={isModalOpen} onClose={closeModal} 
             /> */}
        </View>
    )


    const Location = () => (
        <View style={{ gap: 4 }} >
            <Text style={styles.inputNames} >Location</Text>
            <View style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: COLORS.tertiary,
                borderRadius: 8, alignItems: "center",
                paddingHorizontal: 16
            }} >
                <Image source={icons.location} style={styles.iconstyle} />
                <TextInput placeholder='Location' style={styles.loctaionInputandDollar} placeholderTextColor={COLORS.lightGray} />
            </View>
        </View>
    )


    const Price = () => (
        <View style={{ gap: 4 }} >
            <Text style={styles.inputNames} >Price</Text>
            <View
                style={{
                    flexDirection: "row",
                    borderWidth: 1,
                    borderColor: COLORS.tertiary,
                    borderRadius: 8, alignItems: "center",
                    paddingHorizontal: 16
                }}>
                <Image source={icons.dollar} style={styles.iconstyle} />
                <TextInput placeholder='00.00' style={styles.loctaionInputandDollar} placeholderTextColor={COLORS.lightGray} />

            </View>
        </View>
    )

    const AppButtonComponent = ({ onPress }) => (
        <View style={{ justifyContent: "center", alignItems: "center" }} >
            <AppButton title="Continue" style={styles.btn}
                onPress={onPress}
            />
        </View>
    )


    return (
        <View style={{ flex: 1, paddingHorizontal: 16, paddingVertical: 12 }}>
            <View style={{ gap: 14, }} >
                <EventInput />
                <DataTIme />
                <Location />
                <RadioButton />
                <Price />
                <AppButtonComponent onPress={onPress} />
            </View>

        </View>
    )
}

export default CreateInput

const styles = StyleSheet.create({
    inputNames: {
        fontSize: SIZES.medium,
        fontFamily: "400",
        color: COLORS.black,
        width: "100%",
        textAlign: "left"
    },
    multiInputs: {
        width: "100%",
        borderColor: COLORS.tertiary,
        borderWidth: 1,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        color: COLORS.dark
    },
    DescriptionInput: {
        width: "90%",
        paddingVertical: 12,
        paddingHorizontal: 16,
        color: COLORS.dark
    },
    iconstyle: {
        width: 20,
        height: 20,
        resizeMode: "contain"
    },
    dateandTimewarpper: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.tertiary,
        borderRadius: 8,
        width: 169,
        paddingHorizontal: 12,
        justifyContent: "space-between"
    },
    loctaionInputandDollar: {
        width: "96%",
        paddingHorizontal: 16,
        color: COLORS.dark
    },
    btn: {
        width: "100%"
    }
})













