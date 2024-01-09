import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIcon from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { COLORS, SIZES } from '../../../../../../constants';
const BudgetingCollapsibleHeader = ({downCollapsiblePress, name}) => {
  return (
    <View style={{
      paddingVertical:12,
      paddingHorizontal:14,
      gap:10
    }} >
    <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}} >
      <Text style={styles.listStyle} >Supplies List </Text>
      <View style={{flexDirection:"row",alignItems:"center",gap:10}} >
      <TouchableOpacity onPress={downCollapsiblePress}  activeOpacity={0.5} >
        <AppIcon  name={name} size={20} color={COLORS.black}   />
      </TouchableOpacity>
      <Entypo name='dots-three-horizontal' size={20} color={COLORS.black}  />
      </View>
    </View>
    <View  style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}} >
      <View style={{flexDirection:"row",alignItems:"center",gap:10}} >
        <Text style={styles.numnerText} >16</Text>
        <Text style={styles.numnerText} >Items</Text>
      </View>
      <Text style={{...styles.numnerText, fontWeight:"600",fontSize:SIZES.font}} >$251</Text>
    </View>
    </View>
  )
}

export default BudgetingCollapsibleHeader

const styles = StyleSheet.create({
  numnerText:{
    fontSize:SIZES.medium,
    color:COLORS.black,
    fontWeight:"400" },
    listStyle:{
      fontSize:SIZES.font,
      color:COLORS.black,
      fontWeight:"600"
    }
})