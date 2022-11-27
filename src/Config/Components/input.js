import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import cusColors from '../../Utils/colors';

export default function CusInput(props) {
  const {onChangeText, value, inputTitle} = props;
  return (
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
  );
}

const styles = StyleSheet.create({
  
  input: {
    width: '100%',
    height: 35,
    borderWidth: 2,
    borderColor: cusColors.darkRed,
    marginTop: 5,
    padding: 5,
    backgroundColor: cusColors.lightPale,
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 16,
    // marginBottom: 5,
  },
});
