import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {OtherandAccount} from '../../../../../component/appcomponent';
import {COLORS, SIZES, icons} from '../../../../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';

const AccountInfoMainFile = ({handlePress}) => {
  const data = [
    {compnent: 'Personalinformation',screenName: 'Personal information',img: icons.userBlack,id: '1',},
    {compnent: 'ChangePassword',screenName: 'Change Password',img: icons.BlackLock,id: '2',},
    {compnent: 'Mysubscription',screenName: 'My subscription',img: icons.magic,id: '3',},
    {compnent: 'Notifications',screenName: 'Notifications',img: icons.bell,id: '4',},
    {compnent: 'FAQFile', screenName: 'FAQ', img: icons.fqa, id: '5'},
    {compnent: 'Logout', screenName: 'Logout', id: '6'},
  ];

  return (
    <View style={styles.container}>
      <OtherandAccount accoutAndOther="Account" />
      {data.map((item, index) => (
        <View key={index}>
          <TouchableOpacity
            onPress={() => handlePress(item.compnent)}
            style={styles.mapContiner}
            activeOpacity={0.5}>
            <View style={styles.wrapper}>
              {item.screenName  === "Logout" ? (
                <Image style={styles.iconStyle} source={item.img} />
              ) : null}
              <Text
                style={{
                  fontSize: SIZES.font,
                  color: item.screenName === 'Logout' ? 'red' : COLORS.dark,
                  fontWeight: '500',
                }}>
                {item.screenName}
              </Text>
            </View>
            <View>
              <AppIcon
                name="right"
                size={20}
                color={item.screenName === ' Logout' ? 'red' : COLORS.dark}
              />
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default AccountInfoMainFile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    // flex: 1,
  },
  iconStyle: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: COLORS.dark,
  },
  mapContiner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },
});
