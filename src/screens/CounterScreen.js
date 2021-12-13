import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useState, useReducer } from "react";

// const num = 1;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: action.payload + 1 };

    case "decrement":
      return { ...state, count: action.payload - 1 };

    default:
      return state;
  }
};

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "increment", payload: state.count });
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: "decrement", payload: state.count });
        }}
      />
      <Text>Current Count --{state.count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
