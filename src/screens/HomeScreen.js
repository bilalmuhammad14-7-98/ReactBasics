import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreenn</Text>
      <Button
        onPress={() => {
          navigation.navigate("Components");
        }}
        title="Go to Components Demo"
      />

      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="Go to List Demo"
      />

      <Button
        onPress={() => {
          navigation.navigate("Image");
        }}
        title="Go to Image Screen"
      />

      <Button
        onPress={() => {
          navigation.navigate("Counter");
        }}
        title="Go to Counter Screen"
      />

      <Button
        onPress={() => {
          navigation.navigate("Colors");
        }}
        title="Go to Colors Screen"
      />

      <Button
        onPress={() => {
          navigation.navigate("Square");
        }}
        title="Go to Square Screen"
      />

      <Button
        onPress={() => {
          navigation.navigate("Text");
        }}
        title="Go to TextInput Screen"
      />

      <Button
        onPress={() => {
          navigation.navigate("Box");
        }}
        title="Go to Box Screen"
      />
      {/* Touchable Opacity */}

      {/* <TouchableOpacity
        onPress={() => {
          // console.log("List Button Pressed");
          props.navigation.navigate("List");
        }}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
