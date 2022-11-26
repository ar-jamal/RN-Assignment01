import React, {useState} from 'react';
import {Button, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';

function App() {
  const [inputText, setInputText] = useState('');
  const [listItems, setListItems] = useState([]);
  return (
    <SafeAreaView style={styles.mainView}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>Todo App</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput 
        style={styles.input}
         onChangeText={(e) => setInputText(e)}
         value= {inputText}
          />
      </View>
        <Button color= "yellowgreen" title='Add Todos'/>
        <Text>{inputText}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainView: {
    width: '100%',
    height: "100%",
    flex: 1,
    alignItems: "center",
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
});

export default App;
