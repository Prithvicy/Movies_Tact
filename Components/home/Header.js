import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { firebase } from "../../firebase";
const handleSignOut = async() => {
  try {
     await firebase.auth().signOut().then(() => console.log("byeee signed out")); 
  } catch (error) {
    console.log(error);
  }
};

const Header = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleSignOut}>
        <Image style={styles.logo} source={require("../../assets/Instagram-dark-796x398.png")} />
      </TouchableOpacity>
      <View style={styles.iconsContainer}>
        <TouchableOpacity>
          <Image
            style={{
              borderColor: "white",
            }}
            source={require("../../assets/homelogo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push("NewPostScreen")}>
          <Feather
            style={styles.icon}
            name="plus-square"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            style={styles.icon}
            name="heart-outlined"
            size={30}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <FontAwesome
            style={styles.icon}
            name="send-o"
            size={30}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 50,
    marginLeft: -20,
    marginBottom: 15,
    resizeMode: "contain",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  icon: {
    width: 30,
    color: "white",
    height: 30,
    marginLeft: 10,
  },
  unreadBadge: {
    backgroundColor: "orange",
    position: "absolute",
    top: -10,
    right: 5,
    alignItems: "center",
    height: 18,
    width: 25,

    borderRadius: 50,
    zIndex: 10,
  },
  unreadBadgeText: {
    color: "black",
    fontWeight: "600",
  },
});
