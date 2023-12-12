import { StyleSheet, Text, View,TextInput, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeHeaderBar, NoEvent } from './HomeComponent'
import AppIcon from "react-native-vector-icons/AntDesign";
import { COLORS, SIZES, icons } from '../../../../constants';



const Home = ( {navigation} ) => {
  return (
    <View style={{flex:1}} >
        <HomeHeaderBar
         onPress={()=>navigation.push("CreateEvent")}
           />
        <View style={{paddingVertical:16, paddingHorizontal:16,gap:12,borderWidth:1,borderColor:COLORS.tertiary}} >
            <View style={styles.searchInputHome} >
                <AppIcon name="search1" size={16}  />
                <TextInput  style={styles.InputText}  placeholder='Search'   />
            </View>
            <View style={styles.filterInner} >
                <Text style={{fontSize:SIZES.font, fontWeight:"700", color:COLORS.black}} >Your Events</Text>
                <TouchableOpacity activeOpacity={0.5} >
                <Image source={icons.filter}  />
                </TouchableOpacity>
            </View>
        </View>
        <NoEvent />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    searchInputHome:{
        borderWidth:2,
        borderColor:COLORS.tertiary,
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:COLORS.white,
        paddingHorizontal:16, gap:10,
        borderRadius:8
    },
    InputText:{
        color:COLORS.dark,
        fontSize:SIZES.font,
        width:"95%",
        fontWeight:"400",
    },
    filterInner:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        borderRadius:8
    }
})