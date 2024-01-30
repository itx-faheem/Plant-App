import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../../../../../constants';
const SuppliesList = ({budgetingPressPlus}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        backgroundColor: COLORS.secondary,
        paddingVertical: 12,
        paddingHorizontal: 14,
      }}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
        }}>
        <AppIcon name="shoppingcart" color={COLORS.gray} size={22} />
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.gray,
            fontWeight: '500',
          }}>
          Supplies List
        </Text>
      </View>
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={budgetingPressPlus}
      >
        <AppIcon name="plus" color={COLORS.primary} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default SuppliesList;

const styles = StyleSheet.create({});
