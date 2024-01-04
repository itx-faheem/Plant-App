import { ScrollView, View, StyleSheet, Text } from 'react-native'
import React, { useState, useMemo, useRef } from 'react'
import { HomeHeaderBar } from '../HomeEventScreen/HomeComponent'
import { CreatedBottomSheetandInputheader, HeaderBottomSheetTask } from './SeacondHeader';
import Tasksfile from '../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/Tasksfile';
import { BuysuppliesColl, SetupCollasipble } from './TaskcollapsibleFiles';
import AppBottomSheet from '../../../../component/appcomponent/AppBottomSheet';
import { COLORS, SIZES } from '../../../../constants';
import { DotThreeBottomComponent } from './ThreeDotComponent';
const Tasks = ({ navigation }) => {
  const [showHide, setshowHide] = useState(false);
  const [showHideThree, setshowHideThree] = useState(false);
  const bottomSheetRef = useRef(null)
  const snapPoints = useMemo(() => ['70%', '70%']);

  const handlePressThree = () => {
    bottomSheetRef.current?.expand()
    setshowHideThree(true)
  }
  const onTouchStartthree = () => {
    bottomSheetRef.current?.close();
    setshowHideThree(false);
  }

  const handlePress = () => {
    bottomSheetRef.current?.expand();
    setshowHide(true);
  };
  const onTouchStart = () => {
    bottomSheetRef.current?.close();
    setshowHide(false);
  }
  return (
    <>
      <View style={{ flex: 1, }} >
        <HomeHeaderBar />
        <CreatedBottomSheetandInputheader handlePress={handlePress} />
        <Tasksfile />
        <ScrollView showsVerticalScrollIndicator={false} >
          <BuysuppliesColl
            threeDotsPress={handlePressThree}
          />
          <SetupCollasipble />
        </ScrollView>
      </View>
      {showHide && (
        <AppBottomSheet
          cancelprops="Choose Event"
          cancelColor={styles.cancelColor}
          saveColor={styles.saveColor}
          saveBtn={onTouchStart}
          save="Cancel"
          onTouchStart={onTouchStart}
          bref={bottomSheetRef}
          snapPoints={snapPoints}
        >
          <HeaderBottomSheetTask onPress={() => navigation.navigate("MainCreateComponent")} />
        </AppBottomSheet>
      )}
      {
        showHideThree &&
        <AppBottomSheet
          cancelprops="Cancel"
          titleProps="Edit Task"
          save="Save"
          styleBottomSheet={styles.bts}
          onTouchStart={onTouchStartthree}
          bref={bottomSheetRef}
          snapPoints={snapPoints}
        >
          <DotThreeBottomComponent />
        </AppBottomSheet>
      }
    </>
  )
}

export default Tasks



const styles = StyleSheet.create({
  cancelColor: {
    color: COLORS.black,
    fontSize: SIZES.font,
    fontWeight: "600"
  },
  saveColor: {
    color: COLORS.black,
    fontSize: SIZES.font,
    fontWeight: "400"
  },
  bts:{
    backgroundColor:COLORS.orange,
    marginTop:"-10%"
  }
});











// import React, { useState, useMemo, useRef, useCallback } from 'react'
// import { ScrollView, View, StyleSheet, Text } from 'react-native'
// import {
//   HomeHeaderBar,
//   CreatedBottomSheetandInputheader,
//   HeaderBottomSheetTask,
// } from '../HomeEventScreen/HomeComponent'
// import Tasksfile from '../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/Tasksfile'
// import { BuysuppliesColl, SetupCollasipble } from './TaskcollapsibleFiles'
// import AppBottomSheet from '../../../../component/appcomponent/AppBottomSheet'
// import { COLORS, SIZES } from '../../../../constants'


// const Tasks = ({ navigation }) => {
//   const [showHide, setshowHide] = useState(false);
//   const [showHideThree, setshowHideThree] = useState(false);
//   const [bottomSheetContent, setBottomSheetContent] = useState(null);
//   const snapPoints = useMemo(() => ["50%", "50%"], []);
//   const bottomSheetRef = useRef(null);

//   const handlePress = useCallback(() => {
//     bottomSheetRef.current?.expand();
//     setshowHide(true);
//   }, [bottomSheetRef]);

//   const onTouchStart = useCallback(() => {
//     bottomSheetRef.current?.close();
//     setshowHide(false);
//     setshowHideThree(false);
//   }, [bottomSheetRef]);

//   const handlePressThree = useCallback(() => {
//     bottomSheetRef.current?.expand();
//     setshowHideThree(true);
//   }, [bottomSheetRef]);

//   const onTouchStartThree = useCallback(() => {
//     bottomSheetRef.current?.close();
//     setshowHideThree(false);
//   }, [bottomSheetRef]);

//   return (
//     <>
//       <View style={{ flex: 1 }}>
//         <HomeHeaderBar />
//         <CreatedBottomSheetandInputheader handlePress={handlePress} />
//         <Tasksfile />
//         <ScrollView showsVerticalScrollIndicator={false}>
//           <BuysuppliesColl threeDotsPress={handlePressThree} />
//           <SetupCollasipble />
//         </ScrollView>
//       </View>
//       <AppBottomSheet
//         bref={bottomSheetRef}
//         cancelprops={showHide || showHideThree ? 'Choose Event' : 'Cancel'}
//         snapPoints={snapPoints}
//         onTouchStart={showHide || showHideThree ? onTouchStart : onTouchStartThree}
//         saveBtn={showHide || showHideThree ? onTouchStart : onTouchStartThree}
//       >
//         {showHide && <HeaderBottomSheetTask onPress={() => navigation.navigate('MainCreateComponent')} />}
//         {showHideThree && <View><Text>new bottom sheet</Text></View>}
//       </AppBottomSheet>
//     </>
//   );
// };

// export default Tasks;




// const styles = StyleSheet.create({
//   cancelColor: {
//     color: COLORS.black,
//     fontSize: SIZES.font,
//     fontWeight: "600"
//   },
//   saveColor: {
//     color: COLORS.black,
//     fontSize: SIZES.font,
//     fontWeight: "400"
//   }
// });
