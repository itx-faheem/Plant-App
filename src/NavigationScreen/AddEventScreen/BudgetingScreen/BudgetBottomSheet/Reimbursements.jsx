import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ReimbursementsData from './ReimbursementsData';

const Reimbursements = ({onPressView}) => {
  return (
    <View style={{flex:1}} >
      <ReimbursementsData  onPressView={onPressView}  />
    </View>
  );
};

export default Reimbursements;

const styles = StyleSheet.create({});
