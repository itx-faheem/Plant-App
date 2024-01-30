import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {SIZES, COLORS} from '../../constants';

const AddItemsBtn = ({addTaskComponentPress}) => {
  return (
    <TouchableOpacity
      onPress={addTaskComponentPress}
      activeOpacity={0.5}
      style={styles.TouchableOpacityStyle}>
      <Text style={styles.textStyle}>Add Items</Text>
    </TouchableOpacity>
  );
};

export default AddItemsBtn;

const styles = StyleSheet.create({
  TouchableOpacityStyle: {
    paddingHorizontal: 32,
    paddingVertical: 12,
    backgroundColor:COLORS.white,
    borderWidth:1,
    borderColor:COLORS.tertiary
  },
  textStyle: {
    fontSize: SIZES.font,
    color: COLORS.gray,
    fontWeight: '500',
  },
});
