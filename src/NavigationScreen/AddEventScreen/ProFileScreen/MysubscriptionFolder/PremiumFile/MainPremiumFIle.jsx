import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  CenterScription,
  HeadeScriptionFile,
  MidScriptionFile,
} from '../SubScriptionComponent';
import SubScriptionFooterBtn from '../SubScriptionComponent/SubScriptionFooterBtn';
import SubscriptionDetail from './SubscriptionDetail';

const MainPremiumFIle = ({
  onPressLeftArrow,
  StartPremiumNowPress,
  onPressLeftArrowTwo,
}) => {
  return (
    <View style={{gap: 24}}>
      <HeadeScriptionFile onPressLeftArrow={onPressLeftArrow} />
      <MidScriptionFile MidScriptionProp="Get the best feature" />
      <CenterScription />
      <SubScriptionFooterBtn  StartPremiumNowPress={StartPremiumNowPress}     />
    </View>
  );
};

export default MainPremiumFIle;

const styles = StyleSheet.create({});
