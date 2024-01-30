import { Image, StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { images, SIZES, COLORS } from '../../../../../constants'
import Appicon from 'react-native-vector-icons/Entypo';


const ListInvite = () => {
    const data = [
        { img: images.profile, name: "John Doe", emailorPhone: "john@gmail.com", text: "You", Appicon: false, },
        { img: images.Dianne, name: "Dianne Russell", emailorPhone: "(405) 555-0128", text: "Invited", Appicon: true },
        { img: images.Darrell, name: "Darrell Steward", emailorPhone: "(201) 555-0124", text: "Invited", Appicon: true },
    ]
    return (
        <View
            style={{
                backgroundColor: COLORS.white,
                paddingVertical: 16,
                paddingHorizontal: 14,
                gap: 16
            }}
        >
            {
                data.map((item, index) => (
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                        key={index} >
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 10
                            }}
                        >
                            <Image
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 22
                                }}
                                source={item.img} />
                            <View style={{ gap: 4 }} >
                                <Text
                                style={{
                                    fontSize:SIZES.font,
                                    color:COLORS.black,
                                    fontWeight:"600"
                                }}
                                >{item.name}</Text>
                                <Text
                                style={{fontSize:SIZES.medium,color:COLORS.gray}}
                                 >{item.emailorPhone}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: 10
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: SIZES.medium,
                                    fontWeight: "400",
                                    color: item.text === "You" ? COLORS.soft : COLORS.green,
                                }}
                            >{item.text}</Text>
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
    )
}

export default ListInvite

const styles = StyleSheet.create({})