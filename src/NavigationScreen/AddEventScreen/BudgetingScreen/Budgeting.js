import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { CreaatedEventDetail, HomeHeaderBar } from '../HomeEventScreen/HomeComponent'
import AppIcon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../../../constants';
import { BudgetMain } from './Budget/BudgetComponen';
import AppBottomSheet from "../../../../component/appcomponent/AppBottomSheet";
import { Reimbursements } from './BudgetBottomSheet';
import { AddSuppliesHeader } from './BudgetBottomSheet/BottomSheetComponetBudgting';
import AddSuppliesMain from './BudgetBottomSheet/BottomSheetComponetBudgting/AddSuppliesMain';
import { ReimbursementMain } from './BudgetBottomSheet/ReimbursementsBottomSheet';
import ReceiptMain from './BudgetBottomSheet/ReceiptBottomSheet/ReceiptMain';

const Budgeting = ({ navigation }) => {
  const [showHide, setshowHide] = useState(false)
  const [showHideSecond, setshowHideSecond] = useState(false)
  const [showHideThird, setshowHideThird] = useState(false)
  const [showHideFour, setshowHideFour] = useState(false)
  const snapPoints = useMemo(() => ["63%", "63%"], [])
  const snapPointsOther = useMemo(() => ["74%", "74%"], [])
  const snapPointsThird = useMemo(() => ["39%", "39%"], [])
  const snapPointsFour = useMemo(() => ["75%", "75%"], [])
  const bottomSheetRef = useRef(null)
  const bottomSheetThried = useRef(null)
  const bottomSheetSecond = useRef(null)
  const bottomSheetFour = useRef(null)

  const onBackPress = () => {
    bottomSheetSecond.current?.close()
    bottomSheetRef.current?.close()
    setshowHide(false)
    setshowHideThird(false)
    setshowHideSecond(false)

  }
  const handlepress = () => {
    bottomSheetRef.current?.expand();
    setshowHide(true)
  }

  const ReceiptView = () => {
    bottomSheetFour.current?.expand()
    bottomSheetThried.current?.close()
    bottomSheetSecond.current?.close()
    setshowHideFour(true)
  }
  const ReceiptViewCancle = () => {
    bottomSheetFour.current?.close()
    // bottomSheetThried.current?.close()
    setshowHideFour(false)
  }
  const handlepressOther = () => {
    bottomSheetSecond.current?.expand()
    setshowHideSecond(true)
  }
  const onPressView = () => {
    bottomSheetThried.current?.expand()
    bottomSheetRef.current?.close()
    setshowHideSecond(false)
    setshowHideThird(true)
  }

  const onPressViewThird = () => {
    bottomSheetThried.current?.close()
    setshowHideThird(false)
  }
  const budgetingPressPlus = () => {
    bottomSheetSecond.current?.expand()
    setshowHideSecond(true)
  }
  useEffect(() => {
    const display = showHide || showHideSecond  || showHideFour ? "none" : 'flex'
    navigation.setOptions({ tabBarStyle: { display } })
  }, [showHide, showHideSecond, showHideFour])

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}  >
        <View style={styles.container} >
          <HomeHeaderBar AddEvent="Add Supplies" />
          <View style={styles.innerWrapper} >
            <CreaatedEventDetail style={styles.createdEventbgc} >
              <AppIcon name="down" color={COLORS.gray} size={15} />
            </CreaatedEventDetail>
          </View>
          <BudgetMain
            pedingPress={handlepress}
            budgetingPressPlus={budgetingPressPlus}
            CollapsibleDataPress={handlepressOther}
          />
        </View>
      </ScrollView>
      {showHide &&
        (<AppBottomSheet
          cancleBtn={onBackPress}
          snapPoints={snapPoints}
          bref={bottomSheetRef}
          stylesBottomSheet={styles.stylesBottomSheet}
          onTouchStart={onBackPress}
          cancelprops="Cancel"
          titleProps=" Reimbursements"
        >
          <Reimbursements onPressView={onPressView} />
        </AppBottomSheet>)
      }
      {
        showHideSecond && (
          <AppBottomSheet
            bref={bottomSheetSecond}
            snapPoints={snapPointsOther}
            onTouchStart={onBackPress}
            titleProps="Add Supplies"
            cancelprops="Cancel"
            save="Save"
            cancleBtn={onBackPress}
          >
            <AddSuppliesMain ScanReceiptPress={ReceiptView} />
          </AppBottomSheet>
        )
      }
      {
        showHideThird &&
        (<AppBottomSheet
          snapPoints={snapPointsThird}
          bref={bottomSheetThried}
          onTouchStart={onPressViewThird}
          cancelprops="Cancel"
          titleProps="Reimbursements"
          cancleBtn={onPressViewThird}>
          <ReimbursementMain ReceiptView={ReceiptView} />
        </AppBottomSheet>)
      }
      {
        showHideFour &&
        (<AppBottomSheet
          snapPoints={snapPointsFour}
          bref={bottomSheetFour}
          onTouchStart={ReceiptViewCancle}
          cancelprops="Cancel"
          save="Save"
          titleProps="Receipt"
          cancleBtn={ReceiptViewCancle}>
          <ReceiptMain />
        </AppBottomSheet>)
      }

    </>
  )
}

export default Budgeting

const styles = StyleSheet.create({
  createdEventbgc: {
    width: '100%',
    backgroundColor: COLORS.tertiary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  innerWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 16
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
})

















// import React, { useEffect, useMemo, useRef, useState } from 'react';
// import { ScrollView, StyleSheet, View } from 'react-native';
// import AppIcon from 'react-native-vector-icons/AntDesign';
// import { COLORS } from '../../../../constants';
// import { BudgetMain } from './Budget/BudgetComponen';
// import AppBottomSheet from '../../../../component/appcomponent/AppBottomSheet';
// import { Reimbursements } from './BudgetBottomSheet';
// import { AddSuppliesHeader } from './BudgetBottomSheet/BottomSheetComponetBudgting';
// import AddSuppliesMain from './BudgetBottomSheet/BottomSheetComponetBudgting/AddSuppliesMain';
// import { ReimbursementMain } from './BudgetBottomSheet/ReimbursementsBottomSheet';
// import { CreaatedEventDetail, HomeHeaderBar } from '../HomeEventScreen/HomeComponent';

// const Budgeting = ({ navigation }) => {
//   const [showHide, setshowHide] = useState(false);
//   const [showHideSecond, setshowHideSecond] = useState(false);
//   const [showHideThird, setshowHideThird] = useState(false);
//   const snapPoints = useMemo(() => ['63%', '63%'], []);
//   const snapPointsOther = useMemo(() => ['74%', '74%'], []);
//   const snapPointsThird = useMemo(() => ['39%', '39%'], []);
//   const bottomSheetRef = useRef(null);
//   const bottomSheetThried = useRef(null);
//   const bottomSheetSecond = useRef(null);

//   const onBackPress = () => {
//     bottomSheetSecond.current?.close();
//     bottomSheetRef.current?.close();
//     setshowHide(false);
//     setshowHideThird(false);
//     setshowHideSecond(false);
//   };

//   const handlePress = (ref, setShow) => () => {
//     ref.current?.expand();
//     bottomSheetRef.current?.close() // close other bottom sheet
//     setShow(true);
//   };

//   const onPressViewThird = () => {
//     bottomSheetThried.current?.close();
//     setshowHideThird(false);
//   };

//   useEffect(() => {
//     const display = showHide || showHideSecond ? 'none' : 'flex';
//     navigation.setOptions({ tabBarStyle: { display } });
//   }, [showHide, showHideSecond]);

//   return (
//     <>
//       <ScrollView>
//         <View style={styles.container}>
//           <HomeHeaderBar AddEvent="Add Supplies" />
//           <View style={styles.innerWrapper}>
//             <CreaatedEventDetail style={styles.createdEventbgc}>
//               <AppIcon name="down" color={COLORS.gray} size={15} />
//             </CreaatedEventDetail>
//           </View>
//           <BudgetMain
//             pedingPress={handlePress(bottomSheetRef, setshowHide)}
//             budgetingPressPlus={() => alert('oo')}
//             CollapsibleDataPress={handlePress(bottomSheetSecond, setshowHideSecond)}
//           />
//         </View>
//       </ScrollView>
//       {showHide && (
//         <AppBottomSheet
//           cancleBtn={onBackPress}
//           snapPoints={snapPoints}
//           bref={bottomSheetRef}
//           stylesBottomSheet={styles.stylesBottomSheet}
//           onTouchStart={onBackPress}
//           cancelprops="Cancel"
//           titleProps="Reimbursements"
//         >
//           <Reimbursements onPressView={handlePress(bottomSheetThried, setshowHideThird)} />
//         </AppBottomSheet>
//       )}
//       {showHideSecond && (
//         <AppBottomSheet
//           bref={bottomSheetSecond}
//           snapPoints={snapPointsOther}
//           onTouchStart={onBackPress}
//           titleProps="Add Supplies"
//           cancelprops="Cancel"
//           save="Save"
//           cancleBtn={onBackPress}
//         >
//           <AddSuppliesMain />
//         </AppBottomSheet>
//       )}
//       {showHideThird && (
//         <AppBottomSheet
//           snapPoints={snapPointsThird}
//           bref={bottomSheetThried}
//           onTouchStart={onPressViewThird}
//           cancelprops="Cancel"
//           titleProps="Reimbursements"
//           cancleBtn={onPressViewThird}
//         >
//           <ReimbursementMain  />
//         </AppBottomSheet>
//       )}
//     </>
//   );
// };
