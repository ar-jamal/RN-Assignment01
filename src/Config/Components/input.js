import React from 'react';
import {Text, TextInput, View, StyleSheet} from 'react-native';
import cusColors from '../../Utils/colors';

export default function CusInput(props) {
  const {onChangeText, value, inputTitle} = props;
  return (
    <View style={styles.inputUnit}>
      <View style={styles.titleView}>
        <Text style={styles.inputLabel}>{inputTitle}</Text>
      </View>
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
    height: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 7,
    opacity: 0.8,
  },
  input: {
    flex: 5,
    height: '100%',
    // padding: 5,
    color: cusColors.lightYellow,
    backgroundColor: 'black',
    opacity: 0.4,
    // borderRadius: 18,
    borderRightColor: "black",
    borderRightWidth: 4,
    borderTopLeftRadius: 18,
    borderBottomLeftRadius: 18,
  },
  titleView: {
    backgroundColor: 'black',
    borderTopRightRadius: 18,
    borderBottomRightRadius: 18,
    justifyContent: "center",
  },
  inputLabel: {
      height: '100%',
    fontWeight: 'bold',
    fontSize: 14,
    marginHorizontal: 7,
    paddingRight: 6,
    opacity: 0.7,
    color: cusColors.lightYellow,
    alignContent: 'center',
    justifyContent: 'center',
  },
});
