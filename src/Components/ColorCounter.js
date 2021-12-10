import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ text, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{text}</Text>
      <Button
        title={`Increase ${text}`}
        onPress={() => {
          onIncrease();
        }}
      />
      <Button
        title={`Decrease ${text}`}
        onPress={() => {
          onDecrease();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
