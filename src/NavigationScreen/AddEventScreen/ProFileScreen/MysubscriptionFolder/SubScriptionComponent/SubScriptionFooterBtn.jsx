import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {AppButton} from '../../../../../../component/appcomponent';
import { COLORS, SIZES } from '../../../../../../constants';

const SubScriptionFooterBtn = ({StartPremiumNowPress}) => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap:24
      }}>
      <AppButton  onPress={StartPremiumNowPress}  title="Start Premium Now" />
      <TouchableOpacity activeOpacity={0.5}  >
        <Text  style={{
            color:COLORS.primary,
            fontSize:SIZES.font,
            fontWeight:"600"
        }} >No Thanks</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SubScriptionFooterBtn;

const styles = StyleSheet.create({});
