import {StyleSheet, Text, View, Switch, Image} from 'react-native';
import React, {useState} from 'react';
import {AppHeader} from '../../../../../component/appcomponent';
import {COLORS, SIZES, icons} from '../../../../../constants';
import AppIcon from 'react-native-vector-icons/FontAwesome5';
const Notifications = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabledOther, setIsEnabledOther] = useState(false);

  const toggleSwitch = () => setIsEnabled(prevState => !prevState);
  const toggleSwitchOther = () => setIsEnabledOther(prevState => !prevState);

  return (
    <View>
      <AppHeader
        backgroundColor={{backgroundColor: COLORS.secondary}}
        color={COLORS.black}
        title="Notifications"
        onPress={()=>navigation.goBack()}
      />
      <View style={styles.textContainer}>
        <Text style={styles.soundStyle}>Sound</Text>
        <Text style={styles.setting}>Setting push notifications</Text>
      </View>

      <View style={styles.innerContainer}>
        <SwitchContainer
          label="Mute"
          icon="volume-mute"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
        <SwitchContainer
          label="Banner icon"
          icon={icons.Banner}
          onValueChange={toggleSwitchOther}
          value={isEnabledOther}
        />
      </View>
    </View>
  );
};

const SwitchContainer = ({label, icon, onValueChange, value}) => (
  <View style={styles.switchContainer}>
    <View style={styles.wrapper}>
      {typeof icon === 'string' ? (
        <AppIcon name={icon} size={20} />
      ) : (
        <Image source={icon} style={styles.bannerStyle} />
      )}
      <Text style={styles.muteText}>{label}</Text>
    </View>
    <Switch
      trackColor={{false: COLORS.white, true: COLORS.primary}}
      thumbColor={COLORS.white}
      onValueChange={onValueChange}
      value={value}
      style={styles.switchStyle}
    />
  </View>
);

const styles = {
  switchStyle: {
    height: 20,
    width: 35,
  },
  bannerStyle: {
    width: 20,
    height: 17,
    resizeMode: 'contain',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderColor: COLORS.tertiary,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  muteText: {
    fontSize: SIZES.font,
    color: COLORS.gray,
    fontWeight: '500',
  },
  soundStyle: {
    fontSize: SIZES.xxxLarge,
    color: COLORS.black,
    fontWeight: '700',
  },
  setting: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '400',
  },
  textContainer: {
    paddingVertical: 16,
    paddingHorizontal: 14,
    gap: 16,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    backgroundColor: COLORS.white,
  },
};

export default Notifications;
