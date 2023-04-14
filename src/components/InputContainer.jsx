import React from "react";
import StyledTextInput from "./StyledTextInput";

const InputContainer = (props) => {
  const {
    phoneNumber,
    pckNumber,
    date,
    setPhoneNumber,
    setPckNumber,
    setDate,
    multipleQuantity,
    pckNumbers,
    setPckNumbers,
  } = props;


  const handlePckNumbers = (text) => {
    let formattedText = text.split(" ").join("");
    if (formattedText.length > 0) {
      formattedText = formattedText.match(new RegExp(".{1,18}", "g")).join(" ");
    }
    setPckNumbers(formattedText);
  };

  return (
    <>
      <StyledTextInput
        label={"Numer telefonu"}
        value={phoneNumber}
        function={(phoneNumber) => setPhoneNumber(phoneNumber)}
      />
      {multipleQuantity ? (
        <StyledTextInput
          label={"Numery przesyłek"}
          value={pckNumbers}
          function={(pckNumbers) => handlePckNumbers(pckNumbers)}
        />
      ) : (
        <StyledTextInput
          label={"Numer przesyłki"}
          value={pckNumber}
          function={(pckNumber) => setPckNumber(pckNumber)}
        />
      )}
      <StyledTextInput
        label={"Data"}
        value={date}
        function={(date) => setDate(date)}
      />
    </>
  );
};

export default InputContainer;
