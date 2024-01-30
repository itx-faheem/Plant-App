import React, { useMemo, useRef, useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HeaderProfile } from './ProFileHeader';
import { AccountInfoMainFile, LogoutComponent } from './AccountInfo';
import AppBottomSheet from '../../../../component/appcomponent/AppBottomSheet';
import { useDispatch, useSelector } from 'react-redux';
import { resetSignUpInfo } from '../../../redux/userReducer';


const Profile = ({ navigation }) => {
  const userData = useSelector(state => state)
  console.log(userData, "userData ");
  const { email, password, conformPassword, nickName } = userData
  const dispatch = useDispatch()
  const snapPoints = useMemo(() => ['45%', '45%'], []);
  const [handleBottomSheet, sethandleBottomSheet] = useState(false)
  const bref = useRef(null)
  const handlePressLogout = () => {
    bref.current?.expand()
    sethandleBottomSheet(true)
  }
  const onTouchStart = () => {
    bref.current?.close()
    sethandleBottomSheet(false)
  }

  useEffect(() => {
    const display = handleBottomSheet ? "none" : 'flex'
    navigation.setOptions({ tabBarStyle: { display } })
  }, [handleBottomSheet])

  // const handleLogout = () => {
  //   dispatch(resetSignUpInfo());
  //   navigation.navigate("WelcomeScreen")
  // };

  const handleLogout = async () => {
    console.log('Before Logout - UserData:', userData);
    sethandleBottomSheet(false);
    dispatch(resetSignUpInfo());
    console.log('After Logout - UserData:', userData);
  };
  // m1@gmail.com
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
          handlePressLogout={handlePressLogout}
        />
      </View>
      {handleBottomSheet && (
        <AppBottomSheet
          snapPoints={snapPoints}
          bref={bref}
          onTouchStart={onTouchStart}
        >
          <LogoutComponent onPressLogOut={() => handleLogout()} />
        </AppBottomSheet>
      )

      }
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