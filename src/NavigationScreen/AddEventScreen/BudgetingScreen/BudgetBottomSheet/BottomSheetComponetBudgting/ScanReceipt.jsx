import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppIcon from 'react-native-vector-icons/FontAwesome';
import {COLORS, SIZES} from '../../../../../../constants';

const ScanReceipt = ({ScanReceiptPress}) => {
  return (
    <TouchableOpacity
      onPress={ScanReceiptPress}
      activeOpacity={0.5}
      style={{}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: COLORS.tertiary,
          paddingVertical: 16,
          paddingHorizontal: 40,
          gap: 10,
          borderRadius: 8,
          backgroundColor: COLORS.white,
        }}>
        <AppIcon name="camera" color={COLORS.black} size={20} />
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.black,
            fontWeight: '600',
          }}>
          Scan Receipt
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ScanReceipt;

const styles = StyleSheet.create({});
