import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, SIZES, icons } from '../../../../../../constants';

const ReceiptFooter = ({ReceiptView}) => {
  return (
    <View style={{gap:10}} >
      <Text style={styles.ReceiptStyle} >Receipt</Text>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.imgWrapper}>
            <Image
              style={styles.icon}
              source={icons.TaskColor}
            />
          </View>
          <Text>Receipt</Text>
        </View>
        <TouchableOpacity activeOpacity={0.5} onPress={ReceiptView}  >
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  imgWrapper: {
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  viewText: {
    color: COLORS.primary,
    fontSize: SIZES.medium,
    fontWeight: '500',
  },
  ReceiptStyle:{
    fontSize:SIZES.medium,
    color:COLORS.dark,
    fontWeight:"500"
  }
});

export default ReceiptFooter;
