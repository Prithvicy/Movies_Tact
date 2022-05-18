import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/bg-removebg-preview.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <Text style={{ color: "red" }}>heelo</Text>
        <Text style={{ color: "red" }}>heelo</Text>
        <Text style={{ color: "red" }}>heel00</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: "20",
  },
  iconsContainer: {
    flexDirection: "row",
  },
});
