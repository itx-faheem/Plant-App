import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReceiptHeader from './ReceiptHeader';
import ReceiptFooter from '../ReimbursementsBottomSheet/ReceiptFotter';
import ReceiptBottomComponent from './ReceiptBottomComponent';
import { COLORS } from '../../../../../../constants';

const ReceiptMain = () => {
  return (
    <View style={{borderWidth:1, paddingVertical:12, borderColor:COLORS.secondary}}>
      <ReceiptHeader />
      <ReceiptBottomComponent />
    </View>
  );
};

export default ReceiptMain;

const styles = StyleSheet.create({});
