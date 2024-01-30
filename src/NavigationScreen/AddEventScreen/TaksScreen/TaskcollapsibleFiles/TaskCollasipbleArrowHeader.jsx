import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../../../../constants';
import Entypo from 'react-native-vector-icons/Entypo';
import Collapsible from 'react-native-collapsible';

const TaskCollasipbleArrowHeader = ({
  collapsibletitle,
  sethandleCollapsibleBuy,
  handleupdown,
  name,
  threeDotsPress,
}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 14,
      }}>
      <Text
        style={{
          fontSize: SIZES.font,
          color: COLORS.black,
          fontWeight: '600',
        }}>
        {collapsibletitle}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
        }}>
        <TouchableOpacity onPress={handleupdown} activeOpacity={0.5}>
          <AppIcon name={name} size={18} color={COLORS.black} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} onPress={threeDotsPress}>
          <Entypo name="dots-three-horizontal" size={18} color={COLORS.black} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TaskCollasipbleArrowHeader;
