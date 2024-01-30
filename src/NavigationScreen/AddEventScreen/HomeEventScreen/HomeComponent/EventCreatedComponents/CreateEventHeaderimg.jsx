import {
  Image,
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FinancialHeader} from '../../../MoreInfoFolder/AddTaskFinancialFolder/AddTaskFinancialFolderComponent';
import {COLORS, icons, images} from '../../../../../../constants';

const heightDimensions = Dimensions.get('screen').height;

const CreateEventHeaderimg = ({onbackCross}) => {
  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            zIndex: 1,
            position: 'absolute',
            width: '100%',
            backgroundColor: 'rgba(0,0,0,0.05)',
            shadowColor: COLORS.black,
            elevation: 20,
          }}>
          <FinancialHeader
            iconColor={COLORS.white}
            onbackCross={onbackCross}
            tintColor={{tintColor: COLORS.white}}
            gap={{gap: 33}}
          />
        </View>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={images.invitepicture}
        />
        <View
          style={{
            alignItems: 'flex-end',
            bottom: '5%',
            right: 0,
            paddingHorizontal: 16,
            position: 'absolute',
          }}>
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              backgroundColor: COLORS.white,
              width: 40,
              height: 40,
              justifyContent: 'center',
              borderRadius: 20,
              alignItems: 'center',
              borderWidth: 1,
              borderColor: COLORS.tertiary,
            }}>
            <Image
              style={{width: 18, height: 18, resizeMode: 'contain'}}
              source={icons.edit}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  image: {
    height: heightDimensions / 2.2,
    width: '100%',
    zIndex: 0,
    backgroundColor: COLORS.grayDark,
    resizeMode: 'contain',
    top: '-0.5%',
  },
});

export default CreateEventHeaderimg;
