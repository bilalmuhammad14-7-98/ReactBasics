import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const name = "Muhammad Bilal";
  return (
    <View>
      <Text style={styles.textStyleOne}>Getting Started with React Native</Text>
      <Text style={styles.textStyleTwo}>My name is {name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleOne: {
    fontSize: 40,
  },
  textStyleTwo: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
