// // import { StyleSheet, Text, View } from 'react-native'
// // import React from 'react'

// // const CreateBottomSheetScreen = () => {
// //   return (
// //     <View>
// //       <Text>CreateBottomSheetScreen</Text>
// //     </View>
// //   )
// // }

// // export default CreateBottomSheetScreen

// // const styles = StyleSheet.create({})







// import React, { useCallback, useMemo, useRef } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import BottomSheet from '@gorhom/bottom-sheet';
// import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';

// const App = () => {
//   // ref
//   const bottomSheetRef = useRef(null);

//   // variables
//   const snapPoints = useMemo(() => ['25%', '50%'], []);

//   return (
//     <View style={styles.container}>
//        <GestureHandlerRootView style={{ flex: 1 }}>

//       <BottomSheetModalProvider>

//       <BottomSheet
//         ref={bottomSheetRef}
//         index={1}
//         snapPoints={snapPoints}
//         >
//         <View style={styles.contentContainer}>
//           <Text>Awesome 🎉</Text>
//         </View>
//       </BottomSheet>
//         </BottomSheetModalProvider>
//         </GestureHandlerRootView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: 'grey',
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: 'center',
//   },
// });

// // export default App;