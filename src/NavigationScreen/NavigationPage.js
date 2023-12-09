import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  Splash,
  WelcomeScreen,
  Login, ForgotPass,
  ForgotStepto,
  SetPassword,
} from "./LoginPages";
import {
  SignUp,
  OtpCode
} from "./SignUpPages";
import { AppButton, AppHeader } from '../../component/appcomponent';
// import { SignUpForm } from './SignUpPages/SignUpComponent';
// import { OtpText } from './SignUpPages/OtpCodeComponet';


const HomeScreen = () => {
  const Stack = createNativeStackNavigator();
  const [isSplashScreen, setisSplashScreen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setisSplashScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}
      // initialRouteName="OtpText"
    >
      {/* <Stack.Screen name='OtpText' component={OtpText} /> */}
      {isSplashScreen ? (
        <Stack.Screen name="Splash" component={Splash} />
      ) : (
        <>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
          <Stack.Screen name="ForgotStepto" component={ForgotStepto} />
          <Stack.Screen name="SetPassword" component={SetPassword} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="OtpCode" component={OtpCode} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default HomeScreen;
