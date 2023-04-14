import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

const QuantityButtonsContainer = (props) => {
  const { multipleQuantity, setMultipleQuantity } = props;

  return (
    <View style={style.buttonContainer}>
      <Button
        labelStyle={{ fontSize: 13 }}
        textColor={multipleQuantity ? "black" : "white"}
        style={{
          backgroundColor: multipleQuantity ? "white" : "#fab903",
          marginHorizontal: 10,
          opacity: 0.9,
          borderWidth: 1,
          borderColor: "#2c0d01",
        }}
        onPress={() => setMultipleQuantity(false)}
      >
        Pojedycza przesyłka
      </Button>
      <Button
        labelStyle={{ fontSize: 13 }}
        textColor={multipleQuantity ? "white" : "black"}
        style={{
          backgroundColor: multipleQuantity ? "#fab903" : "white",
          marginHorizontal: 10,
          opacity: 0.9,
          borderWidth: 1,
          borderColor: "#2c0d01",
        }}
        onPress={() => setMultipleQuantity(true)}
      >
        Wielopak
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 5,
    alignSelf: "center",
  },
});

export default QuantityButtonsContainer;
