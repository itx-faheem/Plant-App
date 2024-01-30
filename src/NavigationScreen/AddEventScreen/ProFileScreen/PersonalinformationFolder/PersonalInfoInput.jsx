import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../../../constants'
import { AppButton } from '../../../../../component/appcomponent'

const PersonalInfoInput = () => {
  return (
    <View  style={styles.container} >
      <Text style={styles.headerText} >Update personal information</Text>
      <TextInput style={styles.inputStyle} placeholderTextColor={COLORS.black} placeholder='Marty Levine'   />
      <TextInput style={styles.inputStyle} placeholderTextColor={COLORS.black} placeholder='john@gmail.comMarty'   />
      <TextInput style={styles.inputStyle} placeholderTextColor={COLORS.black} placeholder='@marty.levine'   />
      <Text style={styles.bioStyle} >Bio</Text>
      <TextInput style={styles.inputStyle} placeholderTextColor={COLORS.black} placeholder='Sigma Alpha Mu'   />
      <AppButton title="Save Changes" style={styles.btn} />
    </View>
  )
}

export default PersonalInfoInput

const styles = StyleSheet.create({
    inputStyle:{
        borderWidth:1,
        borderColor:COLORS.tertiary,
        paddingHorizontal:16,
        paddingVertical:12,
        borderRadius:8,
        fontSize:SIZES.font,
        color:COLORS.black,
        fontWeight:"500"
    },
    container:{
        paddingVertical:16,
        paddingHorizontal:14,
        gap:16,
        backgroundColor:COLORS.white,
        borderWidth:1,
        borderColor:COLORS.secondary
    },
    btn:{
        width:"100%"
    },
    bioStyle:{
        fontSize:SIZES.medium,
        color:COLORS.dark,
        fontWeight:"400"
    },
    headerText:{
        fontSize:SIZES.font,
        color:COLORS.black,
        fontWeight:"600"
    }
})