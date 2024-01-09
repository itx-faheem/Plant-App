import {StyleSheet, Text, View, Switch, Image} from 'react-native';
import React, {useState} from 'react';
import {AppHeader} from '../../../../../component/appcomponent';
import {COLORS, SIZES, icons} from '../../../../../constants';
import AppIcon from 'react-native-vector-icons/FontAwesome5';
const switchMenu = [{
label:"Mute",
icon:"volume-mute",
value:false
},
{
  label:"Banner icon",
  icon:icons.Banner,
  value: false

}]
const Notifications = ({navigation}) => {
  const [toggleMenu, setToggleMenu] = useState(switchMenu);

  const onToggle = (toggleButtonIndex) =>  {
    const btnArray = [...toggleMenu]
    btnArray[toggleButtonIndex].value=!btnArray[toggleButtonIndex].value;
    setToggleMenu([...btnArray]);
  }

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
       {toggleMenu.map((toggle, index)=>{
        const {label, icon, value } = toggle
        return <SwitchContainer
          key={index}
          label={label}
          icon={icon}
          onValueChange={()=>onToggle(index)}
          value={value}
        />
       })}
      </View>
    </View>
  );
};

const SwitchContainer = ({label, icon, onValueChange, value}) => (
  <View style={styles.switchContainer}>
    <View style={styles.wrapper}>
      {typeof icon === 'string' ? (
        <AppIcon color={COLORS.gray}  name={icon} size={20} />
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
