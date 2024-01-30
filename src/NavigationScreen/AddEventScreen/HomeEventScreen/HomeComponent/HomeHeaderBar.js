import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import AppIcon from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES, icons, images } from '../../../../../constants';
import { useSelector } from 'react-redux';

const HomeHeaderBar = ({ onPress, AddEvent }) => {
  const redexData = useSelector(state => state.signCartRduser.SignUpInfo)
  const { email, confirmPassword, name, nickName, password, image } = redexData;
  // console.log(redexData, "redexData");
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.profileContainer}>
          <Image style={styles.profileImg} source={icons.blankPic} />
          {/* <Image style={styles.profileImg} source={{uri:image}} /> */}
          <View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.subText}>{nickName}</Text>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.innerButton}
          onPress={onPress}>
          <AppIcon name="plus" size={14} color={COLORS.white} />
          <Text style={styles.buttonText}>{AddEvent}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  profileImg: {
    width: 44,
    height: 44,
    resizeMode: 'contain',
    borderRadius: 22,
  },
  nameText: {
    color: COLORS.black,
    fontSize: SIZES.font,
    fontWeight: '600',
  },
  subText: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '400',
  },
  innerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    gap: 4,
  },
  buttonText: {
    color: COLORS.white,
  },
});

export default HomeHeaderBar;
