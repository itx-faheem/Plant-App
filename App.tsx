import { Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationPage from "./src/NavigationScreen/NavigationPage";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Provider } from 'react-redux'
import { store } from './src/redux';
import persistStore from "redux-persist/es/persistStore";
import { PersistGate } from "redux-persist/integration/react";
let persist = persistStore(store)
const App = () => {

  return (
    <GestureHandlerRootView style={{ flex: 1 }} >
      <BottomSheetModalProvider>
        <NavigationContainer>
          <Provider store={store}>
            {/* <PersistGate persistor={persist} > */}
            <NavigationPage />
            {/* </PersistGate > */}
          </Provider>
        </NavigationContainer>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}

export default App