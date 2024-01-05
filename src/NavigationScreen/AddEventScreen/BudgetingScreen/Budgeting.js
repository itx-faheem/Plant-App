import { StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import { CreaatedEventDetail, HomeHeaderBar } from '../HomeEventScreen/HomeComponent'
import AppIcon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../../../constants';
import { BudgetMain } from './Budget/BudgetComponen';
import AppBottomSheet from "../../../../component/appcomponent/AppBottomSheet";

const Budgeting = () => {
  const [showHide, setshowHide] = useState(false)
  const snapPoints = useMemo(() => ["40%", "40%"], [])
  const bottomSheetRef = useRef(null)
  const onBackPress = () => {
    bottomSheetRef.current?.close()
    setshowHide(false)
  }
  const handlepress = () => {
    bottomSheetRef.current?.snapToNext();
    setshowHide(true)
  }
  return (
    <>
      <View style={styles.container} >
        <HomeHeaderBar AddEvent="Add Supplies" />
        <View style={styles.innerWrapper} >
          <CreaatedEventDetail style={styles.createdEventbgc} >
            <AppIcon name="down" color={COLORS.gray} size={15} />
          </CreaatedEventDetail>
          <BudgetMain pedingPress={handlepress} />
        </View>
      </View>
      {showHide &&
        (<AppBottomSheet
          snapPoints={snapPoints}
          bref={bottomSheetRef}
          stylesBottomSheet={styles.stylesBottomSheet}
          onTouchStart={onBackPress}
        >

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
    flex: 1
  },
})