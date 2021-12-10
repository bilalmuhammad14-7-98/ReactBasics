import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";
import { useState } from "react";

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  console.log(red, "red");
  console.log(blue, "blue");
  console.log(green, "green");

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
        return;

      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
        return;

      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
        return;

      default:
        return;
    }
  };

  return (
    <View>
      <Text>Welcome to Square Screen</Text>
      <ColorCounter
        text={"red"}
        onIncrease={() => {
          setColor("red", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("red", -1 * COLOR_INCREMENT);
        }}
      />

      <ColorCounter
        text={"blue"}
        onIncrease={() => {
          setColor("blue", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("blue", -1 * COLOR_INCREMENT);
        }}
      />

      <ColorCounter
        text={"green"}
        onIncrease={() => {
          setColor("green", COLOR_INCREMENT);
        }}
        onDecrease={() => {
          setColor("green", -1 * COLOR_INCREMENT);
        }}
      />

      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
