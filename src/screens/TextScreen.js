import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");

  return (
    <View>
      <Text>Enter Password</Text>
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={name}
        onChangeText={(event) => {
          setName(event);
        }}
      />
      {name.length <= 5 && name.length >= 1 ? (
        <Text style={{ color: "red", fontSize: 15, fontWeight: "bold" }}>
          Password length must be greater than 5
        </Text>
      ) : null}
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    // margin: 20,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
  },
});

export default TextScreen;
