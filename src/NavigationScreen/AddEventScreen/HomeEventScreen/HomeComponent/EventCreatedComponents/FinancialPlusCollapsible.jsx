import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from 'react-native';
import Collapsible from 'react-native-collapsible';
import React, {useState} from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import Appdost from 'react-native-vector-icons/Entypo';
import {COLORS, SIZES} from '../../../../../../constants';

const heightDimensions = Dimensions.get('screen').height;
const FinancialPlusCollapsible = () => {
  const data = [
    {titleText: 'Budget', price: '$1000'},
    {titleText: 'Amount spent', price: '$472'},
    {titleText: 'Amount left to spend', price: '$528'},
    {titleText: 'Estimated remaining costs', price: '$285'},
    {titleText: 'Pending reimbursements', price: '$425'},
  ];
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handlePress = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <View style={[styles.container, {height: !isCollapsed &&  heightDimensions / 2.50,}]}>
      <View style={styles.FinancialWrapper}>
        <Text style={styles.FinancialText}>Financial Overview</Text>
        <View style={styles.iconVIew}>
          <TouchableOpacity activeOpacity={0.5} onPress={handlePress}>
            <AppIcon
              name={isCollapsed ? 'down' : 'up'}
              size={20}
              color={COLORS.black}
            />
          </TouchableOpacity>
          <Appdost
            name="dots-three-horizontal"
            size={20}
            color={COLORS.black}
          />
        </View>
      </View>
      <Collapsible collapsed={isCollapsed}>
        <View style={styles.CollapsibleWarpper}>
          {data.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.titleText}>{item.titleText}</Text>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
          ))}
        </View>
      </Collapsible>
    </View>
  );
};

export default FinancialPlusCollapsible;

const styles = StyleSheet.create({
  FinancialWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    paddingVertical: 12,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
  },
  container: {
    backgroundColor: COLORS.secondary,
    // height:
  },
  iconVIew: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  CollapsibleWarpper: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    gap: 2,
    backgroundColor:COLORS.white
  },
  FinancialText: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '600',
  },
  titleText: {
    fontSize: SIZES.medium,
    fontWeight: '500',
    color: COLORS.dark,
  },
  priceText: {
    fontSize: SIZES.font,
    fontWeight: '600',
    color: COLORS.black,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
