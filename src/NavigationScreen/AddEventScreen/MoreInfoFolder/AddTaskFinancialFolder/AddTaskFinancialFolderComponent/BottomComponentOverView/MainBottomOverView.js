import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useRef, useState } from 'react'
import { COLORS, SIZES, icons } from '../../../../../../../constants'
import AppIcon from "react-native-vector-icons/AntDesign";
import AppBottomSheet from '../../../../../../../component/appcomponent/AppBottomSheet';

const MainBottomOverView = () => {
    const snapPoints = useMemo(() => ['50', "25"], [])
    const bottomSheetRef = useRef(null);
    const [handleBottomSheet, setHandleBottomSheet] = useState(false)
    
    const handlePress = () => {
        setHandleBottomSheet(true)
        bottomSheetRef.current?.expand()
    }

    return (
        <>
            <View style={styles.container} >
                <TouchableOpacity
                    activeOpacity={0.5}
                    style={styles.innerContainer}
                    onPress={handlePress}
                >
                    <Image
                        style={styles.iconStyle}
                        source={icons.addAssginIcon} />
                    <Text style={styles.AssignText} >Assign</Text>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.innerContainer} >
                    <Text style={styles.pendingText} >Pending</Text>
                    <AppIcon name='down' size={14} color={COLORS.orange} />
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.5} style={styles.innerContainer} >
                    <AppIcon size={14} name='clockcircle' color={COLORS.black} />
                    <Text style={styles.DueText} >Due</Text>
                </TouchableOpacity>
            </View>
            {
                handleBottomSheet && <AppBottomSheet snapPoints={snapPoints} ref={bottomSheetRef} />
            }
        </>
    )
}

export default MainBottomOverView

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        paddingVertical: 10,
        paddingHorizontal: 16,
        gap: 7
    },
    innerContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.tertiary,
        paddingVertical: 8,
        paddingHorizontal: 16,
        gap: 6,
        borderRadius: 100
    },
    iconStyle: {
        width: 16,
        height: 16,
        resizeMode: "contain",
        tintColor: COLORS.primary
    },
    AssignText: {
        color: COLORS.primary,
        fontWeight: "600",
        fontSize: SIZES.font
    },
    pendingText: {
        color: COLORS.orange,
        fontWeight: "600",
        fontSize: SIZES.font
    },
    DueText: {
        color: COLORS.black,
        fontWeight: "600",
        fontSize: SIZES.font
    }
})