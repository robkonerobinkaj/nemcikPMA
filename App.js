import { useState } from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';

export default function App() {
  const [counter, setCounter] = useState(0);

  function handleAdd() {
    setCounter(counter + 1);
  }

  function handleMinus() {
    setCounter(counter - 1);
  }


  return (
    <View style={styles.container}>
      <Text style={styles.nadpis}>
        Počítadlo objednávok
      </Text>
      <Text style={styles.cislo}>
        {counter >= 5 ? styles.counterWarning : styles.counter}
        {counter}
      </Text>

      {counter >= 5 && (
        <Text style={styles.limit}>Dosiahnutý limit objednávok</Text>
      )}

      <Button title="+" style={styles.tlacidlo} onPress={handleAdd} />
      <Button title="-" style={styles.tlacidlo} disabled={counter === 0} onPress={handleMinus} />
      <Button title="Reset" style={styles.vynulovat} />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  counter: {
    fontSize: 60,
    fontWeight: 'bold',
  },
  counterWarning: {
    fontSize: 60,
    color: 'red',
    fontWeight: 'bold',
  },
});