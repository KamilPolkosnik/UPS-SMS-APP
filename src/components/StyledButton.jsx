import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

const StyledButton = (props) => {

  const { setDate, setPckNumber, setPhoneNumber, setChoosedSMS, setMultipleQuantity, setPckNumbers } = props;

  return (
    <>
      <Button
        labelStyle={{ fontSize: props.fontSize }}
        textColor={props.textColor}
        style={style.button}
        disabled={props.disabled}
        onPress={() => {
          setDate("");
          setPckNumber("");
          setPhoneNumber("");
          setPckNumbers("");
          setChoosedSMS(null);
          setMultipleQuantity(false)
          props.sendSMS()
        }}
      >
        {props.label}
      </Button>
    </>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: "white",
    marginHorizontal: 20,
    marginTop: 30,
    opacity: 0.9,
    borderWidth: 1,
    borderColor: '#fab903'
  },
});

export default StyledButton;
