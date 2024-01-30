import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppIconLeft from 'react-native-vector-icons/AntDesign';
import AppIconVideo from 'react-native-vector-icons/Feather';
import AppIconCall from 'react-native-vector-icons/Ionicons';
import {COLORS, SIZES, icons, images} from '../../../../../constants';

const ChatBoxHeader = ({leftOnPress, item}) => {
  return (
    <View>
      <View style={styles.headerWrapper}>
        <View style={styles.imgWrapperStyle}>
          <TouchableOpacity activeOpacity={0.5} onPress={leftOnPress}>
            <AppIconLeft name="left" size={15} color={COLORS.black} />
          </TouchableOpacity>
          <Image style={styles.imgStyle} source={item.img} />
          <Text style={styles.nameStyle}>{item.name}</Text>
        </View>
        <View style={styles.callAndVideoWrapper}>
          <TouchableOpacity>
            <AppIconVideo name="video" size={20} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity>
            <AppIconCall name="call-outline" size={20} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChatBoxHeader;

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  imgStyle: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    borderRadius: 20,
  },
  callAndVideoWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  imgWrapperStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  nameStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '600',
  },
});
