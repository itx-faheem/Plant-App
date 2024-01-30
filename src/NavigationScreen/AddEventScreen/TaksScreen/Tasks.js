import { ScrollView, View, StyleSheet, Text } from 'react-native'
import React, { useState, useMemo, useRef, useEffect } from 'react'
import { HomeHeaderBar } from '../HomeEventScreen/HomeComponent'
import { CreatedBottomSheetandInputheader, HeaderBottomSheetTask } from './SeacondHeader';
import Tasksfile from '../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/Tasksfile';
import { BuysuppliesColl, SetupCollasipble } from './TaskcollapsibleFiles';
import AppBottomSheet from '../../../../component/appcomponent/AppBottomSheet';
import { COLORS, SIZES } from '../../../../constants';
import { DotThreeBottomComponent, HeaderTaskEventBottomSheet } from './ThreeDotComponent';
import AddItemsBtn from '../../../../component/appcomponent/AddItemsBtn';

const Tasks = ({ navigation }) => {
  const [showHide, setshowHide] = useState(false);
  const [showHideThree, setshowHideThree] = useState(false);
  const [HeaderShowHide, setHeaderShowHide] = useState(false)
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['70%', '70%'], []);
  const snapPointsOne = useMemo(() => ['60%', '60%'], []);
  const snapPointsHeader = useMemo(() => ['46%', '46%'], []);

  const handlePressThree = () => {
    bottomSheetRef.current?.expand();
    setshowHideThree(true);
  };

  const onTouchStartThree = () => {
    bottomSheetRef.current?.close();
    setshowHideThree(false);
  };

  const handlePress = () => {
    bottomSheetRef.current?.expand();
    setshowHide(true);
  };

  const onTouchStart = () => {
    bottomSheetRef.current?.close();
    setshowHide(false);
    setHeaderShowHide(false)
  };

  const headerHandlePress = () => {
    bottomSheetRef.current?.expand();
    setHeaderShowHide(true)
  }

  useEffect(() => {
    const display = showHide || showHideThree || HeaderShowHide ? "none" : 'flex'
    navigation.setOptions({ tabBarStyle: { display } })
  }, [showHide, HeaderShowHide, showHideThree])

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flex: 1 }}>
          <HomeHeaderBar AddEvent="Add Task" onPress={headerHandlePress} />
          <CreatedBottomSheetandInputheader handlePress={handlePress} />
          <Tasksfile />
          <BuysuppliesColl threeDotsPress={handlePressThree} />
          <AddItemsBtn addTaskComponentPress={() => navigation.navigate("AddTaskPersonMainFile")} />
          <SetupCollasipble />
        </View>
      </ScrollView>
      {showHide && (
        <AppBottomSheet
          cancelprops="Choose Event"
          cancelColor={styles.cancelColor}
          saveColor={styles.saveColor}
          saveBtn={onTouchStart}
          save="Cancel"
          onTouchStart={onTouchStart}
          bref={bottomSheetRef}
          snapPoints={snapPointsOne}
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
          onTouchStart={onTouchStartThree}
          cancleBtn={onTouchStart}
          bref={bottomSheetRef}
          snapPoints={snapPoints}
        >
          <DotThreeBottomComponent />
        </AppBottomSheet>
      }
      {
        HeaderShowHide &&
        (<AppBottomSheet
          snapPoints={snapPointsHeader}
          onTouchStart={onTouchStart}
          cancleBtn={onTouchStart}
          cancelprops="Cancel"
          titleProps="Add New Task"
          save="Save"
        >
          <HeaderTaskEventBottomSheet />
        </AppBottomSheet>)
      }
    </>
  );
};

export default Tasks;


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
  bts: {
    backgroundColor: COLORS.orange,
    marginTop: "-10%"
  }
});

