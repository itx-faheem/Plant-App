import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../../constants';

const AmountspentFIle = () => {
  return (
    <View style={styles.container}>
      <View style={{gap: 5}}>
        <Text style={styles.headerPrice}>$300</Text>
        <Text style={styles.textStyle}>Budget</Text>
      </View>
      <View style={styles.linerContainer}></View>
      <View style={styles.innerWrapper}>
        <Text style={styles.textStyle}>Amount spent</Text>
        <Text style={styles.footerPrice}>$251</Text>
      </View>
    </View>
  );
};

export default AmountspentFIle;

const styles = StyleSheet.create({
  headerPrice: {
    fontSize: SIZES.xxxLarge,
    fontWeight: '700',
    color: COLORS.black,
  },
  container: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    gap: 12,
  },

  textStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '400',
    lineHeight: 24,
  },
  linerContainer: {
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerPrice: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '600',
  },
});
