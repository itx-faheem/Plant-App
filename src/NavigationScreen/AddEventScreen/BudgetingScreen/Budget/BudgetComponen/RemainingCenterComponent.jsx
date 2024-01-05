import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../../../constants';
import Remaining from './Remaining';

const RemainingCenterComponent = ({pedingPress}) => {

  return (
    <View style={styles.container}>
      <Remaining source={icons.remaining}  color={COLORS.green} Remaining="Remaining" />
      <Remaining source={icons.costs}  backgroundColor={{backgroundColor:COLORS.blue}} color={COLORS.blue} Remaining="Estimated remaining costs" />
      <Remaining pedingPress={pedingPress}  source={icons.circleDollar}   backgroundColor={{backgroundColor:COLORS.orange}} color={COLORS.orange} Remaining="Pending reimbursements" />
    </View>
  );
};

export default RemainingCenterComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 12,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imgWrapper: {},
  titleStyle: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontWeight: '500',
  },
  priceText: {
    fontSize: SIZES.medium,
    fontWeight: '500',
  },
});
