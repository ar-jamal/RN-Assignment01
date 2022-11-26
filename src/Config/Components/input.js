import React from "react"
import { Text, TextInput, View, StyleSheet } from "react-native"
import cusColors from "../../Utils/colors"

export default function CusInput(props) {
    const { onChangeText, value, inputTitle } = props
    return (
        <View style={styles.inputUnit}>
            <Text style={{fontWeight: "700"}}>{inputTitle}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
            />
        </ View>
    )
}

const styles = StyleSheet.create({

    inputUnit: {
        width: "100%",
        height: 120,
        backgroundColor: cusColors.lightRed,
        alignItems: "flex-end",
        padding: 12,
        marginTop: 5,
    },
    input: {
        width: "100%",
        height: 40,
        borderWidth: 2,
        borderColor: cusColors.darkRed,
        // marginBottom: 15,
        // borderTopRightRadius: 20,
        backgroundColor: cusColors.lightBrown,
    },
})