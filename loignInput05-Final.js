import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import cusColors from '../../Utils/colors';

export default function CusInput(props) {
    const { onChangeText, value, inputTitle } = props;
    return (
        <View style={styles.inputMain}>
            <View style={styles.inputUnit01}>
                <Text style={styles.inputLabel}>User name</Text>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
            <View style={styles.inputUnit02}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>
            <View style={styles.inputUnit01}>
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    onChangeText={onChangeText}
                    value={value}
                />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    inputMain: {
        width: '85%',
    },
    inputUnit01: {
        width: "80%",
        height: 65,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        paddingHorizontal: 5,
        backgroundColor: cusColors.brownThemeLight,
        marginVertical: 15,
    },
    inputUnit02: {
        width: "100%",
        height: 65,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        paddingHorizontal: 5,
        backgroundColor: cusColors.brownThemeDark,
        marginVertical: 15,
    },

    inputLabel: {
        fontWeight: 'bold',
        fontSize: 14,
        color: "white",
        // borderBottomWidth: 2,
        // borderBottomColor: "white"
    },
});
