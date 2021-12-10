import React, { useState } from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorsScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        keyExtractor={(item) => {
          item;
        }}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View
              style={{ width: 100, height: 100, backgroundColor: item }}
            ></View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

export default ColorsScreen;
