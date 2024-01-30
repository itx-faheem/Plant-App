import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../../../constants';

const CenterScription = () => {
  const data = [
    {bgColor: COLORS.blue, img: icons.Event, name: 'Unlimited Events'},
    {bgColor: COLORS.orange, img: icons.TaskColor, name: 'Unlimited Tasks'},
    {
      bgColor: COLORS.green,
      img: icons.BudgetingColorIcon,
      name: 'Unlimited Budgeting Item',
    },
    {
      bgColor: COLORS.red,
      img: icons.personIcons,
      name: 'Unlimited Team Member',
    },
  ];
  return (
    <View style={styles.container}>
      {data.map((item, index) => {
        return (
          <View style={styles.mapWrapper} key={index}>
            <View
              style={{
                height: 36,
                width: 36,
                borderRadius: 20,
                backgroundColor: item.bgColor,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Image style={styles.iconStyle} source={item.img} />
            </View>
            <Text style={styles.nameStyle}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default CenterScription;

const styles = StyleSheet.create({
  iconStyle: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  mapWrapper: {
    flexDirection: 'row',
    gap: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    alignItems: 'center',
  },
  container: {
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  nameStyle: {
    fontSize: SIZES.medium,
    color: COLORS.black,
    fontWeight: '500',
  },
});
