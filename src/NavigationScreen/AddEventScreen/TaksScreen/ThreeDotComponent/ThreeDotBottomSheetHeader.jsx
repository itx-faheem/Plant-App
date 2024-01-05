import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../../constants';
import MainBottomOverView from '../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent/BottomComponentOverView/MainBottomOverView';
import TaskBottomSheetInput from './TaskBottomSheetInput';

const ThreeDotBottomSheetHeader = () => {
  return (
    <>
      <View style={styles.container}>
        <TaskBottomSheetInput placeholder="Buy supplies"  placeholderTextColor={COLORS.black}  />
        <View style={styles.timeAndimgWrapper}>
          <Image style={styles.iconStyle} source={icons.date} />
          <Text style={styles.timeStyle}>June 24, 2023 at 3:03 PM</Text>
        </View>
      </View>
      <MainBottomOverView
        backgroundColor={{backgroundColor: COLORS.secondary}}
      />
    </>
  );
};

export default ThreeDotBottomSheetHeader;

const styles = StyleSheet.create({
  titleHeader: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '400',
  },
  container: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 14,
  },
  inputStyle: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: SIZES.font,
    fontWeight: '500',
    color: COLORS.black,
  },
  iconStyle: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  timeAndimgWrapper: {
    flexDirection: 'row',
    gap: 10,
  },
  timeStyle: {
    fontSize: SIZES.font,
    color: COLORS.dark,
    fontWeight: '500',
  },
});
