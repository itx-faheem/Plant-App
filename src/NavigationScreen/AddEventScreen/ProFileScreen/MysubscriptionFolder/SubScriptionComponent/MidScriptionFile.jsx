import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images} from '../../../../../../constants';

const MidScriptionFile = ({MidScriptionProp}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.LogoStyle} source={icons.Logo} />
      <View style={styles.textWrapper}>
        <Text style={styles.headerText}>
          You've been a Premium member since
        </Text>
        <Text style={styles.bottomText}>{MidScriptionProp}</Text>
      </View>
    </View>
  );
};

export default MidScriptionFile;

const styles = StyleSheet.create({
  LogoStyle: {
    width: 147,
    height: 48,
    resizeMode: 'contain',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },
  headerText: {
    fontSize: SIZES.xxxLarge,
    color: COLORS.black,
    fontWeight: '700',
    textAlign: 'center',
  },
  textWrapper: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
  },
  bottomText: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '400',
  },
});
