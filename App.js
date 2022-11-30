import {onPress} from 'deprecated-react-native-prop-types/DeprecatedTextPropTypes';
import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import cusColors from './src/Utils/colors';

function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);
  const [index, setIndex] = useState('');

  const addHandler = () => {
    if (inputText > -1){
      listItems[index] = inputText
      setListItems([...listItems])
    } else {
      setListItems([...listItems.push(inputText)]);
    } 
  };
  const delHandler = val => {
    setListItems(...listItems.splice(val, 1));
  };
  const editHandler = ind => {
    setIndex(ind);
    setInputText(ind);
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
      <Button color="yellowgreen" title="Add" onPress={addHandler}/>
      {listItems.map((e, i) => (
        <View style={styles.todoView} key={i}>
          <Text>{inputText}</Text>
          <View style={styles.endPart}>
            <Button
              title="edit"
              color={cusColors.lightRed}
              onPress={() => editHandler(i)}
            />
            <Button
              title="delete"
              color={cusColors.darkRed}
              onPress={() => delHandler(i)}
            />
          </View>
        </View>
      ))}
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
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  endPart: {
    height: "100%"
  }
});

export default App;
