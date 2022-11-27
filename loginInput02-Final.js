import React from 'react';
import {Text, TextInput, View, StyleSheet, Image} from 'react-native';
// import cusColors from '../../Utils/colors';

export default function CusInput(props) {
  const {onChangeText, value, inputTitle, iconStyle, iconSource} = props;

  return (
    <View>
      <Text style={styles.inputLabel}>{inputTitle}</Text>
      <View style={styles.inputView}>
        <View style={styles.inputIconView}>
          <Image style={iconStyle} source={iconSource} />
        </View>
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
  inputView: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderWidth: 2,
    borderLeftWidth: 0,
    borderColor: 'white',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    marginBottom: 15,
    // opacity: .8,
  },
  inputIconView: {
    height: '108%',
    aspectRatio: 1,
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 25,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '90%',
    height: '90%',
    paddingLeft: 10,
    color: 'white',
  },
  inputLabel: {
    // width: "110%",
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
    marginVertical: 7,
    // padding: 5,
    // borderRadius: 20,
    // backgroundColor:'yellowgreen'
  },
});
