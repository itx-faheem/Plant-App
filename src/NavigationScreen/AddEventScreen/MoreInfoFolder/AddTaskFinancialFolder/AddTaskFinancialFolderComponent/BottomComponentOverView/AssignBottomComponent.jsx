import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES, images } from '../../../../../../../constants';

const AssignBottomComponent = () => {
  const data = [
    { img: images.profile, name: 'John Doe', email: 'john@gmail.com' },
    { img: images.Adam, name: 'Adam Hollingworth', email: 'adam@gmail.com' },
  ];

  return (
    <View style={{ paddingHorizontal: 16, paddingVertical: 14, backgroundColor:COLORS.tertiary, gap:10, }}>
      <View style={{ flexDirection: 'row', alignItems: 'center',
       gap: 5, backgroundColor:COLORS.white,borderRadius:8,
       paddingHorizontal:16
        }}>
        <AppIcon name="search1" size={20} color={COLORS.gray} />
        <TextInput
          style={styles.inputs}
          placeholder="Search"
          placeholderTextColor={COLORS.gray}
        />
      </View>
      <View style={{gap:16}} >
        {data.map((item, index) => (
          <View  style={styles.maContainer} key={index}>
            <Image style={styles.imgView} source={item.img} />
            <View style={styles.mapInnerContainer} >
              <Text style={styles.nameTitle} >{item.name}</Text>
              <Text style={styles.emailText} >{item.email}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default AssignBottomComponent;

const styles = StyleSheet.create({
  inputs: {
    fontSize: SIZES.font,
    color: COLORS.gray,
    width:"95%"
  },
  nameTitle:{
    fontWeight:'bold',
    fontSize:SIZES.font,
    color:COLORS.black
  },
  imgView:{
    width:48,
    height:48,
    borderRadius:24
  },
  maContainer:{
    flexDirection:"row",
    alignItems:"center",
    gap:10
  },
  emailText:{
    color:COLORS.gray
  },
  mapInnerContainer:{
  }
});
