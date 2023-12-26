import React, { useMemo, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native';
import BottomSheetModal from '@gorhom/bottom-sheet';
import { COLORS, SIZES } from '../../constants';

const AppBottomSheet = ({ onClose, onChange, children }) => {
  const snapPoints = useMemo(() => ['50%', '25%'], []);
  const bottomSheetRef = useRef(null);

  return (
    <>
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount={true}
        onClose={() => {
          onClose
        }}
        onChange={onChange}
        handleIndicatorStyle={styles.indicatorStyle}
        backdropComponent={() => (
          <Pressable
            onPress={() => bottomSheetRef.current.close()}
            style={{
              flex: 1,
              backgroundColor:"rbga(0,0,0,0.5)",
            }}
          />
        )}
      >
        <View>
          <View style={styles.headerBottomSheet}>
            <TouchableOpacity
            onPress={()=>bottomSheetRef.current.close()}
            >
              <Text style={styles.cancelBtn}>Cancel</Text>
            </TouchableOpacity>
            <Text style={styles.assText}>Assign to</Text>
            <TouchableOpacity>
              <Text style={styles.saveText}>Done</Text>
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
    paddingTop: 16,
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
