import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS, SIZES, images} from '../../../../../constants';
import Entypo from 'react-native-vector-icons/Entypo';

const ReimbursementsData = ({onPressView}) => {
  const [selectedItemId, setselectedItemId] = useState(null);
  const data = [
    {img: images.Adam,color: COLORS.red,name: 'Sean',Unpaid: 'Unpaid',price: 'Vodka - $36',ViewAndpay: 'Pay',id: 1,},
    {img: images.Adam,color: COLORS.green,name: 'Sean',Unpaid: 'Paid',price: '801 E. Seneca St',ViewAndpay: 'View',id: 2,},
    {img: images.Adam,color: COLORS.green,name: 'Sean',Unpaid: 'Paid',price: '801 E. Seneca St',ViewAndpay: 'View',id: 3,},
    {img: images.Adam,color: COLORS.green,name: 'Sean',Unpaid: 'Paid',price: '801 E. Seneca St',ViewAndpay: 'View',id: 4,},
  ];

  const handleRadioClick = itemId => {
    setselectedItemId(selectedItemId === itemId ? null : itemId);
  };

  const RadioBtn = ({itemId}) => {
    return (
      <View style={{gap: 10, top: '-4%'}}>
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.CheckboxContainer}
          onPress={() => handleRadioClick(itemId)}>
          {selectedItemId === itemId ? (
            <View style={styles.checkBox}>
              <Entypo name="check" size={SIZES.medium} color={COLORS.white} />
            </View>
          ) : null}
        </TouchableOpacity>
        <Text style={styles.priceStyle}>#1</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <View style={styles.mapContainer} key={index}>
          <RadioBtn itemId={item.id} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '90%',
              paddingVertical: 2,
            }}>
            <View style={{gap: 8, marginVertical: 4}}>
              <View style={styles.imgWrappeer}>
                <Image style={styles.imgStyle} source={item.img} />
                <Text style={styles.nameStyle}>{item.name}</Text>
              </View>
              <Text style={styles.priceStyle}>{item.price}</Text>
              <View
                style={{
                  ...styles.dotWrapper,
                  backgroundColor:
                    item.Unpaid === 'Paid'
                      ? 'rgba(22, 128, 98, 0.2)'
                      : 'rgba(255, 0, 0, 0.2)',
                }}>
                <View
                  style={{
                    ...styles.doStyle,
                    backgroundColor: item.color,
                  }}></View>
                <Text style={{...styles.unPaidText, color: item.color}}>
                  {item.Unpaid}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={item.id !== 1 && onPressView} 
              style={{
                ...styles.PayWrapper,
                backgroundColor:
                  item.ViewAndpay === 'Pay' ? COLORS.primary : COLORS.secondary,
                borderWidth: 1,
                borderColor: COLORS.primary,
              }}>
              <Text
                style={{
                  ...styles.viewText,
                  color:
                    item.ViewAndpay === 'Pay' ? COLORS.white : COLORS.primary,
                }}>
                {item.ViewAndpay}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  mapContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  imgStyle: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  imgWrappeer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  nameStyle: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  priceStyle: {
    fontSize: SIZES.medium,
    color: COLORS.gray,
    fontWeight: '500',
  },
  container: {
    paddingVertical: 12,
    flex: 1,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  doStyle: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: COLORS.gray,
  },
  dotWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    alignItems: 'center',
    width: 70,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 2,
  },
  unPaidText: {
    fontSize: SIZES.medium,
    fontStyle: '400',
  },
  viewText: {
    fontSize: SIZES.font,
    fontWeight: '600',
  },
  PayWrapper: {
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 100,
  },
  CheckboxContainer: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: COLORS.tertiary,
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
export default ReimbursementsData;
