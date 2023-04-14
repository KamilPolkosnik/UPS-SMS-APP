import { View, StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import React from "react";

const DaysButtonsContainer = (props) => {
  const {
    choosedSMS,
    sms1,
    sms2,
    phoneNumber,
    date,
    pckNumber,
    setChoosedSMS,
  } = props;

  return (
    <View style={style.buttonContainer}>
      <Button
        labelStyle={{ fontSize: 13 }}
        textColor={choosedSMS === sms1 ? "white" : "black"}
        style={{
          backgroundColor: choosedSMS === sms1 ? "#fab903" : "white",
          marginHorizontal: 10,
          opacity: 0.9,
          borderWidth: 1,
          borderColor: choosedSMS === sms1 ? "#330100" : "#fab903",
        }}
        onPress={() => setChoosedSMS(sms1)}
        disabled={
          phoneNumber === "" || date === "" || pckNumber === "" ? true : false
        }
      >
        SMS Pierwszego dnia
      </Button>
      <Button
        labelStyle={{ fontSize: 13 }}
        textColor={choosedSMS === sms2 ? "white" : "black"}
        style={{
          backgroundColor: choosedSMS === sms2 ? "#fab903" : "white",
          marginHorizontal: 10,
          opacity: 0.9,
          borderWidth: 1,
          borderColor: choosedSMS === sms1 ? "#330100" : "#fab903",
        }}
        onPress={() => setChoosedSMS(sms2)}
        disabled={
          phoneNumber === "" || pckNumber === "" || date.length > 0
            ? true
            : false
        }
      >
        SMS Ostatniego dnia
      </Button>
    </View>
  );
};

const style = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignSelf: "center",
  },
});

export default DaysButtonsContainer;
