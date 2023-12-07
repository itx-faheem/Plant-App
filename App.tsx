import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import  NavigationPage from "./src/NavigationScreen/NavigationPage";

const App = () => {
  return (
    <NavigationContainer>
      <NavigationPage/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})