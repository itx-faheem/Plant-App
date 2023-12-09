import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { COLORS } from '../../../../constants';
const CELL_COUNT = 5;

const OtpFields = () => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });

    return (
   
            <View style={{ justifyContent: "space-between", alignItems: "center",  width:"100%", gap:10 }}>
                <>
                    <CodeField
                        ref={ref}
                        {...props}
                        value={value}
                        onChangeText={setValue}
                        cellCount={CELL_COUNT}
                        rootStyle={styles.root}
                        keyboardType="numeric"
                        textContentType="oneTimeCode"
                        renderCell={({ index, symbol, isFocused }) => (
                            <View key={index}>
                                <Text
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            </View>
                        )}
                    />
                </>
            </View>
    );
};

export default OtpFields;

const styles = StyleSheet.create({
    root: {
        width: "100%",
        height: 48,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    cell: {
        width: 61.4,
        height: 48,
        borderWidth: 1,
        borderColor:COLORS.tertiary,
        borderRadius: 8,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontSize: 16,
        fontWeight: 400,
        color:COLORS.gray,
        paddingTop: 10
    },
});
