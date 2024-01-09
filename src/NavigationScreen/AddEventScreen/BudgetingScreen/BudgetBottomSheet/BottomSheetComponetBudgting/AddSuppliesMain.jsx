import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AddSuppliesHeader from './AddSuppliesHeader';
import {COLORS} from '../../../../../../constants';
import QuantityItems from './QuantityItems';
import Addtotask from './Addtotask';
import Notes from './Notes';
import ScanReceipt from './ScanReceipt';

const AddSuppliesMain = ({ScanReceiptPress}) => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: COLORS.secondary,
          paddingVertical: 12,
          paddingHorizontal: 14,
          gap: 16,
        }}>
        <AddSuppliesHeader />
        <QuantityItems />
        <Addtotask />
        <Notes />
      </View>
      <View style={{
        paddingVertical:12,
        paddingHorizontal:14,
        borderWidth:1,
        borderColor:COLORS.secondary
      }} >
        <ScanReceipt  ScanReceiptPress={ScanReceiptPress}  />
      </View>
    </View>
  );
};

export default AddSuppliesMain;

const styles = StyleSheet.create({});
