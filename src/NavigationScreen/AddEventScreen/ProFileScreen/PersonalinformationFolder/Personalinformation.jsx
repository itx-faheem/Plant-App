import {View} from 'react-native';
import React from 'react';
import {AppHeader} from '../../../../../component/appcomponent';
import {COLORS} from '../../../../../constants';
import PersonalInfoInput from './PersonalInfoInput';

const Personalinformation = ({navigation}) => {
  return (
    <View>
      <AppHeader
        backgroundColor={{backgroundColor: COLORS.secondary}}
        title="Personal Information"
        color={COLORS.black}
        onPress={() => navigation.goBack()}
      />
      <PersonalInfoInput />
    </View>
  );
};

export default Personalinformation;
