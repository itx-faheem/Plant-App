import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {COLORS, SIZES, icons} from '../../../../../../constants';

const CreatedCollapsibleComponent = ({delegatesPresAction, addTaskOnPress}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={addTaskOnPress}
        style={styles.innerContainer}
        activeOpacity={0.5}>
        <View style={styles.imgWrapper}>
          <Image style={styles.tasksTime} source={icons.Tasks} />
        </View>
        <Text style={styles.textColor}>Add Tasks</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={delegatesPresAction}
        style={styles.innerContainer}
        activeOpacity={0.5}>
        <View style={{...styles.imgWrapper, backgroundColor: COLORS.soft}}>
          <Image style={styles.tasksTime} source={icons.personIcons} />
        </View>
        <Text style={styles.textColor}>Delegates</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CreatedCollapsibleComponent;

const styles = StyleSheet.create({
  tasksTime: {
    tintColor: COLORS.white,
    width: 18,
    height: 18,
    resizeMode: 'contain',
  },
  imgWrapper: {
    backgroundColor: COLORS.primary,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    width: '50%',
    gap: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  textColor: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    paddingVertical: 12,
    // flex: 1,
  },
});
