import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { COLORS } from '../../constants';

const AppHeader = ({ onPress, title, style, color, backgroundColor }) => {
    return (
        <View
            style={{
                flexDirection: "row",
                height: 44,
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
                backgroundColor: '#fff',
                ...backgroundColor
            }}
        >
            <TouchableOpacity onPress={onPress}>
                <Icon name='arrowleft' size={24} color={color} />
            </TouchableOpacity>
            <View style={[{ flex: 1, height: 20, justifyContent: "center", alignItems: "center" }]}>
                {title && (<Text style={[{ textAlign: "center", fontSize: 14, fontWeight: 600, lineHeight: 20, color: '#000', ...color }, style]}>{title}</Text>)}
            </View>
            <View style={{ height: 24, width: 24 }} />
        </View>
    );
};



export default AppHeader;