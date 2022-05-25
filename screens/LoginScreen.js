import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import LoginForm from "../Components/loginScreen/LoginForm";

const LoginScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}></View>
    <Image
      style={{ height: 100, width: 100, marginLeft:150 }}
      source={require("../assets/mlogo.gif")}
    />
    <LoginForm />
  </View>
);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 50,
        marginHorizontal: 12,
      },
      logoContainer: {
        alignItems: "center",
        marginTop: 60,
      },
});

export default LoginScreen;
