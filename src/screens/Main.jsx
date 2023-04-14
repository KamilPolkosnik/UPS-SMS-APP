import React from "react";
import { ScrollView, Text, ImageBackground, SafeAreaView } from "react-native";
import * as SMS from "expo-sms";
import InputContainer from "../components/InputContainer";
import StyledButton from "../components/StyledButton";
import DaysButtonsContainer from "../components/DaysButtonsContainer";
import { style } from "./MainStyles";
import QuantityButtonsContainer from "../components/QuantityButtonsContainer";

const Main = () => {
  const sendSMS = async () => {
    await SMS.sendSMSAsync(phoneNumber, choosedSMS);
  };

  const sendSMSforMultiple = async () => {
    await SMS.sendSMSAsync(phoneNumber, sms3);
  };

  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [date, setDate] = React.useState("");
  const [pckNumber, setPckNumber] = React.useState("");
  const [pckNumbers, setPckNumbers] = React.useState("");
  const [choosedSMS, setChoosedSMS] = React.useState(null);
  const [multipleQuantity, setMultipleQuantity] = React.useState(false);

  const sms1 = `Dzień dobry. Państwa przesyłka ${pckNumber} jest gotowa do odbioru z oddziału UPS na ul. Przędzalnianej 8H. Odbiór przesyłek przedpłaconych 8:30-18:00, pobraniowych 9:30-17:00. Nieodebrana zostanie zwrócona ${date} po godzinie 17:00. Jeżeli chcą Państwo przełożyć odbiór przesyłki lub ponowić doręczenie prosimy o kontakt 693 305 024. Pozdrawiamy, UPS Białystok.`;

  const sms2 = `Dzień dobry. Dziś jest ostatni dzień na odbiór Państwa przesyłki ${pckNumber}. Nieodebrana zostanie zwrócona do nadawcy. Odbiór przesyłek przedpłaconych 8:30-18:00, pobraniowych 9:30-17:00. Jeżeli chcą Państwo przełożyć odbiór przesyłki lub ponowić doręczenie prosimy o kontakt 693 305 024. Pozdrawiamy, UPS Białystok.`;

  const sms3 = `Dzień dobry. Państwa przesyłki ${pckNumbers} są gotowe do odbioru z oddziału UPS na ul. Przędzalnianej 8H. Odbiór przesyłek przedpłaconych 8:30-18:00, pobraniowych 9:30-17:00. Nieodebrane zostaną zwrócone ${date} po godzinie 17:00. Jeżeli chcą Państwo przełożyć odbiór przesyłek lub ponowić doręczenie prosimy o kontakt 693 305 024. Pozdrawiamy, UPS Białystok.`;

  return (
    <SafeAreaView style={style.container}>
      <ScrollView contentContainerStyle={style.scrollView}>
        <ImageBackground
          style={style.ImageBackground}
          resizeMode="contain"
          source={require("../../assets/UPS.png")}
        >
          <Text style={style.headerText}>United Parcel Service</Text>
          <Text style={style.headerSecondText}>sms sender</Text>
            <Text style={style.subtitleText}>Wprowadź dane</Text>
          <QuantityButtonsContainer
            multipleQuantity={multipleQuantity}
            setMultipleQuantity={setMultipleQuantity}
          />
          <InputContainer
            phoneNumber={phoneNumber}
            date={date}
            pckNumber={pckNumber}
            setPhoneNumber={setPhoneNumber}
            setDate={setDate}
            setPckNumber={setPckNumber}
            pckNumbers={pckNumbers}
            setPckNumbers={setPckNumbers}
            multipleQuantity={multipleQuantity}
          />
          {multipleQuantity ? null : (
            <DaysButtonsContainer
              choosedSMS={choosedSMS}
              sms1={sms1}
              sms2={sms2}
              phoneNumber={phoneNumber}
              date={date}
              pckNumber={pckNumber}
              setChoosedSMS={setChoosedSMS}
            />
          )}
          <StyledButton
            label={"Wyślij sms"}
            fontSize={16}
            textColor={"black"}
            disabled={
              multipleQuantity
                ? phoneNumber === "" || date === "" || pckNumbers === ""
                  ? true
                  : false
                : choosedSMS === null
                ? true
                : false
            }
            setDate={setDate}
            setPckNumber={setPckNumber}
            setPckNumbers={setPckNumbers}
            setPhoneNumber={setPhoneNumber}
            setChoosedSMS={setChoosedSMS}
            setMultipleQuantity={setMultipleQuantity}
            sendSMS={multipleQuantity ? sendSMSforMultiple : sendSMS}
          />
          <StyledButton
            label={"Resetuj wszystkie dane"}
            fontSize={16}
            textColor={"black"}
            disabled={false}
            setDate={setDate}
            setPckNumber={setPckNumber}
            setPckNumbers={setPckNumbers}
            setPhoneNumber={setPhoneNumber}
            setChoosedSMS={setChoosedSMS}
            setMultipleQuantity={setMultipleQuantity}
            sendSMS={() => null}
          />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Main;
