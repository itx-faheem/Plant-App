// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const WorkScreen = () => {
// //   return (
// //     <View>
// //       <Text>WorkScreen</Text>
// //     </View>
// //   )
// // }

// // export default WorkScreen

// // const styles = StyleSheet.create({})





// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const WorkScreen = () => {
//     // ref
//     const bottomSheetRef = useRef(null);

//     // variables
//     const snapPoints = useMemo(() => ['5%', '50%'], []);
//     return (
//         <GestureHandlerRootView style={{flex:1,}} >
//             <BottomSheetModalProvider>
//             <View style={styles.container}>
//                 <BottomSheet
//                 style={{backgroundColor:"grenn"}}
//                     ref={bottomSheetRef}
//                     index={1}
//                     snapPoints={snapPoints}
//                 // onChange={handleSheetChanges}
//                 >
//                     <View style={styles.contentContainer}>
//                         <Text>Awesome 🎉</Text>
//                     </View>
//                 </BottomSheet>
//             </View>
//             </BottomSheetModalProvider>
//         </GestureHandlerRootView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         // flex: 1,             
//         padding: 24,
//         backgroundColor: "blue"
//     },
//     contentContainer: {
//         flex: 1,
//         alignItems: 'center',
//     },
// });

// export default WorkScreen;




import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {Calendar, LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/dist/AntDesign';
// import BottomSheetHeader from './BottomSheetHeader';
const WorkScreen = ({ onPress, } ) => {
      
  const snapPoints = useMemo(() => ["40%", "66%"], []);
  const bottomSheetRef = useRef(null);

  const handleClosspress = () => {bottomSheetRef.current?.close()};
  const handleOpenspress = () => {bottomSheetRef.current?.expand()};
  
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <View style={styles.container}>
          <BottomSheet
            index={0}
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose={true}
            animateOnMount={true}
            topInset={12}
          >
            <View style={styles.contentContainer}>
                <View style={styles.headerBottomSheet} >
                    <TouchableOpacity activeOpacity={0.5}   onPress={handleClosspress}  >
                    <Text style={{color:"#000", fontSize:16, lineHeight:24, fontWeight:"300", width:80,textAlign:"left" }} >Cancel</Text>
                    </TouchableOpacity>
                    <Text  style={{color:"#000", fontSize:16, lineHeight:24, fontWeight:"600", width:150,textAlign:"center"}}  >Event Date</Text>
                    <TouchableOpacity activeOpacity={0.5} >
                    <Text style={{color:"#6941C6", fontSize:16, lineHeight:24, fontWeight:"600", width:80,textAlign:"right"}} >Save</Text>
                    </TouchableOpacity>
                </View>
                <Calendar
                onPress={`onPress`}
                  style={{ width:"107%",}}
                  onDayPress={(date) => {
                    console.log(date);
                  }}
                  hideExtraDays={true}
                  showHeaderBar={false}
                  hideArrows={true}
                  hideDayNames={false}
                  showWeekNumbers={false}
                //   customHeader={() => <BottomSheetHeader />}
                  />
                    <View style={{flexDirection:"row", width:"100%", alignItems:"center", 
                    borderWidth:1, borderColor:"#E6E6E6",
                    justifyContent:"space-between", paddingHorizontal:16, paddingVertical:12}} >
                        <Text style={styles.textTime} >Time</Text>
                        <View style={{flexDirection:"row", borderWidth:1, borderColor:"#E6E6E6", 
                        paddingVertical:8,paddingHorizontal:16, borderRadius:25, gap:5}} >
                          <Text style={styles.timestyle} >8:30</Text>
                          <Text style={styles.timestyle} >AM</Text>
                        </View>
                      </View>
                    </View>
                  </BottomSheet>
                </View>
            </BottomSheetModalProvider>
         </GestureHandlerRootView>
  );
};
     

export default WorkScreen;



const styles = StyleSheet.create({
        container: {
          flex: 1,
          padding: 24,
          backgroundColor: 'grey',
        },
        contentContainer: {
          flex: 1,
          alignItems: 'center',
          width:"100%", 
        },
        headerBottomSheet:{
          flexDirection:"row",
          justifyContent:"space-between",
          alignItems:"center",
          paddingHorizontal:16,paddingVertical:12,
          gap:16
        },
        textTime:{
          fontSize:16, color:"#000"
        },
        weekNamesStyle:{
          width:"5%",
          alignItems:"center",
          color:"#000"
        },
        timestyle:{
          color:"#000",
          fontWeight:"600"
        }
      })