import React, { useMemo, useState, useRef } from 'react';
import { StyleSheet, Text, Pressable } from 'react-native';
import BottomSheetModal from '@gorhom/bottom-sheet';

const WorkScreen = () => {
  const snapPoints = useMemo(() => ["75%", "50%"], []); // Adjusted snap points to percentages
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const bottomSheetRef = useRef(null);

  const toggleFunction = () => {
    bottomSheetRef?.current.close();
    console.log("oka");
  };

  return (
    <>
      <Text>WorkScreen</Text>
      <BottomSheetModal
        snapPoints={snapPoints}
        ref={bottomSheetRef}
        enablePanDownToClose={true}
        index={1}
        handleIndicatorStyle={styles.indicatorStyle}
        onClose={() => {
          setIsSheetOpen(false);
        }}
        onChange={(index) => {
          setIsSheetOpen(index === 1);
        }}
        backdropComponent={() => (
          isSheetOpen && (
            <Pressable
              style={{
                width: '100%',
                height: '100%', // Adjusted to cover the entire screen
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                position: 'absolute',
              }}
              onPress={toggleFunction}
            />
          )
        )}
      >
        <Text>hello world</Text>
      </BottomSheetModal>
    </>
  );
};

export default WorkScreen;

const styles = StyleSheet.create({
  indicatorStyle: {
    backgroundColor: "white",
    top: -25,
    width: 80,
    height: 8,
  },
});
