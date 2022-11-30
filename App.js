import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import CheckBox from 'react-native-check-box';
import CusIcon from './src/Config/Components/icon';
import CusInput from './src/Config/Components/input';
import cusColors from './src/Utils/colors';

function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [index, setIndex] = useState('');

  const addHandler = () => {
    if (index > -1) {
      listItems[index] = inputText;
      setListItems([...listItems]);
    } else {
      setListItems([...listItems.push(inputText)]);
    }
  };
  const delHandler = val => {
    setListItems(...listItems.splice(val, 1));
  };
  const editHandler = ind => {
    setInputText(listItems[ind]);
    setIndex(ind);
  };
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Todo App</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          onChangeText={e => setInputText(e)}
          value={inputText}
        />
      </View>
      <Button color="yellowgreen" title="Add Todos" onPress={addHandler} />
      {!!listItems && listItems.length > 0 ? (
        <View style={styles.todoView}>
          <Text>{inputText}</Text>
          <View style={styles.endView}>
            <Button title="edit" onPress={editHandler} />
            <Button title="delete" onPress={delHandler} />
          </View>
        </View>
      ) : null}
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
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'brown',
  },
  headerText: {
    color: 'white',
    fontWeight: '800',
    fontSize: 40,
  },
  inputView: {
    height: 45,
    width: '70%',
    borderWidth: 2,
    borderBottomColor: 'black',
    marginVertical: 20,
    // padding:
  },
  todoView: {
    width: '100%',
  },
  endView: {
    height: '100%',
  },
});
export default App;
