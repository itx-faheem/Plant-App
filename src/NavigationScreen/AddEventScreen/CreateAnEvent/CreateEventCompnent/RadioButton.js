import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const RadioButton = () => {
    const [radioActive, setRadioActive] = useState(1)

    return (
        <View style={{ flexDirection: "row", gap: 10 }} >
            <TouchableOpacity style={{ flexDirection: "row", gap: 4, alignItems: "center" }} onPress={() => setRadioActive(1)}>
                {radioActive === 1 ? <View style={styles.RadioButton}>
                    <View style={styles.RadioButtonBgc}></View>
                </View> : <View style={styles.withWhiteColorRadiobtn}>
                    <View style={styles.RadioButtonBgc}></View>
                </View>
                }
                <Text style={styles.textstyle} >Free</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flexDirection: "row", gap: 4, alignItems: "center" }} onPress={() => setRadioActive(2)}>
                {radioActive === 2 ? <View style={styles.RadioButton}>
                    <View style={styles.RadioButtonBgc}></View>
                </View> : <View style={styles.withWhiteColorRadiobtn}>
                    <View style={styles.RadioButtonBgc}></View>
                </View>
                }
                <Text style={styles.textstyle} >Paid</Text>
            </TouchableOpacity>

        </View>
    )
}

export default RadioButton

const styles = StyleSheet.create({
    RadioButton: {
        width: 20,
        height: 20,
        backgroundColor: "#6941C6",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#E6E6E6"
    },
    withWhiteColorRadiobtn: {
        width: 20,
        height: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: "#E6E6E6"
    },
    RadioButtonBgc: {
        width: 8,
        height: 8,
        backgroundColor: "#fff",
        borderRadius: 4,
    },
    textstyle: {
        fontSize: 16, fontWeight: "500",
        lineHeight: 24,
        color: "#000"

    }
})
