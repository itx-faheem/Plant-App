import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import {COLORS, icons, images, SIZES} from '../../../constants';
import {AppHeader, AppButton} from '../../../component/appcomponent';
const InputField = ({
  icon,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
}) => {
  const {inputContainer, iconEmailLock, inputs} = styles;
  return (
    <View style={inputContainer}>
      <Image style={iconEmailLock} source={icon} />
      <TextInput
        secureTextEntry={secureTextEntry}
        value={value}
        onChangeText={onChangeText}
        style={inputs}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
      />
    </View>
  );
};

export default InputField;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 8,
    paddingHorizontal: 16,
    gap: 10,
  },
  iconEmailLock: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
  inputs: {
    width: '90%',
    color: COLORS.dark,
  },
});
