import { View, Text, Image,StyleSheet } from 'react-native'
import React from 'react'
import { icons } from '../../../constants'

const Splash = () => {
  return (
    <View style={{justifyContent:"center",alignItems:"center", flex:1}}>
        <Image  source={icons.Logo}  resizeMode='contain'  style={styles.splashScreenLogo}  />
    </View>
  )
}

export default Splash


const styles = StyleSheet.create({
    splashScreenLogo: {
        width:"50%"
    }
})