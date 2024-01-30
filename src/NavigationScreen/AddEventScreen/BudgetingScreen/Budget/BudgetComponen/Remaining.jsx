import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';

const Remaining = ({
  color,
  Remaining,
  backgroundColor,
  source,
  pedingPress,
  price
}) => (
  <TouchableOpacity
    onPress={pedingPress}
    activeOpacity={0.5}
    style={styles.wrapper}>
    <View style={styles.rightContent}>
      <View
        style={{
          width: 32,
          height: 32,
          borderRadius: 16,
          backgroundColor: COLORS.green,
          alignItems: 'center',
          justifyContent: 'center',
          ...backgroundColor,
        }}>
        <Image
          style={{
            width: 14,
            height: 14,
            resizeMode: 'contain',
          }}
          source={source}
        />
      </View>
      <Text style={styles.titleStyle}>{Remaining}</Text>
    </View>
    <View style={styles.rightContent}>
      <Text style={{...styles.priceText, color}}>{price}</Text>
      <AppIcon name="right" size={15} color={COLORS.gray} />
    </View>
  </TouchableOpacity>
);
export default Remaining;

const styles = StyleSheet.create({
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
