import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../../../../constants';

const QuantityBottomSheetBtn = ({QuantityPress}) => {
  return (
    <TouchableOpacity
      onPress={QuantityPress}
      activeOpacity={0.5}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.tertiary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 6,
        borderRadius: 100,
      }}>
      <AppIcon name="plus" size={18} color={COLORS.black} />
      <Text
        style={{
          color: COLORS.black,
          fontSize: SIZES.font,
          fontWeight: '500',
        }}>
        Quantity
      </Text>
    </TouchableOpacity>
  );
};

export default QuantityBottomSheetBtn;

const styles = StyleSheet.create({});
