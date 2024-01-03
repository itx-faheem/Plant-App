import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, images } from '../../../constants'
import { AppHeader } from '../../../component/appcomponent'

const ForgotStepto = ({navigation}) => {
  return (
    <View style={{backgroundColor:COLORS.secondary, flex:1}} >
        <AppHeader 
        onPress={()=>navigation.goBack()}
         color={COLORS.black} backgroundColor={{backgroundColor:"transparent"}}  />
        <View style={{
            backgroundColor:COLORS.white,
             height:"auto", paddingHorizontal:14,
              paddingVertical:16, gap:24,

              }} >
            <Image source={icons.emailVector}  />
            <View>
                <Text style={styles.emailText} >Check your email</Text>
                <Text style={styles.description} >We sent a password reset link to samantha@mail.com</Text>
            </View>
            <View style={{justifyContent:"center",flexDirection:"row",gap:4}} >
                <Text  style={styles.receiveText}  >Don’t receive the email?</Text>
                <TouchableOpacity activeOpacity={0.5} 
                // onPress={navigation.navigate("SetPassword")}
                onPress={()=>navigation.replace("SetPassword")}
                  >
                    <Text style={styles.resendBtn} >Click to resend</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default ForgotStepto

const styles = StyleSheet.create({
    emailText:{
        fontSize:SIZES.xxxLarge,
        fontWeight:"800",
        color:COLORS.black
    },
    description:{
        color:COLORS.dark,
        fontSize:SIZES.font,
        width:"90%"
    },
    receiveText:{
        fontSize:SIZES.font,
        fontWeight:"400",
        color:COLORS.black
    },
    resendBtn:{
        color:COLORS.primary,
        fontSize:SIZES.font,
        fontWeight:"500"
    }
})