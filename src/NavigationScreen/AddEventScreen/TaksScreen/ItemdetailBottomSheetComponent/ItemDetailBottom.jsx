import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Children} from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../../../../constants';
const ItemDetailBottom = ({title, children}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.tertiary,
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        {children}
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.black,
            fontWeight: '500',
          }}>
          {title}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.5} >
        <AppIcon name="down" color={COLORS.black} />
      </TouchableOpacity>
    </View>
  );
};

export default ItemDetailBottom;

const styles = StyleSheet.create({});
