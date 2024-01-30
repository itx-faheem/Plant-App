import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useState, useMemo, useRef } from 'react'
import AssignBottomSheetFile from './AssignBottomSheetFile'
import PendingBottomSheet from './PendingBottomSheet'
import DueBottomSheet from './DueBottomSheet'
import { COLORS } from '../../../../../../../constants'
const heightDimensions = Dimensions.get('screen').height;
const MainBottomOverView = ({ handlePress, bref, snapPoints, backgroundColor }) => {

    return (
        <View style={{ ...styles.container, ...backgroundColor }}>
            <AssignBottomSheetFile handlePress={handlePress} bref={bref} snapPoints={snapPoints} />
            <PendingBottomSheet />
            <DueBottomSheet />
        </View>
    )
}

export default MainBottomOverView

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        paddingHorizontal: 16,
        paddingVertical: 10,
        gap: 7,
        justifyContent: "flex-start"
    }
})