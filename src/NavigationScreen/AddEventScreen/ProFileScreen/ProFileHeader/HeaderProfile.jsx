import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {images, COLORS, SIZES} from '../../../../../constants';

const HeaderProfile = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          top: '10%',
        }}>
        <Image style={[styles.headerImgStyle]} source={images.profile} />
        <Text style={styles.nameStyle}>Marty Levine</Text>
        <View>
          <Text style={styles.levine}>@marty.levine</Text>
          <Text style={styles.emailStyle}>john@gmail.com</Text>
          <Text style={styles.sigmaStyle}>Sigma Alpha Mu</Text>
        </View>
      </View>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: {
    height: '33%',
    width: '100%',
    backgroundColor: COLORS.soft,
    paddingVertical: 14,
    paddingTop: 10,
    paddingBottom: 16,
    alignSelf: 'center',
    alignItems: 'center',
    gap: 10,
  },
  headerImgStyle: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderWidth: 1,
    borderRadius: 45,
    borderColor: COLORS.tertiary,
  },
  nameStyle: {
    fontSize: SIZES.xxLarge,
    color: COLORS.white,
    fontWeight: '700',
  },
  levine: {
    fontSize: SIZES.small,
    color: COLORS.white,
    fontWeight: '500',
    textAlign: 'center',
  },
  emailStyle: {
    fontSize: SIZES.medium,
    color: COLORS.white,
    fontWeight: '400',
    textAlign: 'center',
  },
  sigmaStyle: {
    fontSize: SIZES.small,
    color: COLORS.white,
    fontWeight: '400',
    textAlign: 'center',
  },
});
