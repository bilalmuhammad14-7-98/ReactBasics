import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Bilal ", age: "20" },
    { name: "Bilal ", age: "20" },
    { name: "Bilal ", age: "20" },
    { name: "Bilal ", age: "20" },
    { name: "Bilal ", age: "20" },
    { name: "Bilal ", age: "20" },
    { name: "Bilal ", age: "20" },
    { name: "Bilal ", age: "20" },
  ];

  return (
    <View>
      <FlatList
        keyExtractor={(id) => {
          id.name;
        }}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name}- Age {item.age}
            </Text>
          );
        }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
    padding: 10,
  },
});

export default ListScreen;
