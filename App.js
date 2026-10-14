import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Napíšte text tu"
        />
        <Button style={styles.button} title="ADD" />
      </View>

      <View style={styles.taskContainer}>
        <Text style={styles.text}></Text>
        <Text></Text>
        <StatusBar style="auto" />
      </View>
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
    borderRadius: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
