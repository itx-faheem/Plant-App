import React from 'react';
import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import {COLORS, SIZES, images} from '../../../../../../constants';

const TaskCollapsibleMapData = () => {
  const data = [
    {
      title: 'Task 1',
      img: images.Sean,
      img2: images.Adam,
      name: 'Gabe, Sean',
      Pending: 'Pending',
    },
    {title: 'Task 2', img: images.Adam, name: 'Sean', Pending: 'Completed'},
  ];

  return (
    <>
      <View style={styles.container}>
        {data.map((item, index) => (
          <View style={styles.mapWrapper} key={index}>
            <View>
              <Text style={styles.titleStyle}>{item.title}</Text>
              <View>
                <View style={styles.imgWrapper}>
                  <Image style={styles.imgstyle} source={item.img} />
                  {item.title === 'Task 1' ? (
                    <Image
                      style={[styles.imgstyle, styles.secondImg]}
                      source={item.img2}
                    />
                  ) : null}
                </View>
              </View>
            </View>
            <View
              style={[
                styles.PendingText,
                {
                  backgroundColor:
                    item.Pending === 'Pending'
                      ? 'rgba(255, 165, 0, 0.15)'
                      : 'rgba(22, 128, 98, 0.15)',
                },
              ]}>
              <View
                style={[
                  styles.dotStyle,
                  {
                    backgroundColor:
                      item.Pending === 'Pending' ? COLORS.orange : COLORS.green,
                  },
                ]}></View>
              <Text
                style={{
                  color:
                    item.Pending === 'Pending' ? COLORS.orange : COLORS.green,
                  fontSize: SIZES.small,
                  fontWeight: '400',
                }}>
                {item.Pending}
              </Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder="Add Tasks"
          placeholderTextColor={COLORS.gray}
          style={styles.inputStyle}
        />
      </View>
    </>
  );
};

export default TaskCollapsibleMapData;

const styles = StyleSheet.create({
  imgstyle: {
    width: 28,
    height: 28,
    borderRadius: 14,
    resizeMode: 'contain',
    zIndex: 1,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  imgWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  secondImg: {
    zIndex: 0,
    marginLeft: '-22%',
  },
  titleStyle: {
    fontWeight: '500',
    fontSize: SIZES.font,
    color: COLORS.black,
  },
  container: {
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: COLORS.tertiary,
  },
  dotStyle: {
    width: 8,
    height: 8,
    backgroundColor: COLORS.black,
    borderRadius: 4,
  },
  mapWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  PendingText: {
    alignItems: 'center',
    gap: 5,
    flexDirection: 'row',
    paddingVertical: 2,
    paddingHorizontal: 8,
  },
  inputStyle: {
    paddingHorizontal: 32,
    color: COLORS.dark,
  },
  inputWrapper: {
    borderWidth: 0.5,
    borderColor: COLORS.secondary,
  },
});
