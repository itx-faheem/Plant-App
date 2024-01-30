import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../constants';
import AddItemAction from '../BuySuppliesComponents/AddItemAction';
import ItemDetailBottom from './ItemDetailBottom';
import AppIcon from 'react-native-vector-icons/AntDesign';

const ItemdetailSheet = () => {
  const InputMultple = () => {
    return (
      <View>
        <TextInput
          style={styles.inputStyle}
          placeholder="Tequilla"
          placeholderTextColor={COLORS.black}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <InputMultple />
      <AddItemAction
        placeholder="Handle"
        style={styles.addItemStyle}
        placeholderTextColor={{placeholderTextColor: COLORS.black}}
      />
      <View style={{gap: 10}}>
        <Text style={{fontSize: SIZES.font, color: COLORS.gray}}>
          Quantity Items
        </Text>
        <AddItemAction
          placeholder="Handle"
          x="x"
          placeholderTextColor={{
            placeholderTextColor: COLORS.black,
          }}
        />
      </View>
      <ItemDetailBottom title="8:30">
        <AppIcon name="clockcircleo" color={COLORS.black} size={17} />
      </ItemDetailBottom>
      <View style={{gap: 10}}>
        <Text>Status</Text>
        <ItemDetailBottom title="Completed" />
      </View>
    </View>
  );
};

export default ItemdetailSheet;

const styles = StyleSheet.create({
  inputStyle: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 8,
  },
  container: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 16,
  },
  addItemStyle: {
    flexDirection: 'row-reverse',
  },
});
