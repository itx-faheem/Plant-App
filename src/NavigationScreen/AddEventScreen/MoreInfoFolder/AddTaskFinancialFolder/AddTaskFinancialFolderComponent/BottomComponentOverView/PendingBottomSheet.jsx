import {StyleSheet, Text, TouchableOpacity, View, Button} from 'react-native';
import React, {useState} from 'react';
import AppIcon from 'react-native-vector-icons/AntDesign';
import {COLORS, SHADOWS, SIZES} from '../../../../../../../constants';
import Modal from 'react-native-modal';
const PendingBottomSheet = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const handlePress = () => {
    setTimeout(() => {
      setModalVisible(false);
    }, 300);
  };
  const ModalChild = ({title}) => {
    return (
      <TouchableOpacity onPress={handlePress} style={styles.containerChild}>
        <Text
          style={{
            fontSize: SIZES.font,
            color: COLORS.black,
            fontWeight: '500',
          }}>
          {title}
        </Text>
        <AppIcon name="right" color={COLORS.black} size={20} />
      </TouchableOpacity>
    );
  };
  return (
    <>
      <TouchableOpacity
        onPress={toggleModal}
        activeOpacity={0.5}
        style={styles.innerContainer}>
        <Text style={styles.pendingText}>Pending</Text>
        <AppIcon name="down" size={14} color={COLORS.orange} />
      </TouchableOpacity>
      <Modal
        style={styles.modalStyle}
        onBackdropPress={handlePress}
        transparent={true}
        backdropOpacity={0}
        isVisible={isModalVisible}>
        <View style={styles.modalInner}>
          <View>
            <ModalChild title="Pending" />
            <View
              style={{borderColor: COLORS.secondary, borderWidth: 1}}></View>
            <ModalChild title="Completed" />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default PendingBottomSheet;
const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.tertiary,
    paddingVertical: 8,
    paddingHorizontal: 16,
    gap: 6,
    borderRadius: 100,
    backgroundColor: COLORS.white,
  },
  pendingText: {
    color: COLORS.orange,
    fontWeight: '600',
    fontSize: SIZES.font,
  },
  modalInner: {
    backgroundColor: COLORS.white,
    width: '60%',
    height: 90,
    borderRadius: 8,
    shadowColor: SHADOWS.medium,
    elevation: 5,
  },
  modalStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    top: '-1%',
  },
  containerChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
});
