import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppIcon from 'react-native-vector-icons/AntDesign';
import { COLORS, icons } from '../../constants';

const StepHeader = () => {
  const steps = [
    { title: 'Event info', icon: icons.StepOne },
    { title: 'Delegate', icon: icons.StepTwo },
    { title: 'More info', icon: icons.StepThree },
    { title: 'Invite', icon: icons.StepFour },
  ];

  return (
    <View style={styles.container}>
      {steps.map(({ title, icon }, index) => (
        <View key={index} style={styles.stepContainer}>
          <Image style={styles.icon} source={icon} />
          <View style={styles.textContainer}>
            <Text>{title}</Text>
            {title === "Invite" ? null : <AppIcon name="right" />}
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode:"contain"
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default StepHeader;
