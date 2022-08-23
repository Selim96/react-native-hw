import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';

export default function App() {
  const [value, setValue] = useState("");
  const inputChange = (text) => setValue(text);

  return (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <View style={styles.container}>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          style={styles.input}
          placeholder='Type text'
          value={value}
          keyboardType='default'
          onChangeText={inputChange}
          />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009A50',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FF6C00',
  },
  input: {
    color: 'fff',
    border: 'solid',
    borderColor: '#FF6D99',
    borderWidth: 2,
    padding: 5,
    borderRadius: 10,
    marginTop: 50
  }
});
