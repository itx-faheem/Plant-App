import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../constants';

const TaskBottomSheetInput = ({placeholderTextColor, placeholder}) => {
  return (
    <View
      style={{
        gap: 10,
      }}>
      <Text
        style={{
          fontSize: SIZES.font,
          color: COLORS.dark,
          fontWeight: '400',
        }}>
        Task Name
      </Text>
      <TextInput
        style={{
          fontSize: SIZES.font,
          color: COLORS.black,
          backgroundColor: COLORS.white,
          paddingVertical: 10,
          paddingHorizontal: 16,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: COLORS.tertiary,
        }}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray || placeholderTextColor}
      />
    </View>
  );
};

export default TaskBottomSheetInput;

const styles = StyleSheet.create({});
