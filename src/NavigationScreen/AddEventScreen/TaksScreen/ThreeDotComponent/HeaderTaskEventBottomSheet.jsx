import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TaskBottomSheetInput from './TaskBottomSheetInput';
import {COLORS, SIZES} from '../../../../../constants';
import AssignBottomSheetFile from '../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/BottomComponentOverView/AssignBottomSheetFile';
import PendingBottomSheet from '../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/BottomComponentOverView/PendingBottomSheet';
import DueBottomSheet from '../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/BottomComponentOverView/DueBottomSheet';

const HeaderTaskEventBottomSheet = () => {
  return (
    <View style={styles.container}>
      <TaskBottomSheetInput placeholder="Task name" />
      <View style={{gap:16}} >
        <View style={styles.AssignBottomSheetFileStyle}>
          <Text style={styles.textStyle} >Assign</Text>
          <AssignBottomSheetFile />
        </View>
        <View style={styles.AssignBottomSheetFileStyle}>
          <Text style={styles.textStyle} >Status</Text>
          <PendingBottomSheet />
        </View>
        <View style={styles.AssignBottomSheetFileStyle}>
          <Text style={styles.textStyle} >Due</Text>
          <DueBottomSheet />
        </View>
      </View>
    </View>
  );
};

export default HeaderTaskEventBottomSheet;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: COLORS.secondary,
    gap:16
  },
  AssignBottomSheetFileStyle: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textStyle:{
    fontSize:SIZES.font,
    color:COLORS.black,
    fontWeight:"500"
  }
});
