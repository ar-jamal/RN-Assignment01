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
      <ImageBackground
        style={{ width: '100%', flex: 1 }}
        source={require('./src/Utils/Images/jungleBackground.jpeg')}>
        <View style={styles.inputView}>
          <Text style={styles.headerText}>Login</Text>
          <CusInput
            inputTitle="User name"
            onChangeText={e => setInputText(e)}
            value={inputText}
          />
          <CusInput
            inputTitle="Email"
            onChangeText={e => setInputText(e)}
            value={inputText}
          />
          <CusInput
            inputTitle="Password"
            onChangeText={e => setInputText(e)}
            value={inputText}
          />
          <TouchableOpacity>
            <Text style={[styles.linkText, { width: 92 }]}>
              forget Password
            </Text>
          </TouchableOpacity>
          <View style={styles.linkTextView}>
            <TouchableOpacity>
              <Text style={styles.linkText}>Remember me</Text>
            </TouchableOpacity>
            <TouchableOpacity
              title="login"
              style={styles.button}
            // color={cusColors.darkRed}
            >
              <Text style={styles.buttonText}>SUBMIT</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.loginOptions}>
            <Text style={styles.text}>Login with:</Text>
            <CusIcon source={require('./src/Utils/Images/whatsappIcon.png')} />
            <CusIcon source={require('./src/Utils/Images/twitterIcon.png')} />
            <CusIcon source={require('./src/Utils/Images/facebookIcon.png')} />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    flex: 1,
    opacity: 0.88,
  },
  inputView: {
    height: '100%',
    width: '100%',
    paddingHorizontal: '20%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    // backgroundColor: 'yellow',
  },
  headerText: {
    color: cusColors.lightYellow,
    fontSize: 35,
    alignSelf: 'center',
    marginBottom: 70,
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
    marginTop: 8,
    alignSelf: 'flex-end',
    color: cusColors.lightYellow,
    borderBottomColor: "black",
  },
  button: {
    width: '40%',
    height: 40,
    padding: 8,
    marginTop: 20,
    fontSize: 18,
    alignItems: 'center',
    alignSelf: 'flex-end',
    justifyContent: 'center',
    borderBottomWidth: 4,
    backgroundColor: cusColors.lightYellow,
  },
  buttonText: {
    color: cusColors.onyxBlack,
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
