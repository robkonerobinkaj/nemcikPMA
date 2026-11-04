import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button, Pressable, } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);
  function inputTextHandler(text) {
    setInputText(text);
  }
  function addHandler() {
    setTaskList([...taskList, inputText]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput onChangeText={inputTextHandler} style={styles.input} placeholder="Zadaj úlohu ...... "/>
        <Button onPress={addHandler} title="ADD"/>
      </View>
      <View style={styles.taskContainer}>
        {taskList.map((i) => (
          <Pressable style = {styles.taskLines}>
            <Text>{i}</Text>
          </Pressable>
        ))}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    gap: 10,
  },
  taskContainer: {
    flex: 1,
    borderTopWidth: 3,
    borderColor: 'black',
    paddingTop: 20,
    height: 150,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgray',
    padding: 10,
    borderRadius: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
