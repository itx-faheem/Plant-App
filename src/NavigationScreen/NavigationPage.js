import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Splash, WelcomeScreen} from "./LoginPages";
import { AppButton } from '../../component/appcomponent';


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
    //   initialRouteName="AppButton"

    >
    {/* <Stack.Screen  name='AppButton' component={AppButton} /> */}
      {isSplashScreen ? (
        <Stack.Screen name="Splash" component={Splash} />
      ) : (
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      )}
    </Stack.Navigator>
  );
};

export default HomeScreen;
