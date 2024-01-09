import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../../constants';
import QuantityItems from './QuantityItems';

const AddSuppliesHeader = () => {

  return (
    <View style={{gap: 5}}>
      <Text>Name Supplies</Text>
      <TextInput
        placeholder="Tito’s"
        placeholderTextColor={COLORS.black}
        style={styles.inputSupplies}
      />
    </View>
  );
};

export default AddSuppliesHeader;

const styles = StyleSheet.create({
  inputSupplies: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
});
