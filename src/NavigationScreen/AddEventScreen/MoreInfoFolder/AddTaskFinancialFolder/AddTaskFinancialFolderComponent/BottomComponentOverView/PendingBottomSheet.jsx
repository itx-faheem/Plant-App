import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../../../../../../constants';
const PendingBottomSheet = () => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.innerContainer}>
      <Text style={styles.pendingText}>Pending</Text>
      <AppIcon name="down" size={14} color={COLORS.orange} />
    </TouchableOpacity>
  );
};

export default PendingBottomSheet;

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 6,
    borderRadius: 100,
  },
  pendingText: {
    color: COLORS.orange,
    fontWeight: '600',
    fontSize: SIZES.font,
  },
});
