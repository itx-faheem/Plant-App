import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import {CreaatedEventDetail} from '../../HomeEventScreen/HomeComponent';
import {COLORS, SIZES} from '../../../../../constants';

const CreatedBottomSheetandInputheader = ({handlePress}) => {
  return (
    <>
      <View style={styles.container}>
        <CreaatedEventDetail
          onPress={handlePress}
          style={styles.createdEventbgc}>
          <AppIcon name="down" color={COLORS.gray} size={15} />
        </CreaatedEventDetail>
        <View style={styles.inputWrapper}>
          <AppIcon name="search1" size={18} color={COLORS.gray} />
          <TextInput
            placeholder="Search"
            placeholderTextColor={COLORS.gray}
            style={styles.inputStyle}
          />
        </View>
      </View>
    </>
  );
};

export default CreatedBottomSheetandInputheader;

const styles = StyleSheet.create({
  createdEventbgc: {
    width: '100%',
    backgroundColor: COLORS.tertiary,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  container: {
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 12,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  inputStyle: {
    width: '90%',
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '400',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    width: '100%',
    borderRadius: 8,
    paddingHorizontal: 14,
  },
});
