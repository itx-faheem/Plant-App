import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import Modal from 'react-native-modal';
import { COLORS, SIZES } from '../../../../../constants';
import AppIcon from 'react-native-vector-icons/AntDesign';

const FilterBottomSheet = ({ isVisible, onSwipeCancel,onBackdropPress,handlePress }) => {

  const [selectedFilter, setSelectedFilter] = useState(null);

   handlePress = filter => {
    setSelectedFilter(selectedFilter === filter ? null : filter)
    setTimeout(() => {
      onBackdropPress()
    }, 300);
  }


  return (
    <Modal
      isVisible={isVisible}
      onSwipeCancel={onSwipeCancel}
      swipeDirection="down"
      onBackdropPress={onBackdropPress}
      style={styles.modalView}
      backdropOpacity={0.750}
    >
      <View style={styles.modalContainer}>
        <View style={{ justifyContent: "center", alignItems: "center" }} >
          <View style={styles.modalindcater} ></View>
          <Text style={[styles.titleText, { paddingVertical: 10 }]} >Filter</Text>
        </View>
        <View style={styles.eventContainer} >
          <TouchableOpacity
            onPress={() => handlePress("Event Data")}
            activeOpacity={0.5}
            style={styles.innerView} >
            <Text style={styles.titleText} >Event Date</Text>
            {
              selectedFilter === 'Event Data' && <AppIcon name='check' color={COLORS.black} size={20} /> 

            }
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handlePress("React")}
            activeOpacity={0.5}
            style={styles.innerView} >
            <Text style={styles.titleText} >React</Text>
            {
              selectedFilter === 'React' && <AppIcon name='check' color={COLORS.black} size={20} />
            }

          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default FilterBottomSheet;

const styles = StyleSheet.create({
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    height: 148,
    backgroundColor: COLORS.white,
    width: '100%',
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
  },
  modalView: {
    margin: 0,
  },
  modalindcater: {
    backgroundColor: COLORS.white,
    width: 90,
    height: 9,
    borderRadius: 100,
    width: 90,
    top: -20,
  },
  eventContainer: {
  },
  innerView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: COLORS.tertiary,
    borderWidth: 1,
    borderColor: COLORS.secondary,
  },
  titleText: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: "600"
  }
});

