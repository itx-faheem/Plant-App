import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import AppCross from 'react-native-vector-icons/Entypo';
import {COLORS} from '../../../../../constants';
import HomeSearchBarBottom from './HomeSearchBarBottom';

const HomeSearchbar = ({navigation}) => {
  return (
    <>
      <View
        style={{
          backgroundColor: COLORS.primary,
          paddingHorizontal: 16,
          paddingVertical: 12,
        }}>
        <View style={styles.searchContainer}>
          <View style={styles.innerContainer}>
            <AppIcon name="search1" color={COLORS.white} size={18} />
            <TextInput
              placeholder="Search"
              style={styles.inputStyle}
              placeholderTextColor={COLORS.white}
            />
          </View>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigation.goBack()}>
            <AppCross name="cross" color={COLORS.white} size={22} />
          </TouchableOpacity>
        </View>
      </View>
      <HomeSearchBarBottom />
    </>
  );
};

export default HomeSearchbar;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    backgroundColor: 'rgba(255,255,255, 0.2)',
    borderRadius: 8,
    width: '90%',
    paddingHorizontal: 16,
  },
  inputStyle: {
    width: '90%',
  },
});
