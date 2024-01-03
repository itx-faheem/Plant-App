import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {COLORS, SIZES} from '../../../../../../constants';
import CreatedBox from './CreatedBox';

const CreateEventText = () => {
  const {
    container,
    title,
    description,
    timeContainer,
    timeText,
    dot,
    numertextContainer,
  } = styles;

  return (
    <View style={container}>
      <View style={{gap: 5}}>
        <Text style={title}>O-week BBQ rager</Text>
        <Text style={description}>
          Lorem ipsum dolor sit amet consectetur. Cursus viverra mus morbi
          pellentesque. Sit.
        </Text>
        <View style={timeContainer}>
          <Text style={timeText}>801 E. Seneca St</Text>
          <View style={dot}></View>
          <Text style={timeText}>June 24, 2023 at 3:03 PM</Text>
        </View>
      </View>
      <View>
        <CreatedBox />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 16,
    gap: 16,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: SIZES.xLarge,
    color: COLORS.black,
    fontWeight: '600',
  },
  description: {
    fontSize: SIZES.medium,
    color: COLORS.dark,
    fontWeight: '400',
    lineHeight: 24,
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  timeText: {
    fontSize: SIZES.medium,
    fontWeight: '400',
    color: COLORS.dark,
  },
  dot: {
    width: 6,
    height: 6,
    backgroundColor: COLORS.dark,
    borderRadius: 3,
  },
  numertextContainer: {
    width: '50%',
    height: 66,
    backgroundColor: COLORS.orange,
    paddingVertical: 8,
    paddingHorizontal: 12,
    gap: 10,
    borderRadius: 4,
  },
});

export default CreateEventText;
