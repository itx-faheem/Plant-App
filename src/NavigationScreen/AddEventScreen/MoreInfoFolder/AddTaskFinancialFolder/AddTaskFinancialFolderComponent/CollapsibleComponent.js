import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import { COLORS, SIZES, images } from '../../../../../../constants';
import AppIcon from "react-native-vector-icons/Entypo";
const CollapsibleComponent = () => {
    const [selectedItemId, setSelectedItemId] = useState(null);

    const data = [
        { title: "Buy supplies", name: "Gabe, Sean", images: images.Sean, images2: images.Adam, text: "Pending", id: 1 },
        { title: "Rides", name: "Sean", images: images.Adam, text: "Pending", id: 2 },
        { title: "Reimburse delegates", name: "Me", images: images.Gabe, text: "Pending", id: 3 },
    ];


    const handleRadioClick = (itemId) => {
        setSelectedItemId(selectedItemId === itemId ? null : itemId)
    }


    const Radiobtn = ({ itemId }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={styles.CheckboxContainer}
                onPress={() => handleRadioClick(itemId)}>
                {selectedItemId === itemId ? <View style={styles.checkBox} ><AppIcon name='check' size={SIZES.medium} color={COLORS.white} /></View> : null}
            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
            {data.map((item, index, id) => (
                <View key={index} style={styles.itemContainer}>
                    <Radiobtn itemId={item.id} />
                    <View style={{ width: "100%", gap: 3, paddingHorizontal: 14 }} >
                        <Text style={styles.title}>{item.title}</Text>
                        <View style={styles.contentContainer}>
                            <View style={styles.containerInner}  >
                                <View style={styles.imagesContainer}>
                                    <Image style={styles.imgStyle} source={item.images} />
                                    {
                                        item.title === "Buy supplies" ? <Image style={[styles.imgStyle, styles.secondImg]} source={item.images2} /> : null
                                    }

                                </View>
                                <Text>{item.name}</Text>
                            </View>
                            <View style={styles.dotandPadingView} >
                                <View style={styles.dotStyle} ></View>
                                <Text style={styles.paddingText}  >{item.text}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: COLORS.tertiary,
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 10
    },
    itemContainer: {
        // gap: 5,
        flexDirection: "row",
        // alignItems:"center
    },
    title: {
        fontSize: SIZES.font,
        color: COLORS.black,
        fontWeight: "500",
    },
    contentContainer: {
        justifyContent: "space-between",
        flexDirection: "row",
    },
    imagesContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    imgStyle: {
        width: 28,
        height: 28,
        borderRadius: 13,
        resizeMode: "contain",
        zIndex: 1
    },
    secondImg: {
        marginLeft: -10,
        zIndex: 0
    },
    containerInner: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    dotStyle: {
        width: 6,
        height: 6,
        backgroundColor: COLORS.orange,
        borderRadius: 3
    },
    dotandPadingView: {
        flexDirection: "row",
        alignItems: "center",
        gap: 4,
        backgroundColor: 'rgba(255, 165, 0, 0.15)',
        paddingVertical: 4,
        paddingHorizontal: 8
    },
    paddingText: {
        color: COLORS.orange,
        fontSize: SIZES.medium,
    },
    CheckboxContainer: {
        height: 20,
        width: 20,
        borderWidth: 1,
        borderRadius: 4,
        top: "1%",
        borderColor: COLORS.tertiary
    },
    checkBox: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.blue,
        height: 20,
        width: 20,
        borderRadius: 4
    }
});

export default CollapsibleComponent;
