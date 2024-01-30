import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import AppIcon from 'react-native-vector-icons/AntDesign';
import { COLORS, SIZES, icons } from '../../../../../constants';
import { AppButton } from '../../../../../component/appcomponent';

const Dimensionsheight = Dimensions.get("screen").height


const Action = ({ onPress, AddSuppliesPress, addtaskaction }) => {

    const actionContainerStyle = {
        backgroundColor: COLORS.tertiary,
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        gap: 8,
    };

    return (
        <View style={{ flex: 1, justifyContent: "space-between", minHeight: Dimensionsheight / 2 }} >
            <View style={styles.container}>
                <View style={styles.section}>
                    <Text style={{ fontSize: SIZES.font, color: COLORS.black, fontWeight: "600" }} >Quick Action</Text>
                    <View style={styles.actionItem}>
                        <TouchableOpacity
                            onPress={addtaskaction}
                            activeOpacity={0.5} style={actionContainerStyle}>
                            <View style={styles.taskContainer}>
                                <Image style={styles.iconStyle} source={icons.Tasks} />
                            </View>
                            <Text style={styles.actionText}>Add Tasks</Text>
                        </TouchableOpacity>
                        <Text style={styles.description}>Add tasks and assign them to specific delegates</Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <View style={styles.actionItem} >
                        <TouchableOpacity
                            onPress={AddSuppliesPress}
                            activeOpacity={0.5} style={actionContainerStyle}>
                            <View style={[styles.taskContainer, styles.soft]}>
                                <AppIcon name="plus" color={COLORS.white} size={15} />
                            </View>
                            <Text style={styles.actionText}>Add Supplies</Text>
                        </TouchableOpacity>
                        <Text style={styles.description}>Manage supplies with budget to manage</Text>
                    </View>
                </View>
            </View>
            <View style={{ justifyContent: "center", alignItems: "center" }} >
                <AppButton title="Continue" onPress={onPress} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingVertical: 16,
        paddingHorizontal: 14,
        borderWidth: 1,
        borderColor: COLORS.tertiary,
        gap: 16,
    },
    section: {
        gap: 16,
    },
    actionItem: {
        gap: 8,
    },
    taskContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconStyle: {
        width: 15,
        height: 15,
        tintColor: COLORS.white,
        resizeMode: 'contain',
    },
    actionText: {
        fontSize: SIZES.font,
        color: COLORS.black,
        fontWeight: '500',
    },
    description: {
        color: COLORS.dark,
        fontSize: SIZES.medium,
        fontWeight: '400',
        lineHeight: 19,
    },
    soft: {
        backgroundColor: COLORS.soft
    }
});

export default Action;
