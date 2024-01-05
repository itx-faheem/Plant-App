import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {AppHeader} from '../../../../../../component/appcomponent';
import {COLORS, images} from '../../../../../../constants';

const HeaderScriptionFile = ({onPressLeftArrow}) => {
  return (
    <>
      <View style={styles.container}>
        <AppHeader
        onPress={onPressLeftArrow}
          color={COLORS.white}
          backgroundColor={{backgroundColor: COLORS.soft}}
          style={styles.headerStyle}
          title="My subscription"
        />
        <Image style={styles.imgStyle} source={images.Circle} />
      </View>
    </>
  );
};

export default HeaderScriptionFile;

const styles = StyleSheet.create({
  headerStyle: {
    color: COLORS.white,
  },
  imgStyle: {
    width: '100%',
    height: 70,
    resizeMode: 'cover',
    top: '-1%',
  },
  container:{
    marginBottom:"5%"
  }
});
