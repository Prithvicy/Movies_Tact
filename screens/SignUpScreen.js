import React from "react";
import { StyleSheet, Image, View } from "react-native";
import SignupForm from "../Components/signUpScreen/SignupForm";
const MOVIE_LOGO = require("../assets/final.jpeg");

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={MOVIE_LOGO} />
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
};

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
  logo: {
    height: 100,
    width: 100,
    borderRadius: 25,
  },
});

export default SignupScreen;
