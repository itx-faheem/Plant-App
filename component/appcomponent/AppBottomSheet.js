import React, { useMemo, useRef, useState } from 'react';
import { StyleSheet, Text, Dimensions, View, TouchableOpacity, Pressable } from 'react-native';
import BottomSheetModal from '@gorhom/bottom-sheet';
import { COLORS, SIZES } from '../../constants';



const heightDimensions = Dimensions.get('screen').height;

const AppBottomSheet = ({ onClose, onChange, children, snapPoints, bref, backdropComponent, cancleBtn, save, cancelprops, titleProps }) => {
  // const snapPoints = useMemo(() => ['50%', '25%'], []);
  const bottomSheetRef = useRef(null);
  // const snapPoints = useMemo(() => ['75%', '75%'], []);

  const toggleFunction = () => {
    bref?.current.close();
  };

  const [isSheetOpen, setIsSheetOpen] = useState(false);



  return (
    <>
      <BottomSheetModal
        ref={bref}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount={true}
        onClose={() => {
          setIsSheetOpen(false);
          onClose
        }}
        onChange={(index) => {
          setIsSheetOpen(index === 1);
        }}
        handleIndicatorStyle={styles.indicatorStyle}
        backdropComponent={backdropComponent}

      >
        <View>
          <View style={styles.headerBottomSheet}>
            <TouchableOpacity
              onPress={cancleBtn}
            >
              <Text style={styles.cancelBtn}>{cancelprops}</Text>
            </TouchableOpacity>
            <Text style={styles.assText}>{titleProps}</Text>
            <TouchableOpacity>
              <Text style={styles.saveText}>{save}</Text>
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </BottomSheetModal>
    </>
  );
};
export default AppBottomSheet;

const styles = StyleSheet.create({
  headerBottomSheet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  indicatorStyle: {
    backgroundColor: COLORS.white,
    top: -25,
    width: 80,
    height: 8,
  },
  cancelBtn: {
    color: COLORS.black,
    fontWeight: '400',
  },
  assText: {
    fontSize: SIZES.font,
    color: COLORS.black,
    fontWeight: '500',
  },
  saveText: {
    fontWeight: '600',
    fontSize: SIZES.font,
    color: COLORS.primary,
  },
});
