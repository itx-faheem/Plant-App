import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {COLORS, SIZES} from '../../../../../../constants';

const widthDimensions = Dimensions.get('screen').width;
const CreatedBox = () => {
  return (
    <View style={styles.boxContainer}>
      <View style={{gap: 12}}>
        <View style={[styles.boxInnerContainer, styles.boxone]}>
          <Text style={styles.titleText}>Guests invited</Text>
          <Text style={styles.number}>10</Text>
        </View>
        <View style={[styles.boxInnerContainer, styles.boxthree]}>
          <Text style={styles.titleText}>Going</Text>
          <Text style={styles.number}>5</Text>
        </View>
      </View>
      <View style={{gap: 12}}>
        <View style={[styles.boxInnerContainer, styles.boxtwo]}>
          <Text style={styles.titleText}>Not going</Text>
          <Text style={styles.number}>2</Text>
        </View>
        <View style={[styles.boxInnerContainer, styles.boxFour]}>
          <Text style={styles.titleText}>Awaiting RSVP</Text>
          <Text style={styles.number}>3</Text>
        </View>
      </View>
    </View>
  );
};

export default CreatedBox;

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    gap: 10,
    width: widthDimensions,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  boxInnerContainer: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 4,
    backgroundColor: COLORS.orange,
    borderRadius: 4,
    height: 66,
    alignItems: 'flex-start',
    width: widthDimensions / 2.2,
  },
  number: {
    fontSize: SIZES.xLarge,
    color: COLORS.black,
    fontWeight: '700',
  },
  titleText: {
    color: COLORS.black,
    fontSize: SIZES.medium,
    textAlign: 'left',
  },
  boxone: {
    backgroundColor: COLORS.lightPurple,
  },
  boxtwo: {
    backgroundColor: COLORS.lightGreen,
  },
  boxthree: {
    backgroundColor: COLORS.skin,
  },
  boxFour: {
    backgroundColor: COLORS.lightSkin,
  },
});
