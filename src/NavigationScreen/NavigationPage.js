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

  OtpCode,
  LastScreen,
  SignUp
} from "./SignUpPages";
import { AppButton, AppHeader, StepHeader } from '../../component/appcomponent';
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
import { ChangePassword } from './AddEventScreen/ProFileScreen/ChangePasswordFolder';
import { Notifications } from './AddEventScreen/ProFileScreen/NotificationsFolder';
import { FAQFile } from './AddEventScreen/ProFileScreen/FAQFolder';
import { Mysubscription } from './AddEventScreen/ProFileScreen/MysubscriptionFolder';
import { Personalinformation } from "./AddEventScreen/ProFileScreen/PersonalinformationFolder";
import { CreatedBottomSheetandInputheader } from './AddEventScreen/TaksScreen/SeacondHeader';
import SubscriptionDetail from './AddEventScreen/ProFileScreen/MysubscriptionFolder/PremiumFile/SubscriptionDetail';
import { ChatBox } from './AddEventScreen/MessagesScreen/MessagesComponent';
import { AddTaskPersonMainFile } from './AddEventScreen/TaksScreen/BuySuppliesComponents';
import { useSelector } from 'react-redux';


const HomeScreen = () => {
  const Stack = createNativeStackNavigator();
  const [isSplashScreen, setisSplashScreen] = useState(true);
  const auth = useSelector(state => state.signCartRduser.SignUpInfo)
  // console.log('AUTJDATA',auth);

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
      {/* <Stack.Screen name='defaultScreen' component={StepHeader} /> */}

      {
        isSplashScreen && (
          <Stack.Screen name="Splash" component={Splash} />

        )

      }
      {
        !auth.email ? (
          <>
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ForgotPass" component={ForgotPass} />
            <Stack.Screen name="ForgotStepto" component={ForgotStepto} />
            <Stack.Screen name="SetPassword" component={SetPassword} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="OtpCode" component={OtpCode} />
            <Stack.Screen name="LastScreen" component={LastScreen} />
          </>
        ) : (
          <>
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
            <Stack.Screen name='Personalinformation' component={Personalinformation} />
            <Stack.Screen name='ChangePassword' component={ChangePassword} />
            <Stack.Screen name='Notifications' component={Notifications} />
            <Stack.Screen name='FAQFile' component={FAQFile} />
            <Stack.Screen name='Mysubscription' component={Mysubscription} />
            <Stack.Screen name='SubscriptionDetail' component={SubscriptionDetail} />
            <Stack.Screen name='ChatBox' component={ChatBox} />
            <Stack.Screen name='AddTaskPersonMainFile' component={AddTaskPersonMainFile} />


          </>
        )

      }

    </Stack.Navigator>
  );
};

export default HomeScreen;
