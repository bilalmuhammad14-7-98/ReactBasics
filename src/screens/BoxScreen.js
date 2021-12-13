import React from "react";
import { StyleSheet, Text, View } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.viewStyleOne}></View>
      <View style={styles.viewStyleTwo}></View>
      <View style={styles.viewStyleThree}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  viewStyleOne: {
    height: 50,
    width: 50,
    backgroundColor: "red",
  },
  viewStyleTwo: {
    height: 50,
    width: 50,
    backgroundColor: "green",
    alignSelf: "center",
  },
  viewStyleThree: {
    height: 50,
    width: 50,
    backgroundColor: "purple",
  },
});

export default BoxScreen;
