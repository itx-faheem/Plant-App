import React, { useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderProfile } from './ProFileHeader';
import { AccountInfoMainFile } from './AccountInfo';
import { AppBottomSheet } from '../../../../component/appcomponent/AppBottomSheet';

const Profile = ({ navigation }) => {
  const snapPoints = useMemo(() => ['45%', '45%'], []);
  // const [showBottom, setShowBottom] = useState(false);
  // const bottomSheetRef = useRef(null);

  // const handlePress = () => {
  //   bottomSheetRef.current?.expand();
  //   setShowBottom(false);
  // };

  // const closeBottomSheet = () => {
  //   setShowBottom(true);
  //   bottomSheetRef.current?.close();
  // };

  return (
    <>
      <View style={{ flex: 1 }}>
        <HeaderProfile />
        <AccountInfoMainFile
          Personalinformation={() => navigation.navigate('Personalinformation')}
          Mysubscription={() => navigation.navigate('Mysubscription')}
          ChangePassword={() => navigation.navigate('ChangePassword')}
          Notifications={() => navigation.navigate('Notifications')}
          FAQFile={() => navigation.navigate('FAQFile')}
          // Logout={handlePress}
        />
      </View>
      {/* <AppBottomSheet
      snapPoints={snapPoints}
       >

      </AppBottomSheet> */}
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({});



// {showBottom && (
//   <AppBottomSheet onTouchStart={closeBottomSheet} ref={bottomSheetRef} titleProps="Confirm" snapPoints={snapPoints}>
//     <Text>hello world</Text>
//   </AppBottomSheet>
// )}