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
import CheckBox from 'react-native-check-box';
import CusIcon from './src/Config/Components/icon';
import CusInput from './src/Config/Components/input';
import cusColors from './src/Utils/colors';

function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);
  // const [check]
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <View style={styles.imageView}>
          <ImageBackground
            style={styles.image}
            source={require('./src/Utils/Images/cityImage.jpeg')}
          />
        </View>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.headerText}>Login here</Text>
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
        <View style={styles.linkTextView}>
          <TouchableOpacity
          >
            <Text style={[styles.linkText, { width: 92, }]}>forget Password</Text>
          </TouchableOpacity>
          <TouchableOpacity
          >
            <CheckBox onClick={(e) => setCheckValue}/>
            <Text style={styles.linkText}>Remember me</Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '100%' }}>
          <TouchableOpacity
            title="login"
            style={styles.button}
          // color={cusColors.darkRed}
          >
            <Text style={styles.buttonText}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Login to:</Text>
        <CusIcon source={require('./src/Utils/Images/whatsappIcon.png')} />
        <CusIcon source={require('./src/Utils/Images/twitterIcon.png')} />
        <CusIcon source={require('./src/Utils/Images/facebookIcon.png')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    opacity: 0.88,
    // justifyContent: 'space-between',
  },
  headerView: {
    width: '100%',
    height: '22%',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  inputView: {
    height: '58%',
    width: '100%',
    paddingHorizontal: '20%',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerText: {
    color: cusColors.lightYellow,
    fontSize: 20,
    alignSelf: "center",
    padding: 12,
    marginVertical: 40,
    marginBottom: 70,
    borderWidth: 2,
    borderColor: cusColors.lightYellow
  },
  linkTextView: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    width: 80,
    // marginTop: 12,
    fontWeight: '600',
    borderBottomWidth: 1.7,
    fontSize: 12,
    alignText: 'flex-start',
    marginTop: 8,
    alignSelf: 'flex-end',
    color: cusColors.lightYellow,
    borderBottomColor: cusColors.lightYellow,
    // fontStyle: ""
  },
  button: {
    width: '40%',
    height: 35,
    padding: 8,
    marginTop: 30,
    fontSize: 18,
    alignItems: 'center',
    alignSelf: "center",
    justifyContent: 'center',
    borderBottomWidth: 3,
    borderBottomColor: "yellow",
    backgroundColor: cusColors.onyxBlack,
  },
  buttonText: {
    // color: "black",
    color: cusColors.lightYellow,
    fontSize: 14,
    fontWeight: '500',
  },
  footer: {
    flexDirection: 'row',
    width: "100%",
    height: "20%",
    // padding: 20,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: 'yellow',
  },
  text: {
    color: cusColors.lightYellow,
    height: 20,
    marginRight: 10,

  }
});

export default App;
