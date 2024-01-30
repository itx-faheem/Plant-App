import React, {useState} from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import AppIcon from 'react-native-vector-icons/Entypo';
import {COLORS, icons} from '../../../constants';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {SignUpInfo} from '../../redux/userReducer';

const SignUpImg = () => {
  const [galleryImg, setgalleryImg] = useState('');
  // const defaultImg = icons.blankPic;
  // const dispatch = useDispatch();
  // const galleryiamges = useSelector(
  //   state => state.signCartRduser.SignUpInfo.image,
  // );
  const Picker = async () => {
    // alert("oka")
    // const options = {
    //   mediaType: 'photo',
    // };
    // const result = await launchImageLibrary(options);
    // if (result?.assets) {
    //   dispatch(SignUpInfo(result?.assets[0]?.uri));
    //   setgalleryImg(result?.assets[0].uri);
    //   return;
    // }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        // source={galleryImg ? {uri: galleryImg} : defaultImg}
        source={icons.blankPic}
      />
      {/* <Image
        style={styles.image}
        source={galleryImg ? {uri: galleryImg} : defaultImg}
      /> */}
      <TouchableOpacity
        onPress={Picker}
        activeOpacity={0.5}
        style={styles.editWrapper}>
        <AppIcon name="edit" color={COLORS.black} size={18} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    borderRadius: 40,
    zIndex: 0,
  },
  editWrapper: {
    backgroundColor: COLORS.white,
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: '54%',
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
});

export default SignUpImg;

// dispatch(SignUpInfo(result?.assets[0]?.uri));
// const galleryiamges = useSelector(state => state?.signCartRduser?.SignUpInfo);
// console.log(galleryiamges, 'galleryiamges');
// const data = {...galleryiamges,image:result?.assets[0]?.uri}
