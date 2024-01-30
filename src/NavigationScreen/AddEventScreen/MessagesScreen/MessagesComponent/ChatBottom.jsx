import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import Camera from 'react-native-vector-icons/Feather';
import {COLORS, SIZES, icons} from '../../../../../constants';

const ChatBottom = ({textInputRef}) => {
  return (
    <View style={styles.container}>
      {/* <View style={styles.inputFirstWrapper}> */}
      <TouchableOpacity>
        <AppIcon name="plus" size={18} color={COLORS.black} />
      </TouchableOpacity>
      <View style={styles.inputWrapper}>
        <TextInput
        ref={textInputRef}
          style={styles.inputStyle}
          placeholderTextColor={COLORS.gray}
          placeholder="Search"
        />
        <TouchableOpacity>
          <Image style={styles.imgStyle} source={icons.send} />
        </TouchableOpacity>
      </View>

      <View style={styles.inconWrapper}>
        <TouchableOpacity>
          <Camera size={20} color={COLORS.black} name="camera" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Camera size={20} color={COLORS.black} name="mic" />
        </TouchableOpacity>
      </View>
    </View>
    // </View>
  );
};

export default ChatBottom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    borderWidth:1,
    borderColor:COLORS.tertiary
  },
  inconWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '70%',
    borderRadius: 8,
    borderColor: COLORS.tertiary,
    paddingHorizontal: 8,
  },
  inputStyle: {
    width: '90%',
    paddingHorizontal: 14,
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },

  imgStyle: {
    tintColor: COLORS.primary,
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
});
