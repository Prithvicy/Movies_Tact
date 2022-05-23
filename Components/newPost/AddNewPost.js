import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
const Header = () => (
  <View style={styles.headerContainer}>
    <TouchableOpacity>
      <Image
        source={require("../../assets/newPost/back.png")}
        style={{ width: 30, height: 30 }}
      />
    </TouchableOpacity>
    <Text style={styles.headerText}>AddNewPost</Text>
    <Text></Text>
  </View>
);

const AddNewPost = () => {
  return (
    <View style={styles.container}>
      <Header />
      {/* formic post uploader */}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
  },
});

export default AddNewPost;
