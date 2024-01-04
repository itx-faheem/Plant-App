import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import React, {useState, useRef, useMemo} from 'react';
import {COLORS, SIZES, icons} from '../../../../../../../constants';
import AppBottomSheet from '../../../../../../../component/appcomponent/AppBottomSheet';
const heightDimensions = Dimensions.get('screen').height;
const widthDimensions = Dimensions.get('screen').width;
const AssignBottomSheetFile = ({handlePress}) => {
  return (
    <>
      <TouchableOpacity onPress={handlePress} style={styles.innerContainer}>
        <Image source={icons.addAssginIcon} style={styles.iconStyle} />
        <Text style={styles.AssignText}>Assign</Text>
      </TouchableOpacity>
    </>
  );
};

export default AssignBottomSheetFile;

const styles = StyleSheet.create({
  iconStyle: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    tintColor: COLORS.primary,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 6,
    borderRadius: 100,
    backgroundColor:COLORS.white
  },
  AssignText: {
    color: COLORS.primary,
    fontWeight: '600',
    fontSize: SIZES.font,
  },
});
