import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images} from '../../../../../../constants';

const CreatedDelegatesFile = ({delegatesPress}) => {
  return (

    <TouchableOpacity
      activeOpacity={0.5}
      onPress={delegatesPress}
      style={styles.container}>
      <View style={styles.delegatesWrapper}>
        <Image style={styles.iconStyle} source={icons.personBlack} />
        <Text style={styles.titleText}>Delegates</Text>
      </View>
      <View style={styles.innerContainer}>
        <View style={styles.wrapperImg}>
          <Image style={styles.imgStyle} source={images.profile} />
          <Image
            style={[styles.imgStyle, styles.secondImg]}
            source={images.Sean}
          />
          <Image
            style={[styles.imgStyle, styles.thrImg]}
            source={images.Adam}
          />
        </View>
        <View>
          <Text style={styles.numberText}>5</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CreatedDelegatesFile;

const styles = StyleSheet.create({
  iconStyle: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  imgStyle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    resizeMode: 'contain',
    zIndex: 1,
    borderWidth:1,
    borderColor:COLORS.tertiary
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  wrapperImg: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  delegatesWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  numberText: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  secondImg: {
    zIndex: 0,
    marginLeft: -10,
  },
  thrImg: {
    zIndex: -1,
    marginLeft: -10,
  },
});
