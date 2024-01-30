import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../../constants';
import AppIconCheck from 'react-native-vector-icons/FontAwesome6';

const RenderItemMessage = ({item, handlepress}) => {
  const isSent = item.id === 2 || item.id === 4;
  const isDoubleCheck = item.id === 3 || item.id === 5;
  const isGap = item.id === 1 || item.id === 3;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={handlepress}
      style={styles.container}>
      <View style={styles.innerWrapper}>
        <View style={styles.Wrapper}>
          <Image style={styles.imgStyle} source={item.img} />
          <View>
            <Text style={styles.nameStyle}>{item.name}</Text>
            <Text style={styles.msgStyle}>{item.msg}</Text>
            <View style={styles.checkWrapper}>
              {isSent && (
                <>
                  <Image source={icons.send} style={styles.sendImg} />
                  <Text style={{...styles.readText, color: COLORS.gray}}>
                    {item.sent}
                  </Text>
                </>
              )}
              {isDoubleCheck && (
                <>
                  <AppIconCheck
                    color={COLORS.green}
                    size={10}
                    name="check-double"
                  />
                  <Text style={styles.readText}>{item.read}</Text>
                </>
              )}
            </View>
          </View>
        </View>
        <View
          style={{
            ...styles.dotWrapper,
            gap: isGap ? 16 : null,
          }}>
          <View
            style={{
              ...styles.dotStyle,
              backgroundColor: isGap && COLORS.green,
            }}></View>
          <Text style={styles.readMsg} >{item.time}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RenderItemMessage;

const styles = StyleSheet.create({
  imgStyle: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  Wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  dotStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  dotWrapper: {
    alignItems: 'flex-end',
  },
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  nameStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '600',
    lineHeight: 24,
  },
  msgStyle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '400',
  },
  readMsg: {
    fontSize: SIZES.xSmall,
    color: COLORS.gray,
  },
  readText: {
    fontSize: SIZES.small,
    color: COLORS.green,
    fontWeight: '400',
  },
  checkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  sendImg: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  },
});
