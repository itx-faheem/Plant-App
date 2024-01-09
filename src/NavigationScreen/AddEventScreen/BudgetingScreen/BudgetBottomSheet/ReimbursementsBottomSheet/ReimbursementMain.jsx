import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../../constants';
import ReceiptFotter from './ReceiptFotter';

const ReimbursementMain = ({ReceiptView}) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <View>
            <Text style={styles.titleStyle}>Tito’s</Text>
            <Text style={styles.vodkaStyle}>Vodka</Text>
          </View>
          <View style={styles.innerWrapper}>
            <View style={styles.TcUcWrapper}>
              <View>
                <Text style={styles.UcTcStyle}>UC</Text>
                <Text style={styles.priceStyle}>$36</Text>
              </View>
              <View>
                <Text style={styles.UcTcStyle}>TC</Text>
                <Text style={styles.priceStyle}>$36</Text>
              </View>
            </View>
            <View
              style={{
                ...styles.TcUcWrapper,
                flexDirection: 'column',
                alignItems: 'flex-end',
              }}>
              <Text style={styles.priceStyle}>1x Handle</Text>
              <View style={[styles.TcUcWrapper, styles.dotWrapper]}>
                <View style={styles.dotSytle}></View>
                <Text>Paid</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.ReceiptFotterWrapper}>
        <ReceiptFotter  ReceiptView={ReceiptView} />
      </View>
    </>
  );
};

export default ReimbursementMain;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 15,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  innerWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  TcUcWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  titleStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  vodkaStyle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '500',
  },
  UcTcStyle: {
    fontSize: SIZES.small,
    color: COLORS.gray,
    fontWeight: '400',
  },
  priceStyle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '500',
    lineHeight: 24,
  },
  dotSytle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.green,
  },
  dotWrapper: {
    backgroundColor: 'rgba(22, 128, 98, 0.2)',
    width: 55,
    justifyContent: 'center',
  },
  ReceiptFotterWrapper: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
});
