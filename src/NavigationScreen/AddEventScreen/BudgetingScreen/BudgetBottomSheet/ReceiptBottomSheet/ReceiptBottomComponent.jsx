import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';

const ReceiptBottomComponent = () => {
  return (
    <View style={{gap: 4, paddingVertical: 12, paddingHorizontal: 16}}>
      <Text style={styles.addtoStyle}>Status</Text>
      <View style={styles.iconWrapper}>
        <Text style={styles.butSytle}>Paid</Text>
        <TouchableOpacity activeOpacity={0.5}>
          <AppIcon name="down" color={COLORS.black} size={17} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReceiptBottomComponent;

const styles = StyleSheet.create({
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  butSytle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  addtoStyle: {
    fontSize: SIZES.medium,
    color: COLORS.dark,
    fontWeight: '400',
  },
});
