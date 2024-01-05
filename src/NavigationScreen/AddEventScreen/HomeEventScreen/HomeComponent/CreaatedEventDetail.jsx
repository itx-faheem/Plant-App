import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {children, useState} from 'react';
import {COLORS, SIZES, icons} from '../../../../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';
const CreaatedEventDetail = ({onPress, children, style}) => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={{
          backgroundColor: COLORS.white,
          paddingVertical: 16,
          paddingHorizontal: 14,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          ...style,
        }}>
        <View
          style={{
            flexDirection: 'row',
            gap: 15,
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 48,
              height: 48,
              resizeMode: 'contain',
              borderRadius: 5,
            }}
            source={icons.eventImg}
          />
          <View>
            <Text style={styles.eventName}>O-week BBQ rager</Text>
            <Text style={styles.eventDate}>19 Aug 2023</Text>
          </View>
        </View>
        {children}
      </TouchableOpacity>
    </>
  );
};

export default CreaatedEventDetail;

const styles = StyleSheet.create({
  eventDate: {
    color: COLORS.dark,
    fontSize: SIZES.medium,
    fontWeight: '400',
  },
  eventName: {
    color: COLORS.black,
    fontSize: SIZES.font,
    fontWeight: '600',
  },
});
