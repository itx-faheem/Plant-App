import React, { useMemo, useState, useCallback } from 'react';
import { View, Dimensions, StyleSheet, Pressable } from 'react-native';
import BottomSheetModal from '@gorhom/bottom-sheet';
import InviteBottomSheetHeader from './InviteBottomSheetHeader';
import LinkandQRcode from './LinkandQRcode';
import { COLORS } from '../../../../../constants';
const  heightDimensions  = Dimensions.get('screen').height;

const InvitQRcode = ({ bref,onClose }) => {
    const snapPoints = useMemo(() => ['75%', '75%'], []);

    const toggleFunction = () => {
      bref?.current.close();
    };

    const [isSheetOpen, setIsSheetOpen] = useState(false);

    return (
      <BottomSheetModal
        ref={bref}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        animateOnMount={true}
        topInset={12}
        onClose={() => {
          setIsSheetOpen(false);
          onClose
        }}
        onChange={(index) => {
          setIsSheetOpen(index === 1);
        }}
        backdropComponent={() => (
          isSheetOpen && (
            <Pressable
              style={{
                width: '100%',
                height: heightDimensions,
                flex: 1,
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                position: 'absolute',
              }}
              onPress={toggleFunction}
            />
          )
        )}
        handleIndicatorStyle={styles.indicatorStyle}
      >
        <View style={styles.container}>
          <InviteBottomSheetHeader bref={bref}  />
          <LinkandQRcode />
        </View>
      </BottomSheetModal>
    );
  };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    indicatorStyle: {
        backgroundColor: COLORS.white,
        top: -25,
        width: 80,
        height: 8,
    },
});

export default InvitQRcode;



