import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images} from '../../../../../constants';

const GabeSean = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderColor:COLORS.secondary,
        borderColor:1,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image source={images.Sean} style={styles.imgStyle} />
          <Image
            source={images.Adam}
            style={[styles.imgStyle, styles.anotherStyle]}
          />
        </View>
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.black,
            fontWeight: '500',
          }}>
          Gabe, Sean
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 4,
        }}>
        <Image
          style={{
            width: 18,
            height: 18,
            resizeMode: 'contain',
            tintColor: COLORS.gray,
          }}
          source={icons.time}
        />
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.gray,
            fontWeight: '500',
          }}>
          8:30
        </Text>
      </View>
    </View>
  );
};

export default GabeSean;

const styles = StyleSheet.create({
  imgStyle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    zIndex: 1,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  anotherStyle: {
    zIndex: 0,
    marginLeft: '-15%',
  },
});
