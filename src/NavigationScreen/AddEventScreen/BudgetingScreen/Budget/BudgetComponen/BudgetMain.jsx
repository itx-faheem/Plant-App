import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AmountspentFIle from './AmountspentFIle';
import RemainingCenterComponent from './RemainingCenterComponent';

const BudgetMain = ({pedingPress}) => {
  return (
    <View style={{gap:16}} >
      <AmountspentFIle />
      <RemainingCenterComponent  pedingPress={pedingPress} />
    </View>
  );
};

export default BudgetMain;

const styles = StyleSheet.create({});
