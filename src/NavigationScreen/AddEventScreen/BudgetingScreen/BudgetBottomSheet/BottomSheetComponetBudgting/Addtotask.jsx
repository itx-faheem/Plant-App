import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import {COLORS, SIZES} from '../../../../../../constants';

const Addtotask = () => {
  const UsTcComponent = () => {
    return (
      <View style={styles.uctcContainer}>
        <View style={styles.ucWrapper}>
          <Text style={styles.uctcText}>Uc</Text>
          <View style={styles.PriceWrapper}>
            <TextInput
              style={styles.PriceStyle}
              placeholder="$36"
              placeholderTextColor={COLORS.black}
            />
          </View>
        </View>
        <View style={styles.ucWrapper}>
          <Text style={styles.uctcText}>Tc</Text>
          <View style={styles.PriceWrapper}>
            <TextInput
              style={styles.PriceStyle}
              placeholder="$36"
              placeholderTextColor={COLORS.black}
            />
          </View>
        </View>
      </View>
    );
  };
  return (
    <View style={{gap: 16}}>
      <View style={{gap: 4}}>
        <Text style={styles.addtoStyle}>Add to task</Text>
        <View style={styles.iconWrapper}>
          <Text style={styles.butSytle}>Buy supplies</Text>
          <TouchableOpacity activeOpacity={0.5}>
            <AppIcon name="down" color={COLORS.black} size={17} />
          </TouchableOpacity>
        </View>
      </View>
      <UsTcComponent />
    </View>
  );
};

export default Addtotask;

const styles = StyleSheet.create({
  iconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  butSytle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  addtoStyle: {
    fontSize: SIZES.medium,
    color: COLORS.dark,
    fontWeight: '400',
  },
  uctcContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  PriceWrapper: {
    // paddingVertical: 12,
    paddingHorizontal: 16,
    gap: 16,
    backgroundColor: COLORS.white,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  PriceStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  ucWrapper: {
    flex: 1,
    width: '100%',
    gap: 4,
  },
  uctcText: {
    fontSize: SIZES.medium,
    color: COLORS.dark,
    fontWeight: '500',
  },
});
