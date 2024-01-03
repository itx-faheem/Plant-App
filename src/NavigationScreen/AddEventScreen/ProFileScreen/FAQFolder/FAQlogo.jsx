import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../../constants';

const FAQlogo = () => {
  return (
    <View
      style={{
        backgroundColor: 'blue',
        paddingVertical: 12,
        paddingHorizontal: 14,
        gap: 16,
        backgroundColor:COLORS.white
      }}>
      <Image
        style={{
          width: 86,
          height: 24,
          resizeMode: 'contain',
        }}
        source={icons.Logo}
      />
      <View>
        <Text
          style={{
            fontSize: SIZES.xxxLarge,
            color: COLORS.black,
            fontWeight: '700',
          }}>
          PlanIt Ap FAQs
        </Text>
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.black,
            fontWeight: '400',
          }}>
          Frequently Asked Questions (FAQ)
        </Text>
      </View>
    </View>
  );
};

export default FAQlogo;

const styles = StyleSheet.create({});
