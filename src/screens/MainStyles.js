import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#330100"
    },
    scrollView: {
      minHeight: '100%'
    },
    ImageBackground: {
      flex: 1,
      justifyContent: "center",
      flexDirection: "column",
    },
    headerText: {
      alignSelf: "center",
      marginBottom: 2,
      fontSize: 23,
      fontWeight: "bold",
      color: "#ffbe00",
      textShadowColor: "rgba(255, 255, 255, 0.75)",
      textShadowOffset: { width: -2, height: 1 },
      textShadowRadius: 5,
      textTransform: "uppercase",
      textAlign: "center",
    },
    headerSecondText: {
      alignSelf: "center",
      marginBottom: 20,
      fontSize: 23,
      fontWeight: "bold",
      color: "white",
      textShadowColor: "rgba(255, 255, 255, 0.75)",
      textShadowOffset: { width: -2, height: 1 },
      textShadowRadius: 5,
      textTransform: "uppercase",
    },
    subtitleText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "white",
      alignSelf: "center",
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -2, height: 1 },
      textShadowRadius: 5,
    },
    subtitleAccepterText: {
      fontSize: 18,
      fontWeight: "bold",
      color: "lightgreen",
      alignSelf: "center",
      textShadowColor: "rgba(0, 0, 0, 0.75)",
      textShadowOffset: { width: -2, height: 1 },
      textShadowRadius: 5,
    }
  });