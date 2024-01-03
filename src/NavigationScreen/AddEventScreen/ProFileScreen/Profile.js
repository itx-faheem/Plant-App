import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HeaderProfile } from './ProFileHeader'
import { AccountInfoMainFile } from './AccountInfo'

const Profile = ({ navigation }) => {
  const handlePress = (component) => {
    navigation.navigate(component);
  };
  return (
    <View style={{ flex: 1 }} >
      <HeaderProfile />
      <AccountInfoMainFile handlePress={handlePress} />
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})