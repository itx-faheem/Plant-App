// import React from 'react';
// import {Image, StyleSheet, Text, View} from 'react-native';
// import {COLORS, icons} from '../../../constants';
// import AppIcon from 'react-native-vector-icons/AntDesign';

// const EventinfoHeaderApp = () => {
//   const data = [
//     {
//       tick: icons.LastTick,
//       id: 1,
//       title: 'Event info',
//       iconSource: icons.StepOne,
//     },
//     {tick: icons.LastTick, id: 2, title: 'Delegate', iconSource: icons.StepTwo},
//     {
//       tick: icons.LastTick,
//       id: 3,
//       title: 'More info',
//       iconSource: icons.StepThree,
//     },
//     {tick: icons.LastTick, id: 4, title: 'Invite', iconSource: icons.StepFour},
//   ];

//   return (
//     <>
//       <View style={styles.container}>
//         {data.map((item, index) => (
//           <View key={index} style={styles.stepContainer}>
//             <View style={styles.stepContent}>
//               <Image style={styles.icon} source={item.iconSource} />
//               {!(item.id === 3 || item.id === 4) && (
//                 <Text style={styles.titleStyle}>{item.title}</Text>
//               )}

//               <View style={{alignItems: 'center'}}>
//                 {!(item.id === 4) && (
//                   <AppIcon name="right" color={COLORS.dark} size={18} />
//                 )}
//               </View>
//             </View>
//           </View>
//         ))}
//       </View>
//     </>
//   );
// };

// export default EventinfoHeaderApp;

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 10,
//     paddingHorizontal: 14,
//     backgroundColor: COLORS.orange,
//   },
//   stepContainer: {
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   stepContent: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     gap: 7,
//   },
//   icon: {
//     width: 20,
//     height: 20,
//     resizeMode: 'contain',
//   },
//   titleStyle: {
//     color: COLORS.black,
//     fontWeight: '500',
//   },
// });
