import React, {useState} from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CusInput from './src/Config/Components/input';
import cusColors from './src/Utils/colors';

function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);
  return (
    <ImageBackground
      style={styles.mainView}
      source={require('./src/Utils/Images/loginOpt01-Final.jpeg')}>
      <View style={styles.inputView}>
        <CusInput
          inputTitle="USER NAME"
          onChangeText={e => setInputText(e)}
          value={inputText}
          iconStyle={{width: 50, height: 50}}
          iconSource={require('./src/Utils/Images/userIcon.png')}
        />
        <CusInput
          inputTitle="EMAIL"
          onChangeText={e => setInputText(e)}
          value={inputText}
          iconStyle={{width: 50, height: 50}}
          iconSource={require('./src/Utils/Images/emailIcon.png')}
        />
        <CusInput
          inputTitle="PASSWORD"
          onChangeText={e => setInputText(e)}
          value={inputText}
          iconStyle={{width: 46, height: 46}}
          iconSource={require('./src/Utils/Images/passwordIcon.png')}
        />
        <TouchableOpacity
          title="login"
          style={styles.button}
          // color={cusColors.darkRed}
        >
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Remind me</Text>
        </TouchableOpacity>
      </View>
      {/* <View style={styles.footerNote}>
        <Text style={styles.linkText}>Login with:</Text>
        <Image style={iconStyle} source={iconSource} />
        <Image style={iconStyle} source={iconSource} />
        <Image style={iconStyle} source={iconSource} />
      </View> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  headerView: {
    width: '100%',
    height: '10%',
    // marginTop: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: cusColors.darkRed,
  },
  inputView: {
    height: '90%',
    width: '100%',
    // marginVertical: 20,
    borderColor: cusColors.darkRed,
    padding: '20%',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  imageView: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 12,
    // backgroundColor: cusColors.lightBrown
  },
  image: {
    width: 50,
    height: 50,
    color: 'blue',
    // resizeMode: "stretch",
    borderRadius: 25,
  },
  linkText: {
    width: 84,
    marginTop: 12,
    fontWeight: '600',
    borderBottomWidth: 1.7,
    borderBottomColor: 'white',
    fontSize: 16,
    alignText: 'flex-start',
    color: 'white',
  },
  button: {
    width: '110%',
    height: 60,
    padding: 8,
    marginTop: 25,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'white',
    borderRadius: 45,
    backgroundColor: 'yellowgreen',
    opacity: .7,
    // backgroundColor: cusColors.darkRed,
  },
  buttonText: {
    // color: 'white',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
