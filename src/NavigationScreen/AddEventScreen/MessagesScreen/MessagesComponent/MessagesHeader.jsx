import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIcon from "react-native-vector-icons/AntDesign";
import { SIZES, COLORS } from "../../../../../constants";

const MessagesHeader = () => {
  return (
    <View style={styles.cotainer} >
      <Text style={styles.messages} >Messages</Text>
      <TouchableOpacity style={styles.iconWrapper} >
        <AppIcon name='plus' color={COLORS.white} />
        <Text style={styles.newMessage} >New Message</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MessagesHeader

const styles = StyleSheet.create({
    cotainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:10,
        paddingHorizontal:14,
        backgroundColor:COLORS.white

    },
    iconWrapper:{
        alignItems:"center",
        flexDirection:"row",
        gap:4,
        backgroundColor:COLORS.primary,
        paddingVertical:8,
        paddingHorizontal:16,
        borderRadius:100,
        height:40
    },
    newMessage:{
        color:COLORS.white,
        fontWeight:"600",
        fontSize:SIZES.font
    },
    messages:{
        color:COLORS.black,
        fontWeight:"700",
        fontSize:SIZES.xxxLarge
    }
})