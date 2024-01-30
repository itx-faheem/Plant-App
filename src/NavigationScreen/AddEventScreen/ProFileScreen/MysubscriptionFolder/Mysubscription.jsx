import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainPremiumFIle} from './PremiumFile';
import SubscriptionDetail from './PremiumFile/SubscriptionDetail';

const Mysubscription = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <MainPremiumFIle
      onPressLeftArrowtwo={() => navigation.goBack()}
        onPressLeftArrow={() => navigation.goBack()}
        StartPremiumNowPress={() => navigation.navigate('SubscriptionDetail')}
      />
    </View>
  );
};

export default Mysubscription;
const styles = StyleSheet.create({});
