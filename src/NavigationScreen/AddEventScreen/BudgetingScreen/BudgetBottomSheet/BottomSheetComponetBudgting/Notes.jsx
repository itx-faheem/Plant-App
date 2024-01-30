import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../../constants';

const Notes = () => {
  return (
    <View style={{gap: 4}}>
      <Text
        style={{
          fontSize: SIZES.medium,
          color: COLORS.dark,
          fontWeight: '500',
        }}>
        Notes
      </Text>
      <TextInput
        placeholder="Liter"
        placeholderTextColor={COLORS.black}
        style={styles.inputStyle}
      />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderColor: COLORS.tertiary,
    fontWeight: '500',
  },
});
