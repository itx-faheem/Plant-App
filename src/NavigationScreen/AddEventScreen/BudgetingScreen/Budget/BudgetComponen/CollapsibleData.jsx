import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../../../../../constants';
import Entypo from 'react-native-vector-icons/Entypo';

const CollapsibleData = ({CollapsibleDataPress}) => {
  const [checkBoxs, setcheckBoxs] = useState(null);

  const data = [
    {
      id: 1,
      title: 'Tito’s',
      uc: 'Uc',
      tc: 'Tc',
      Price: '$36',
      Handle: '1x Handle',
      Liter: 'Liter',
    },
    {
      id: 2,
      title: 'keystone',
      uc: 'Uc',
      tc: 'Tc',
      Price: '$36',
      Handle: '1x Handle',
      Liter: 'Liter',
    },
    {
      id: 3,
      title: 'Whiteclaw',
      uc: 'Uc',
      tc: 'Tc',
      Price: '$36',
      Handle: '1x Handle',
      Liter: 'Liter',
    },
    {
      id: 4,
      title: 'Tequilla',
      uc: 'Uc',
      tc: 'Tc',
      Price: '$36',
      Handle: '1x Handle',
      Liter: 'Liter',
    },
  ];

  const handlePress = itemId => {
    setcheckBoxs(checkBoxs === itemId ? null : itemId);
  };

  const RadioBtn = ({itemId}) => {
    return (
      <TouchableOpacity
        onPress={() => handlePress(itemId)}
        activeOpacity={0.5}
        style={styles.CheckboxContainer}>
        {checkBoxs === itemId ? (
          <View style={styles.checkBox}>
            <Entypo name="check" size={SIZES.medium} color={COLORS.white} />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        paddingVertical: 12,
        paddingHorizontal: 14,
        gap: 10,
        borderWidth: 1,
        borderColor: COLORS.tertiary,
      }}>
      {data.map((item, index) => (
        <TouchableOpacity

          activeOpacity={0.5}
          onPress={CollapsibleDataPress}
          key={index}
          style={{flexDirection: 'row', gap: 10}}>
          <RadioBtn itemId={item.id} />
          <View style={styles.innerWrapper}>
            <Text style={styles.titleText}>{item.title}</Text>
            <View style={styles.innerContainer}>
              <View style={styles.upPriceWrapper}>
                <View style={{gap: 5}}>
                  <Text style={styles.uctc}>{item.uc}</Text>
                  <Text style={styles.PriceStyle}>{item.Price}</Text>
                </View>
                <View style={{gap: 5}}>
                  <Text style={styles.uctc}>{item.tc}</Text>
                  <Text style={styles.PriceStyle}>{item.Price}</Text>
                </View>
              </View>
              <Text style={styles.handleStyle}>{item.Handle}</Text>
            </View>
            <Text style={styles.liter}>{item.Liter}</Text>
          </View>
        </TouchableOpacity>
      ))}
      <View>
        <Text>Add items</Text>
      </View>
    </View>
  );
};

export default CollapsibleData;

const styles = StyleSheet.create({
  titleText: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
    lineHeight: 24,
  },
  innerWrapper: {
    // flexDirection:"row"
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent:"space-between"
    paddingVertical: 2,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '75%',
    justifyContent: 'space-between',
  },
  upPriceWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  PriceStyle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '600',
  },
  uctc: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '400',
  },
  handleStyle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '500',
  },
  liter: {
    color: COLORS.lightGray,
    fontSize: SIZES.medium,
    fontWeight: '400',
  },
  CheckboxContainer: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.tertiary,
    top: '2%',
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    height: 20,
    width: 20,
    borderRadius: 4,
  },
});
