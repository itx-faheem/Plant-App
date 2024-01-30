import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  CenterScription,
  HeadeScriptionFile,
  MidScriptionFile,
} from '../SubScriptionComponent';
import {COLORS, SIZES} from '../../../../../../constants';

const SubscriptionDetail = ({navigation}) => {
  return (
    <View style={styles.container}>
      <HeadeScriptionFile onPressLeftArrow={() => navigation.goBack()} />
      <View style={{top: '5%', gap: 24}}>
        <MidScriptionFile MidScriptionProp="28 February, 2023" />
        <View style={styles.textWrapper}>
          <Text style={styles.textStyle}>Your premium Feature</Text>
        </View>
        <CenterScription />
        <TouchableOpacity
          onPress={() => alert('commign soon')}
          activeOpacity={0.5}
          style={styles.textWrapper}>
          <Text style={[styles.textStyle, styles.cancelText]}>
            Cancel Subscription
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SubscriptionDetail;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '400',
  },
  cancelText: {
    color: COLORS.primary,
    fontWeight: '600',
  },
});
