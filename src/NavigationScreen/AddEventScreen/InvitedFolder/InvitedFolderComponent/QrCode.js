import React from 'react';
import { View, Text, TouchableOpacity, Image, Dimensions, Alert, StyleSheet } from 'react-native';
import { AppButton } from '../../../../../component/appcomponent';
import { COLORS, SIZES, icons } from '../../../../../constants';

const QrCode = () => {
  const { height } = Dimensions.get('window');
  const minHeight = height / 2.82;

  const handlePress = () => {
    Alert.alert('Coming Soon');
  };

  return (
    <View style={styles.container}>
      <View style={styles.qrCodeView}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Invite via link or QR code</Text>
        </View>
        <View style={styles.qrCodeTextContainer}>
          <View style={styles.qrCodeTextBox}>
            <Text style={styles.qrCodeText}>plan.it/927390</Text>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton style={styles.appBtn} title="Share" />
          <TouchableOpacity onPress={handlePress} style={styles.qrCodeContainer}>
            <Image style={styles.qrCodeImg} source={icons.Qrimg} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.continueButtonContainer}>
        <AppButton title="Continue" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: Dimensions.get('window').height / 2.82,
    justifyContent: 'space-between',
  },
  qrCodeView: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    paddingVertical: 16,
    paddingHorizontal: 14,
    gap: 16,
  },
  textContainer: {
    gap: 16,
  },
  title: {
    color: COLORS.black,
    fontWeight: '600',
    fontSize: SIZES.font,
  },
  qrCodeTextContainer: {
    backgroundColor: COLORS.tertiary,
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
  },
  qrCodeTextBox: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '400',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  appBtn: {
    height: 40,
    width: '80%',
  },
  qrCodeContainer: {
    height:40,
    width:40,
    borderRadius:22,
    borderWidth:1,
    borderColor:COLORS.tertiary,
    alignItems:"center",
    justifyContent:"center"
  },
  qrCodeImg: {
    width: 13,
    height: 13,
  },
  continueButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrCodeText:{
    fontSize:SIZES.font,
    color:COLORS.black,
    fontWeight:"400",
  }
});

export default QrCode;
