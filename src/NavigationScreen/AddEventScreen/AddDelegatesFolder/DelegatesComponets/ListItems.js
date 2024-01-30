import { StyleSheet, Text, View, Image, TouchableOpacity, Alert, Dimensions } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images } from '../../../../../constants'
import Appicon from 'react-native-vector-icons/Entypo';
import { AppButton } from '../../../../../component/appcomponent';

const Dimensionsheight = Dimensions.get("screen").height

const ListItems = ({ onPress }) => {

    const data = [
        { img: images.profile, name: "John Doe", email: "john@gmail.com", text: "You", Appicon: false },
        { img: icons.user, name: "Adam Hollingworth", email: "adam Hollingworth", text: "Pending", Appicon: true },
        { img: images.Adam, name: "Adam Hollingworth", email: "adam Hollingworth", text: "Pending", Appicon: true },
        { img: images.Adam, name: "Adam Hollingworth", email: "adam Hollingworth", text: "Pending", Appicon: true },
        { img: images.Adam, name: "Adam Hollingworth", email: "adam Hollingworth", text: "Pending", Appicon: true },
    ]


    return (
        <>
            <View style={{ flex: 1, minHeight: Dimensionsheight / 1.793, justifyContent: "space-between", }} >
                <View style={{
                    backgroundColor: COLORS.white,
                    paddingHorizontal: 14,
                    paddingVertical: 16
                }} >
                    {
                        data.map((item, index) => (
                            <View key={index} style={styles.innerContainer} >
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10
                                }} >
                                    <Image source={item.img} style={styles.profileImg} />
                                    <View style={{ flexDirection: "column", gap: 3 }} >
                                        <Text style={styles.listDataName} >{item.name}</Text>
                                        <Text style={styles.listDataemail} >{item.email}</Text>
                                    </View>
                                </View>
                                <View style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10
                                }} >
                                    <Text style={{
                                        fontSize: SIZES.medium,
                                        fontWeight: "400",
                                        color: item.text === "You" ? COLORS.soft : COLORS.orange,
                                    }}>{item.text}</Text>
                                    {
                                        item.Appicon &&
                                        <TouchableOpacity
                                            onPress={() => Alert.alert("Comming soon")}
                                            activeOpacity={0.5} >
                                            <Appicon name="cross" size={20} color={COLORS.black} />
                                        </TouchableOpacity>
                                    }
                                </View>
                            </View>
                        ))
                    }
                </View>
                <View style={{ justifyContent: "center", alignItems: "center" }} >
                    <AppButton title="Continue" onPress={onPress} />
                </View>
            </View>
        </>

    )
}

export default ListItems

const styles = StyleSheet.create({
    profileImg: {
        width: 44,
        height: 44,
        borderRadius: 22
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginVertical: 8,
    },
    listDataName: {
        fontSize: SIZES.font,
        fontWeight: "600",
        color: COLORS.black
    },
    listDataemail: {
        fontSize: SIZES.medium,
        fontWeight: "400",
        color: COLORS.gray
    }
})