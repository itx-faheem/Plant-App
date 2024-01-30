import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../constants';
import {AppButton} from '../../../../../component/appcomponent';

const LogoutComponent = ({onPressLogOut}) => {
  return (
    <View style={styles.container}>
      <View style={{gap: 16, width: '90%'}}>
        <Text style={styles.textStyle}>Are you sure you want to logout?</Text>
      </View>
      <AppButton
        color={{color: COLORS.black}}
        title="No, keep me here"
        style={styles.noBtnStyle}
      />
      <AppButton onPress={onPressLogOut} title="Yes" style={styles.yesBtn} />
    </View>
  );
};

export default LogoutComponent;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    paddingVertical: 24,
    paddingHorizontal: 12,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yesBtn: {},
  noBtnStyle: {
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    backgroundColor: COLORS.transparent,
  },
  textStyle: {
    fontSize: SIZES.xxxLarge,
    color: COLORS.black,
    fontWeight: '700',
    textAlign: 'center',
  },
});
