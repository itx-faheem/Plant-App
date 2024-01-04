import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';

const DueBottomSheet = () => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.innerContainer}>
      <AppIcon size={14} name="clockcircle" color={COLORS.black} />
      <Text style={styles.DueText}>Due</Text>
    </TouchableOpacity>
  );
};

export default DueBottomSheet;

const styles = StyleSheet.create({
  DueText: {
    color: COLORS.black,
    fontWeight: '600',
    fontSize: SIZES.font,
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
});
