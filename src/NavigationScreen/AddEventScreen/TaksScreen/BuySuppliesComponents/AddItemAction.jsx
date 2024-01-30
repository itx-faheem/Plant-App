import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../../../../constants';
import { Children } from 'react';

const AddItemAction = ({x, placeholder, style, children}) => {
  const [count, setcount] = useState(2);
  const minFunction = () => {
    count > 2 && setcount(count - 1);
  };
  const addFunction = () => {
    setcount(count + 1);
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        ...style,
      }}>
        {children}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          backgroundColor: COLORS.white,
          paddingVertical: 12,
          paddingHorizontal: 16,
          borderWidth: 1,
          borderColor: COLORS.tertiary,
          borderRadius: 8,
          width: '30%',
        }}>
        <TouchableOpacity activeOpacity={0.5} onPress={minFunction}>
          <AppIcon name="minus" size={15} color={COLORS.gray} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.lightGray,
            fontWeight: '400',
          }}>
          {count}
          {x}
        </Text>
        <TouchableOpacity activeOpacity={0.5} onPress={addFunction}>
          <AppIcon name="plus" size={15} color={COLORS.gray} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <TextInput
          style={styles.inputStyle}
          placeholderTextColor={COLORS.gray}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default AddItemAction;

const styles = StyleSheet.create({
  inputStyle: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    color: COLORS.black,
    fontWeight: '400',
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 8,
    width: '100%',
  },
});
