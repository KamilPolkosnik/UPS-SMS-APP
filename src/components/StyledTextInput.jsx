import { TextInput } from "react-native-paper";
import { StyleSheet } from "react-native";
import React from "react";

const StyledTextInput = (props) => {
  return (
    <>
      <TextInput
        activeUnderlineColor={"#fab903"}
        underlineColor={"#fab903"}
        style={style.textInput}
        label={props.label}
        value={props.value}
        onChangeText={props.function}
      />
    </>
  );
};

const style = StyleSheet.create({
  textInput: {
    marginBottom: 15,
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 15,
    opacity: 0.9,
    borderWidth: 1,
    borderColor: "#fab903",
  },
});

export default StyledTextInput;
