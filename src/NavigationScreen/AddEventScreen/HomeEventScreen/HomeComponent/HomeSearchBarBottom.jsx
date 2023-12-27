import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';

const HomeSearchBarBottom = () => {
  const {
    container,
    titleText,
    titosContainer,
    descriptionText,
    dotStyle,
    textTime,
    completedText,
    greenDot,
    greenContainer,
  } = styles;

  return (
    <View style={container}>
      <View style={{gap: 12}}>
        <Text style={titleText}>Task</Text>
        <View style={titosContainer}>
          <Text style={titleText}>Tito’s</Text>
        </View>
        <Text style={descriptionText}>From - O-week BBQ Rager</Text>
      </View>
      <View style={{gap: 12}}>
        <Text style={titleText}>Items</Text>
        <View style={titosContainer}>
          <Text style={titleText}>Tito’s</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10,
                paddingVertical: 4,
              }}>
              <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
                <AppIcon name="clockcircleo" color={COLORS.black} size={16} />
                <Text style={textTime}>7:00</Text>
              </View>
              <View style={dotStyle}></View>
              <Text style={textTime}>1x Handle</Text>
            </View>
            <View style={greenContainer}>
              <View style={[dotStyle, greenDot]}></View>
              <Text style={completedText}>Completed</Text>
            </View>
          </View>
        </View>
        <Text style={descriptionText}>From - Tito’s Task</Text>
      </View>
    </View>
  );
};

export default HomeSearchBarBottom;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    gap: 12,
  },
  titleText: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '600',
  },
  titosContainer: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: COLORS.white,
    borderRadius: 4,
  },
  descriptionText: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontWeight: '400',
  },
  dotStyle: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.gray,
    borderRadius: 3,
  },
  textTime: {
    color: COLORS.gray,
    fontSize: SIZES.font,
  },
  completedText: {
    color: COLORS.green,
    fontWeight: '400',
  },
  greenDot: {
    backgroundColor: COLORS.green,
  },
  greenContainer: {
    backgroundColor: 'rgba(22, 128, 98, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
});
