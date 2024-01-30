import React, {useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {COLORS, icons, SIZES} from '../../../constants';

const LogoSection = () => (
  <View style={styles.logoContainer}>
    <Image source={icons.LogoWhiteColor} style={styles.logo} />
    <Text style={styles.logoText}>You want to talk logistics?</Text>
  </View>
);

export default LogoSection;

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 16,
  },
  logo: {
    width: 176,
    height: 48,
  },
  logoText: {
    color: COLORS.white,
    fontSize: SIZES.font,
  },
});
