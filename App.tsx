import {  Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationPage from "./src/NavigationScreen/NavigationPage";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';


const App = () => {
  return (

    <GestureHandlerRootView style={{ flex: 1 }} >
      <BottomSheetModalProvider>
        <NavigationContainer>
          <NavigationPage />
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>

  )
}

export default App