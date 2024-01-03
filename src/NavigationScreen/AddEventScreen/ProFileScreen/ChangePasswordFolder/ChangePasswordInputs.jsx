import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../../constants';
import {AppButton} from '../../../../../component/appcomponent';

const ChangePasswordInputs = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        backgroundColor: COLORS.white,
        paddingVertical:16,
        paddingHorizontal:14
      }}>
      <View style={styles.inputWrapper}>
        <Image style={styles.imgStyle} source={icons.lock} />
        <TextInput
          placeholder="Old Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.gray}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Image style={styles.imgStyle} source={icons.lock} />
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.gray}
          style={styles.inputStyle}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Image style={styles.imgStyle} source={icons.lock} />
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          placeholderTextColor={COLORS.gray}
          style={styles.inputStyle}
        />
      </View>
      <AppButton style={styles.btn} title="Change Password" />
    </View>
  );
};

export default ChangePasswordInputs;

const styles = StyleSheet.create({
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 8,
    width: '95%',
    paddingHorizontal: 16,
    gap: 4,
  },
  imgStyle: {
    height: 18,
    width: 18,
    resizeMode: 'contain',
  },
  inputStyle: {
    width: '90%',
    fontSize: SIZES.font,
    color: COLORS.dark,
  },
  btn:{
    width:"95%"
  }
});
