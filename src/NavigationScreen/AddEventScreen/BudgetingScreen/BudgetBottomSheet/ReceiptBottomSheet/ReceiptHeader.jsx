import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {images} from '../../../../../../constants';

const heightDimensions = Dimensions.get('screen').height;
const ReceiptHeader = () => {
  return (
    <View>
      <Image
        style={{
          width: '100%',
          resizeMode: 'contain',
          height: heightDimensions / 2,
        }}
        source={images.ReceiptImg}
      />
    </View>
  );
};

export default ReceiptHeader;

const styles = StyleSheet.create({});
