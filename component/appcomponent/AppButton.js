import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../../constants';

const AppButton = (props) => {
  const { color, style, title, backgroundColor, onPress, disabled } = props;

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.5}
      style={[
        {
          backgroundColor: COLORS.primary,
          width: '90%',
          height: 56,
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          ...backgroundColor,
        },
        style,
      ]}
    >
      <Text style={{
        color: COLORS.white,
        fontSize: SIZES.font,
        lineHeight: 24,
        fontWeight: 600,
        ...color
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default AppButton;