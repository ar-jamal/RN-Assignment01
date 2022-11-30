import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import cusColors from '../../Utils/colors';

export default function CusInput(props) {
    const { onChangeText, value, inputTitle } = props;
    return (
        <View style={styles.inputUnit}>
            <Text style={styles.inputLabel}>{inputTitle}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({

    inputUnit: {
        flexDirection: 'row',
        width: '100%',
        height: 35,
        alignItems: 'center',
        justifyContent: "space-between",
        marginTop: 7,
        backgroundColor: cusColors.onyxBlack,
    },
    input: {
        flex: 5,
        height: "70%",
        padding: 5,
        color: cusColors.lightYellow,
    },
    inputLabel: {
        fontWeight: 'bold',
        fontSize: 14,
        marginHorizontal: 7,
        paddingRight: 6,
        borderRightWidth: 1.5,
        borderRightColor: cusColors.lightYellow,
        color: cusColors.lightYellow,
        opacity: .7,
        // borderRightColor: "black",
        // color: "black",
    },
});
