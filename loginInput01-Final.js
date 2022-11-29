import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import cusColors from '../../Utils/colors';

export default function CusInput(props) {
  const {onChangeText, value, inputTitle} = props;
  return (
    <View style={styles.inputUnit}>
    
    <View style= {styles.inputLight}>
      <Text style={styles.inputLabel}>{inputTitle}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputUnit: {
    flexDirection: "row",
    width: '100%',
    height: 100,
    backgroundColor: cusColors.lightRed,
    justifyContent: "flex-end",
    marginBottom: 10,
    borderBottomWidth: 25,
    borderBottomColor: cusColors.darkRed
  },
  inputLight: {
    width: "90%",
    height: 100,
    // backgroundColor: cusColors.lightRed,
    justifyContent: "flex-end",
    padding: 12,
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 2,
    borderColor: cusColors.darkRed,
    marginTop: 5,
    padding: 5,
    // borderTopRightRadius: 20,
    backgroundColor: cusColors.lightPale,
  },
  inputLabel: {
    fontWeight: "bold",
    fontSize: 16,
    // marginBottom: 5,
  }
});
