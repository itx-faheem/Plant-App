import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';

const AccountComponent = ({onPress, iconColor, color, nameProps, source}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.secondary,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 12,
        }}>
        {source && (
          <Image
            style={{
              width: 18,
              height: 18,
              resizeMode: 'contain',
              tintColor: COLORS.black,
            }}
            source={source}
          />
        )}
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.dark,
            fontWeight: '500',
            ...color,
          }}>
          {nameProps}
        </Text>
      </View>
      <AppIcon color={iconColor || COLORS.black} size={20} name="right" />
    </TouchableOpacity>
  );
};

export default AccountComponent;