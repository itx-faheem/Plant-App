import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AppIcon from 'react-native-vector-icons/AntDesign';
import AppIconEntypo from 'react-native-vector-icons/Entypo';
import Collapsible from 'react-native-collapsible';
import { COLORS, SIZES } from '../../../../../../constants';
import CollapsibleComponent from './CollapsibleComponent';

const Collapfile = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Tasks</Text>
                <View style={styles.iconContainer}>
                    <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
                        <AppIcon size={18} color={COLORS.black} name={isCollapsed ? "down" : "up"} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <AppIconEntypo name='dots-three-horizontal' size={20} color={COLORS.black} />
                    </TouchableOpacity>
                </View>
            </View>
            <Collapsible
                collapsed={isCollapsed}
                >
                <CollapsibleComponent />
            </Collapsible>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
    },
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 10,
    },
    headerText: {
        fontSize: SIZES.font,
        fontWeight: '600',
        color: COLORS.black,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    collapsedContent: {
        backgroundColor: COLORS.green,
        width: 300,
        height: 50,
    },
});

export default Collapfile;
