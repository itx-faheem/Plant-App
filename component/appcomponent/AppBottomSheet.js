import { View, Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native';
import BottomSheetModal, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import { COLORS, SIZES } from '../../constants';
import React, { useMemo } from "react";
import Animated, {
  Extrapolate,
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";
const heightDimensions = Dimensions.get("screen").height;

const AppBottomSheet = ({ index,stylesBottomSheet,children, snapPoints, bref, saveBtn, onTouchStart, cancelprops, titleProps, save, cancleBtn, cancelColor, saveColor, }) => {
  return (
    <>
      <BottomSheetModal
        ref={bref}
        index={index}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount={true}
        backdropComponent={(props) => <CustomBackdrop {...props} onTouchStart={onTouchStart} />}
        handleIndicatorStyle={styles.indicatorStyle}
        style={stylesBottomSheet}

      >
        <View style={styles.headerBottomSheet}>
          <TouchableOpacity onPress={cancleBtn}>
            <Text style={[styles.cancelBtn, cancelColor]}>{cancelprops}</Text>
          </TouchableOpacity>
          <Text style={styles.assText}>{titleProps}</Text>
          <TouchableOpacity onPress={saveBtn}  >
            <Text style={[styles.saveText, saveColor]}>{save}</Text>
          </TouchableOpacity>
        </View>
        {children}
      </BottomSheetModal>
    </>
  );
};

const CustomBackdrop = ({ animatedIndex, style, onTouchStart }) => {
  const containerAnimatedStyle = useAnimatedStyle(() => ({
    opacity: interpolate(
      animatedIndex.value,
      [0, 1],
      [0, 1],
      Extrapolate.CLAMP
    ),
  }));

  const containerStyle = useMemo(
    () => [
      style,
      {
        backgroundColor: "rgba(0,0,0,0.7)",
        height: "100%"
      },
      containerAnimatedStyle,
    ],
    [style, containerAnimatedStyle]
  );

  return <Animated.View onTouchStart={onTouchStart} style={containerStyle} />;
};


const styles = StyleSheet.create({
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
  headerBottomSheet: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  styleBottomSheet: {
    zIndex: 100,
    position: "absolute"
  }
});

export default AppBottomSheet;