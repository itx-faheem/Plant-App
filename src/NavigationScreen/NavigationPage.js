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
  OtpCode,
  LastScreen
} from "./SignUpPages";
import { AppButton, AppHeader } from '../../component/appcomponent';
import BottomNavigation from './AddEventScreen/BottomTabNavigation/BottomNavigation';
import CreateEvent from './AddEventScreen/CreateAnEvent/CreateEvent';
import CreateBottomSheetScreen from './AddEventScreen/CreateAnEvent/CreateEventCompnent/CreateBottomSheetScreen';
import Delegates from './AddEventScreen/AddDelegatesFolder/Delegates';
import 'react-native-gesture-handler'
import MoreInfo from './AddEventScreen/MoreInfoFolder/MoreInfo';
import Invite from './AddEventScreen/InvitedFolder/Invite';
import InvitQRcode from './AddEventScreen/InvitedFolder/InvitedFolderComponent/InvitQRcode';
import CreatedEvent from './AddEventScreen/LastEventCreated.js/CreatedEvent';
import { QrCode } from './AddEventScreen/InvitedFolder/InvitedFolderComponent';
import DelegatesSupplies from './AddEventScreen/MoreInfoFolder/SuppliesFolder/DelegatesSupplies';
import AddTaskFileAction from './AddEventScreen/MoreInfoFolder/AddTaskFinancialFolder/AddTaskFileAction';
import AppBottomSheet from '../../component/appcomponent/AppBottomSheet';
import HomeSearchbar from './AddEventScreen/HomeEventScreen/HomeComponent/HomeSearchbar';
import { MainCreateComponent } from './AddEventScreen/HomeEventScreen/HomeComponent/EventCreatedComponents';


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
    // initialRouteName="defaultScreen"
    >
      {/* <Stack.Screen name='defaultScreen' component={CreatedHome} /> */}
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
          <Stack.Screen name="LastScreen" component={LastScreen} />
          <Stack.Screen name='Home' component={BottomNavigation} />
          <Stack.Screen name='CreateEvent' component={CreateEvent} />
          <Stack.Screen name='Delegates' component={Delegates} />
          <Stack.Screen name='MoreInfo' component={MoreInfo} />
          <Stack.Screen name='Invite' component={Invite} />
          <Stack.Screen name='CreatedEvent' component={CreatedEvent} />
          <Stack.Screen name='DelegatesSupplies' component={DelegatesSupplies} />
          <Stack.Screen name='AddTaskFileAction' component={AddTaskFileAction} />
          <Stack.Screen name='HomeSearchbar' component={HomeSearchbar} />
          <Stack.Screen name='MainCreateComponent' component={MainCreateComponent} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default HomeScreen;
