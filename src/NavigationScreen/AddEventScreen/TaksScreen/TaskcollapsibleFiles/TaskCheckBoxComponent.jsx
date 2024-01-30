import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, icons} from '../../../../../constants';
import Appicon from 'react-native-vector-icons/AntDesign';

import Entypo from 'react-native-vector-icons/Entypo';

const TaskCheckBoxComponent = ({taskeditPress}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const data = [
    {
      title: 'Tito’s',
      handle: '1x Handle',
      text: 'Completed',
      time: '7:00',
      id: '1',
    },
    {
      title: 'Keystone',
      handle: '2x Racks',
      text: 'Completed',
      time: '8:30',
      id: '2',
    },
    {
      title: 'Whiteclaw',
      handle: '2x Cases',
      text: 'Completed',
      time: '8:30',
      id: '3',
    },
    {
      title: 'Tequilla',
      handle: '1x Handle',
      text: 'Completed',
      time: '8:30',
      id: '4',
    },
  ];

  const handleRadioClick = itemId => {
    setSelectedItemId(selectedItemId === itemId ? null : itemId);
  };
  const Radiobtn = ({itemId}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.CheckboxContainer}
        onPress={() => handleRadioClick(itemId)}>
        {selectedItemId === itemId ? (
          <View style={styles.checkBox}>
            <Entypo name="check" size={SIZES.medium} color={COLORS.white} />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <View
      style={{
        paddingVertical: 12,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: COLORS.tertiary,
      }}>
      {data.map((item, index) => {
        return (
          <View style={styles.container} key={index}>
            <Radiobtn itemId={item.id} />
            <TouchableOpacity onPress={taskeditPress}  activeOpacity={0.5} style={styles.innerView}>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '93%',
                  paddingVertical: 4,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                  }}>
                  <Appicon name="clockcircleo" color={COLORS.black} size={15} />
                  <Text style={styles.timeAndHandleStyle}>{item.time}</Text>
                  <View style={styles.dotStyle}></View>
                  <Text style={styles.timeAndHandleStyle}>{item.handle}</Text>
                </View>
                <View style={styles.completedWrapper}>
                  <View
                    style={[
                      styles.dotStyle,
                      {backgroundColor: COLORS.green},
                    ]}></View>
                  <Text style={styles.CompletedStyle}>Completed</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default TaskCheckBoxComponent;

const styles = StyleSheet.create({
  mapInnerWrapper: {},
  titleStyle: {
    fontSize: SIZES.font,
    fontWeight: '500',
    color: COLORS.black,
  },
  timeAndHandleStyle: {
    fontSize: SIZES.font,
    color: COLORS.gray,
    fontWeight: '500',
  },
  dotStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: COLORS.gray,
  },
  completedWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: 'rgba(22, 128, 98, 0.2)',
  },
  CompletedStyle: {
    color: COLORS.green,
    fontSize: SIZES.small,
    fontWeight: '400',
  },
  container: {
    flexDirection: 'row',
    gap: 10,
  },
  CheckboxContainer: {
    height: 20,
    width: 20,
    borderWidth: 1,
    borderRadius: 4,
    top: '1%',
    borderColor: COLORS.tertiary,
  },
  checkBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.blue,
    height: 20,
    width: 20,
    borderRadius: 4,
  },
  innerView: {
    width: '100%',
  },
});
