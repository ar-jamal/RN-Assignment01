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
    height: 33,
    alignItems: 'center',
    justifyContent: 'space-between',
    alignItems: "center",
    marginBottom: 7,
    opacity: 0.8,
  },
  input: {
    flex: 5,
    height: '100%',
    padding: 5,
    paddingLeft: 15,
    color: "black",
    borderColor: cusColors.lightYellow,
    borderWidth: 1,
    borderBottomLeftRadius: 18,
    justifyContent: "center",
    backgroundColor: cusColors.onyxBlack,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 7,
    paddingRight: 6,
    color: cusColors.lightYellow,
  },
});
