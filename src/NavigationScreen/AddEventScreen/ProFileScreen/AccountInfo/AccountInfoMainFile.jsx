import {StyleSheet, Text, View} from 'react-native';
import React, { useMemo, useRef, useState } from 'react';
import AccountComponent from '../../../../../component/appcomponent/AccountComponent';
import {COLORS, icons} from '../../../../../constants';
import {OtherandAccount} from '../../../../../component/appcomponent';
import AppBottomSheet from '../../../../../component/appcomponent/AppBottomSheet';
import LogoutComponent from './LogoutComponent';

const AccountInfoMainFile = ({handlePressLogout,Personalinformation, ChangePassword, FAQFile, Notifications, Mysubscription}) => {
  // const snapPoints = useMemo(() => ['43%', '43%'], []);
  // const [showBottom, setShowBottom] = useState(false);
  // const bottomSheetRef = useRef(null);

  // const handlePress = () => {
  //   bottomSheetRef.current?.expand();
  //   setShowBottom(true);
  // };

  // const closeBottomSheet = () => {
  //   bottomSheetRef.current?.close();
  //   setShowBottom(false);
  // };

  // useEffect(() => {
  //   const display = showBottom  ? "none" : 'flex'
  //   navigation.setOptions({ tabBarStyle: { display } })
  // }, [showBottom])


  return (
    <>
    <View>
      <OtherandAccount  accoutAndOther="Account" />
      <AccountComponent onPress={Personalinformation} styles={styles.imgStyle} source={icons.profileColor} nameProps="Personal information" />
      <AccountComponent onPress={ChangePassword} styles={styles.imgStyle} source={icons.BlackLock} nameProps="Change Password" />
      <OtherandAccount  accoutAndOther="Other" />
      <AccountComponent onPress={Mysubscription} styles={styles.imgStyle} source={icons.magic} nameProps="My subscription" />
      <AccountComponent onPress={Notifications} styles={styles.imgStyle} source={icons.bell} nameProps="Notifications" />
      <AccountComponent onPress={FAQFile} styles={styles.imgStyle} source={icons.fqa} nameProps="FAQ" />
      <AccountComponent onPress={handlePressLogout} styles={styles.imgStyle} iconColor={COLORS.red} color={{color:COLORS.red}} nameProps="Logout" />
    </View>
    
{/*     
    {
      showBottom && (
        <AppBottomSheet 
        titleProps="Confirm"
        onTouchStart={closeBottomSheet}
        snapPoints={snapPoints}
         >
          <LogoutComponent />
        </AppBottomSheet>
      )
    } */}
    </>
  );
};

export default AccountInfoMainFile;

const styles = StyleSheet.create({
  imgStyle: {
    width: 18,
    height: 18,
    resizeMode: 'contain',
    tintColor: COLORS.black,
  },
});
