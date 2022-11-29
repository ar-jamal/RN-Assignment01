import React, { useState } from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CheckBox from 'react-native-check-box';
import CusIcon from './src/Config/Components/icon';
import CusInput from './src/Config/Components/input';
import cusColors from './src/Utils/colors';

function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.inputView}>
        <Text style={styles.headerText}>Login</Text>
        <CusInput
          inputTitle="User name"
          onChangeText={e => setInputText(e)}
          value={inputText}
        />
        <TouchableOpacity>
          <Text style={[styles.linkText, { width: 92 }]}>
            forget Password
          </Text>
        </TouchableOpacity>
        {/* <View style={styles.linkTextView}> */}
          <TouchableOpacity
            title="login"
            style={styles.button}
          >
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        {/* </View> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    flex: 1,
    // opacity: 0.88,
    backgroundColor: cusColors.brownThemeLight
  },
  inputView: {
    height: '100%',
    width: '60%',
    // paddingHorizontal: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: "7.5%",
    backgroundColor: cusColors.brownThemeMid,
  },
  headerText: {
    color: "white",
    fontSize: 35,
    alignSelf: 'center',
    marginBottom: 70,
    // opacity: .8,
  },
  linkTextView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: "flex-end",
    marginBottom: 5,
  },
  linkText: {
    width: 80,
    fontWeight: '600',
    borderBottomWidth: 1.7,
    fontSize: 12,
    alignSelf: 'flex-end',
    color: "white",
    borderBottomColor: "white",
  },
  button: {
    width: '50%',
    height: 40,
    padding: 8,
    marginTop: 50,
    fontSize: 18,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    marginRight: 0,
    borderWidth: 2,
    borderColor: cusColors.brownThemeDark,
    backgroundColor: cusColors.brownThemeDark,
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: 'bold',
  },

  loginOptions: {
    flexDirection: 'row',
    width: '100%',
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: cusColors.lightYellow,
    borderBottomLeftRadius: 70,
    backgroundColor: cusColors.onyxBlack,
  },
  text: {
    color: cusColors.lightYellow,
    height: 20,
    marginRight: 10,
  },
});

export default App;
