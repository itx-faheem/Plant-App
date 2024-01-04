import {StyleSheet, Text, View, TextInput, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons, images} from '../../../../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';
import AppCross from 'react-native-vector-icons/Entypo';
const ThreeDotBottomSheetFotter = () => {
  const data = [
    {
      img: images.profile,
      name: 'John Doe',
      email: 'john@gmail.com',
      Admin: 'Admin',
    },
    {img: images.Adam, name: 'Adam Hollingworth', email: 'adam@gmail.com'},
  ];
  return (
    <View style={styles.container}>
      <Text>Assign</Text>
      <View style={styles.inputWrapper}>
        <AppIcon name="search1" size={18} color={COLORS.gray} />
        <TextInput
          placeholder="Search"
          placeholderTextColor={COLORS.gray}
          style={styles.inputStyle}
        />
      </View>
      {data.map((item, index) => {
        return (
          <View style={styles.mapView} key={index}>
            <View style={{flexDirection:"row",alignItems:"center",gap:10}} >
              <Image style={styles.imgStyle} source={item.img} />
              <View>
                <Text style={styles.nameStyle} >{item.name}</Text>
                <Text style={styles.emailStyle} >{item.email}</Text>
              </View>
            </View>
            <View style={{flexDirection:"row",alignItems:"center",gap:10}} >
              {item.name === 'John Doe' && <Text style={styles.adminStyle}  >{item.Admin}</Text>}
              <AppCross name="cross" size={20} color={COLORS.black} />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default ThreeDotBottomSheetFotter;

const styles = StyleSheet.create({
  inputStyle: {
    fontSize: SIZES.font,
    color: COLORS.lightGray,
    fontWeight: '400',
    paddingHorizontal: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.secondary,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: 16,
    paddingHorizontal: 14,
    gap: 16,
  },
  imgStyle: {
    height: 44,
    width: 44,
    borderRadius: 22,
  },
  mapView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  nameStyle:{
    fontSize:SIZES.font,
    color:COLORS.black,
    fontWeight:"500"
  },
  adminStyle:{
    color:COLORS.primary,
    fontWeight:"400",
    fontSize:SIZES.font
  },
  emailStyle:{
    fontSize:SIZES.medium,
    color:COLORS.gray,
    fontWeight:"400"
  }
});
