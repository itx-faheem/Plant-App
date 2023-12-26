import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES, images } from '../../../../../constants'
import AppIcon from "react-native-vector-icons/Entypo";

const DelegatesSuppliesList = () => {
    const data = [
        { img: images.profile, name: "John Doe", eamil: "debra.holt@example.com", text: "You", },
        { img: images.Devon, name: "Kathryn Murphy", eamil: "bill.sanders@example.com", },
        { img: images.Kathryn, name: "Esther Howard", eamil: "  michelle.rivera@example.com ", },
        { img: images.Esther, name: "Guy Hawkins", eamil: "felicia.reid@example.com", },
        { img: images.Hawkins, name: "Devon Lane", eamil: "curtis.weaver@example.com", },
        { img: images.Wade, name: "Wade Warren", eamil: "willie.jennings@example.com", },
    ]
    return (
        <View style={{gap:16, backgroundColor:COLORS.white, paddingVertical:16,paddingHorizontal:14}} >
            {
                data.map((item, index) => {
                    return (
                        <View
                            style={styles.mapContainer}
                            key={index} >
                            <View style={styles.imgAndNameView} >
                                <Image style={{
                                    width: 48, height: 48, borderRadius: 24, resizeMode: "contain"
                                }} source={item.img} />
                                <View style={{gap:3}} > 
                                    <Text style={styles.nameStyle} >{item.name}</Text>
                                    <Text style={styles.eamilStyle} >{item.eamil}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "row", alignItems: 'center', gap: 10 }} >
                                {
                                    item.text === "You" &&
                                    <Text style={{color:COLORS.primary}} >{item.text}</Text>
                                }
                                <TouchableOpacity>
                                    <AppIcon name='cross' color={COLORS.black} size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )
                })
            }
        </View>
    )
}

export default DelegatesSuppliesList

const styles = StyleSheet.create({
    mapContainer: {
        alignContent: "center",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    imgAndNameView: {
        flexDirection: "row",
        alignItems: "center",
        gap:10
    },
    nameStyle:{
        fontSize:SIZES.font,
        color:COLORS.black,
        fontWeight:"600"
    },
    eamilStyle:{
        fontWeight:"400",
        color:COLORS.gray,
        fontSize:SIZES.medium
    }
})