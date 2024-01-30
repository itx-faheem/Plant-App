import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AmountspentFIle from './AmountspentFIle';
import RemainingCenterComponent from './RemainingCenterComponent';
import SuppliesList from './SuppliesList';
import BudgetingCollapsible from './BudgetingCollapsible';

const BudgetMain = ({pedingPress, budgetingPressPlus, CollapsibleDataPress}) => {
  return (
    <View style={{gap: 16}}>
      <View
        style={{gap: 16, paddingVertical: 10, paddingHorizontal: 16, gap: 16}}>
        <AmountspentFIle />
        <RemainingCenterComponent pedingPress={pedingPress} />
      </View>
      <SuppliesList budgetingPressPlus={budgetingPressPlus} />
      <BudgetingCollapsible CollapsibleDataPress={CollapsibleDataPress} />
    </View>
  );
};

export default BudgetMain;

const styles = StyleSheet.create({});
