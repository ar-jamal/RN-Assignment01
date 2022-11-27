import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
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
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        {/* <Text style={styles.headerText}>Todo App</Text> */}
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('./src/Utils/Images/ProfileIcon.png')}
          />
        </View>
      </View>
      <View style={styles.inputView}>
        <CusInput
          inputTitle="EMAIL"
          onChangeText={e => setInputText(e)}
          value={inputText}
        />
        <CusInput
          inputTitle="PASSWORD"
          onChangeText={e => setInputText(e)}
          value={inputText}
        />
        <TouchableOpacity
          title="login"
          // style={styles.button}
        >
          <Text style={styles.linkText}>remind me</Text>
        </TouchableOpacity>
        <TouchableOpacity
          title="login"
          style={styles.button}
          // color={cusColors.darkRed}
        >
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
      <Text>{inputText}</Text>
    </SafeAreaView>
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
    width: '70%',
    height: '10%',
    marginTop: '10%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    backgroundColor: cusColors.darkRed,
  },
  headerText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
  },
  inputView: {
    height: '60%',
    width: '70%',
    // marginVertical: 20,
    borderColor: cusColors.darkRed,
    padding: 25,
    justifyContent: 'flex-start',
    backgroundColor: cusColors.lightPale,
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
    width: 78,
    marginTop: 12,
    fontWeight: "600",
    borderBottomWidth: 1.5,
    fontSize: 16,
    // borderBottomColor: 'black'
    // fontStyle: ""
  },
  button: {
    height: 45,
    padding: 8,
    marginTop: 18,
    fontSize: 18,
    backgroundColor: cusColors.darkRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default App;
