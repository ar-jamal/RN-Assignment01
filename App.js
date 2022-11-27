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
        <View style={styles.imageView}>
          <Image
            style={styles.image}
            source={require('./src/Utils/Images/cityImage.jpeg')}
          />
        </View>
      </View>
      <View style={styles.inputView}>
        <Text style={styles.headerText}>Login here</Text>
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
    width: '100%',
    height: '23%',
    backgroundColor: 'black',
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.3,
  },
  inputView: {
    height: '90%',
    width: '100%',
    paddingHorizontal: '20%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    alignText: "center",
    padding: 12,
    marginVertical: 40,
    borderWidth: 2,
    borderColor: "white"
  },
  linkText: {
    width: 78,
    // marginTop: 12,
    fontWeight: '600',
    borderBottomWidth: 1.7,
    fontSize: 16,
    alignText: 'flex-start',
    // borderBottomColor: 'black'
    // fontStyle: ""
  },
  button: {
    width: '100%',
    height: 45,
    padding: 8,
    marginTop: 18,
    fontSize: 18,
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomWidth: 20,
    // borderBottomColor: cusColors.darkRed,
    backgroundColor: cusColors.darkRed,
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500',
  },
});

export default App;
