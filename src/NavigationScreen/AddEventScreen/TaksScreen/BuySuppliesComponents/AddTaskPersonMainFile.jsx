import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useMemo, useState} from 'react';
import Tasksfile from '../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/Tasksfile';
import {BuysuppliesColl, TaskCheckBoxComponent} from '../TaskcollapsibleFiles';
import AppICon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../../../../constants';
import PendingBottomSheet from '../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/BottomComponentOverView/PendingBottomSheet';
import DueBottomSheet from '../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/BottomComponentOverView/DueBottomSheet';
import QuantityBottomSheetBtn from './QuantityBottomSheetBtn';
import AppBottomSheet from '../../../../../component/appcomponent/AppBottomSheet';
import AddQuantiyBottomSheetComponent from './AddQuantiyBottomSheetComponent';
import AddItemAction from './AddItemAction';
import {DotThreeBottomComponent} from '../ThreeDotComponent';
import {ItemdetailSheet} from '../ItemdetailBottomSheetComponent';

const AddTaskPersonMainFile = ({navigation}) => {
  const [handleBottomSheet, sethandleBottomSheet] = useState(false);
  const [scondBottomState, setscondBottomState] = useState(false);
  const [thirdBottomState, setThirdBottomState] = useState(false);
  const bottomSheetRef = useRef(null);
  const secondBottomSheet = useRef(null);
  const thirdBottomSheet = useRef(null);
  const snapPoints = useMemo(() => ['18%', '18%']);
  const snapPointssecond = useMemo(() => ['70%', '70%'], []);
  const snapPointsThird = useMemo(() => ['58%', '58%'], []);

  const handlePress = () => {
    bottomSheetRef.current?.expand();
    sethandleBottomSheet(true);
  };
  const backToPures = () => {
    bottomSheetRef.current?.close();
    sethandleBottomSheet(false);
    setscondBottomState(false);
    secondBottomSheet.current?.close();
    thirdBottomSheet.current?.close();
    setThirdBottomState(false);
  };
  const secondFunctionOn = () => {
    secondBottomSheet.current?.expand();
    setscondBottomState(true);
  };
  const thirdFunction = () => {
    thirdBottomSheet.current?.expand();
    setThirdBottomState(true);
  };
  return (
    <>
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.5}>
          <Tasksfile />
        </TouchableOpacity>
        <BuysuppliesColl
          taskeditPress={thirdFunction}
          threeDotsPress={secondFunctionOn}>
          <BuysuppliesCollChild />
        </BuysuppliesColl>
        <View style={styles.bottomSheetWrapper}>
          <PendingBottomSheet />
          <DueBottomSheet />
          <QuantityBottomSheetBtn QuantityPress={handlePress} />
        </View>
      </ScrollView>
      {handleBottomSheet && (
        <AppBottomSheet
          index={1}
          bref={bottomSheetRef}
          cancleBtn={backToPures}
          cancelprops="Cancel"
          save="save"
          titleProps="Add Quantiy"
          onTouchStart={backToPures}
          snapPoints={snapPoints}>
          <View
            style={{
              paddingVertical: 12,
              paddingHorizontal: 14,
              backgroundColor: COLORS.tertiary,
            }}>
            <AddItemAction placeholder="Size, etc" x="x" />
          </View>
        </AppBottomSheet>
      )}
      {scondBottomState && (
        <AppBottomSheet
          snapPoints={snapPointssecond}
          cancelprops="Cancel"
          titleProps="Edit Task"
          cancleBtn={backToPures}
          onTouchStart={backToPures}
          bref={secondBottomSheet}
          save="Save">
          <DotThreeBottomComponent />
        </AppBottomSheet>
      )}
      {thirdBottomState && (
        <AppBottomSheet
          cancelprops="Cancel"
          titleProps="Item detail"
          cancleBtn={backToPures}
          onTouchStart={backToPures}
          bref={thirdBottomSheet}
          save="Save"
          snapPoints={snapPointsThird}>
          <ItemdetailSheet />
        </AppBottomSheet>
      )}
    </>
  );
};

export default AddTaskPersonMainFile;

const styles = StyleSheet.create({
  Blackclawinner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  multpleStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 2,
    paddingHorizontal: 10,
  },
  BuysuppliesCollChildContainer: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 10,
  },
  Blackclaw: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  timeAndMultpleStyle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '500',
  },
  PendingText: {
    color: COLORS.orange,
    fontWeight: '400',
    fontSize: SIZES.small,
  },
  bottomSheetWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: COLORS.secondary,
    backgroundColor: COLORS.white,
  },
});

const BuysuppliesCollChild = () => {
  return (
    <View style={styles.BuysuppliesCollChildContainer}>
      {/* <Text style={styles.Blackclaw}>Blackclaw</Text> */}
      <TextInput
        placeholder="Blackclaw"
        placeholderTextColor={COLORS.black}
        style={styles.Blackclaw}
      />
      <View style={styles.Blackclawinner}>
        <View style={styles.multpleStyle}>
          <AppICon name="clockcircle" size={16} color={COLORS.gray} />
          <Text style={styles.timeAndMultpleStyle}>8:30</Text>
          <View style={{...styles.dot, backgroundColor: COLORS.gray}}></View>
          <Text style={styles.timeAndMultpleStyle}>1x Handle</Text>
        </View>
        <View
          style={{
            ...styles.multpleStyle,
            backgroundColor: 'rgba(246, 165, 49, 0.2)',
          }}>
          <View style={{...styles.dot, backgroundColor: COLORS.orange}}></View>
          <Text style={styles.PendingText}>Pending</Text>
        </View>
      </View>
    </View>
  );
};
