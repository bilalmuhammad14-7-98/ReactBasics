import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import ColorCounter from "../Components/ColorCounter";
import { useReducer } from "react";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };

    case "green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };

    case "blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <Text>Welcome to Square Screen</Text>
      <ColorCounter
        text={"red"}
        onIncrease={() => {
          dispatch({ type: "red", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "red", payload: -1 * COLOR_INCREMENT });
        }}
      />

      <ColorCounter
        text={"blue"}
        onIncrease={() => {
          dispatch({ type: "blue", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "blue", payload: -1 * COLOR_INCREMENT });
        }}
      />

      <ColorCounter
        text={"green"}
        onIncrease={() => {
          dispatch({ type: "green", payload: COLOR_INCREMENT });
        }}
        onDecrease={() => {
          dispatch({ type: "green", payload: -1 * COLOR_INCREMENT });
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
