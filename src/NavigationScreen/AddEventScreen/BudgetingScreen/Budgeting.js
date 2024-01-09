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

const Budgeting = ({ navigation }) => {
  const [showHide, setshowHide] = useState(false)
  const [showHideSecond, setshowHideSecond] = useState(false)
  const snapPoints = useMemo(() => ["63%", "63%"], [])
  const snapPointsOther = useMemo(() => ["74%", "74%"], [])
  const bottomSheetRef = useRef(null)

  const onBackPress = () => {
    bottomSheetRef.current?.close()
    setshowHide(false)
    setshowHideSecond(false)

  }
  const handlepress = () => {
    bottomSheetRef.current?.expand();
    setshowHide(true)
  }
  const handlepressOther = () =>{
    bottomSheetRef.current?.expand()
    setshowHideSecond(true)
  }
  useEffect(() => {
    const display = showHide || showHideSecond ? "none" : 'flex'
    navigation.setOptions({ tabBarStyle: { display } })
  }, [showHide, showHideSecond])
  return (
    <>
      <ScrollView >
        <View style={styles.container} >
          <HomeHeaderBar AddEvent="Add Supplies" />
          <View style={styles.innerWrapper} >
            <CreaatedEventDetail style={styles.createdEventbgc} >
              <AppIcon name="down" color={COLORS.gray} size={15} />
            </CreaatedEventDetail>
          </View>
          <BudgetMain
            pedingPress={handlepress}
            budgetingPressPlus={() => alert("oo")}
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
          <Reimbursements />
        </AppBottomSheet>)
      }
      {
        showHideSecond && (
          <AppBottomSheet
          bref={bottomSheetRef}
          snapPoints={snapPointsOther}
          onTouchStart={onBackPress}
          titleProps="Add Supplies"
          cancelprops="Cancel"
          save="Save"
          cancleBtn={onBackPress}
          >
            <AddSuppliesMain />
          </AppBottomSheet>
        )
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