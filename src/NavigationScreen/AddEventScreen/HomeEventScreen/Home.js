import React, { useRef, useMemo, useState } from 'react';
import { View, Text, Image, TouchableOpacity, Pressable, Dimensions, StyleSheet, ScrollView } from 'react-native';
import AppIcon from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES, icons } from '../../../../constants';
import AppBottomSheet from '../../../../component/appcomponent/AppBottomSheet';
import { CreaatedEventDetail, FilterBottomSheet, HomeHeaderBar, NoEvent } from './HomeComponent';

const heightDimensions = Dimensions.get('screen').height;

const Home = ({ navigation, handlePress }) => {
    const [isModalVisible, setModalVisible] = useState(false);

    const handlepress = () => {
        setModalVisible(true)
    }

    const onClose = () => {
        setModalVisible(false)
    }

    return (
        <>
            <View style={{ flex: 1, zIndex: 0 }}>
                <HomeHeaderBar AddEvent="Add Task" onPress={() => navigation.navigate('CreateEvent')} />
                <View style={{ paddingVertical: 16, paddingHorizontal: 16, gap: 12, borderWidth: 1, borderColor: COLORS.tertiary }}>
                    <Pressable onPress={() => navigation.navigate('HomeSearchbar')} style={styles.searchInputHome}>
                        <AppIcon name="search1" color={COLORS.gray} size={18} />
                        <Text style={styles.inputText}>Search</Text>
                    </Pressable>
                    <View style={styles.filterInner}>
                        <Text style={{ fontSize: SIZES.font, fontWeight: '700', color: COLORS.black }}>Your Events</Text>
                        <TouchableOpacity onPress={handlepress} activeOpacity={0.5}>
                            <Image source={icons.filter} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView showsVerticalScrollIndicator={false} >
                    <CreaatedEventDetail onPress={() => navigation.navigate("MainCreateComponent")} />
                </ScrollView>
            </View>
            <FilterBottomSheet isVisible={isModalVisible} onSwipeCancel={onClose} onBackdropPress={onClose} />
        </>
    );
};

export default Home

const styles = StyleSheet.create({
    searchInputHome: {
        borderWidth: 2,
        borderColor: COLORS.tertiary,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: COLORS.white,
        paddingHorizontal: 16, gap: 10,
        borderRadius: 8,
        paddingVertical: 12
    },
    InputText: {
        color: COLORS.dark,
        fontSize: SIZES.font,
        width: "95%",
        fontWeight: "400",
    },
    filterInner: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 8
    },
    checkContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: COLORS.secondary,
        borderWidth: 1,
        borderColor: COLORS.tertiary
    },
    titleText: {
        color: COLORS.black,
        fontSize: SIZES.font,
        fontWeight: "600"
    },
    inputText: {
        color: COLORS.gray,
        fontSize: SIZES.font
    }
})