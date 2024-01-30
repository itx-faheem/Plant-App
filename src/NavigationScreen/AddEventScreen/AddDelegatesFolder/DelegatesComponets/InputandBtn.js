import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../../../../constants'
import { AppButton } from '../../../../../component/appcomponent'

const InputandBtn = ( {title} ) => {
  return (
    <View style={{
     backgroundColor:COLORS.white,
      paddingVertical:16,
      paddingHorizontal:14,
      borderWidth:1,
      borderColor:COLORS.tertiary,
      gap:16
      }} >
        
            <Text style={{
              fontSize:SIZES.font,
              lineHeight:24,
              color:COLORS.black,
              fontWeight:500
            }}
             >{title}</Text>
            <View style={styles.innerContainer} >
                <TextInput
                placeholder='Enter Phone or Email address'
                placeholderTextColor={COLORS.lightGray}
                style={{
                    paddingHorizontal:16,
                    paddingVertical:10,
                    fontSize:SIZES.font,
                    color:COLORS.dark,
                    borderWidth:1,
                    borderColor:COLORS.tertiary,
                    borderRadius:8,
                    width:"75%",
                    paddingHorizontal:16,
                    paddingVertical:12
              
                }}
                 />
                 <AppButton   title="Add" style={styles.btn}  />
            </View>
        </View>
  )
}

export default InputandBtn

const styles = StyleSheet.create({
  innerContainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between"
  },
  btn:{
    width:"20%",
    height:53
  }
})