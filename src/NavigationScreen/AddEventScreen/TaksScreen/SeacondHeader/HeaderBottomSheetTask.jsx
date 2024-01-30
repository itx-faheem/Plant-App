import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CreaatedEventDetail} from '../../HomeEventScreen/HomeComponent';
import {COLORS} from '../../../../../constants';

const HeaderBottomSheetTask = ({onPress}) => {
  return (
    <View
      style={{
        backgroundColor: COLORS.secondary,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 14,
      }}>
      {Array.from({length: 4}, (v, index) => (
        <CreaatedEventDetail
          onPress={onPress}
          style={styles.CreaatedEventDetailStyle}
          key={index}
        />
      ))}
    </View>
  );
};

export default HeaderBottomSheetTask;
const styles = StyleSheet.create({
  CreaatedEventDetailStyle: {
    width: '100%',
    borderRadius: 8,
  },
});
