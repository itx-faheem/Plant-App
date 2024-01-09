import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES} from '../../../../../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';

const QuantityItems = () => {
  const [count, setcount] = useState(1);
  const handlePressmin = () => {
    count > 1 ? setcount(count - 1) : null;
  };
  const handlePressadd = () => {
    setcount(count + 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.innerWrapper}>
        <TouchableOpacity onPress={() => handlePressmin()} activeOpacity={0.5}>
          <AppIcon name="minus" size={20} color={COLORS.gray} />
        </TouchableOpacity>
        <Text style={styles.numnerStyle}> {count}x</Text>
        <TouchableOpacity onPress={() => handlePressadd()} activeOpacity={0.5}>
          <AppIcon name="plus" size={20} color={COLORS.gray} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <TextInput
          placeholder="Handle"
          placeholderTextColor={COLORS.black}
          style={styles.inputSupplies}
        />
      </View>
    </View>
  );
};

export default QuantityItems;

const styles = StyleSheet.create({
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: COLORS.white,
    borderRadius: 8,
  },
  inputSupplies: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
    backgroundColor: COLORS.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    width: '100%',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  numnerStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
  },
});
