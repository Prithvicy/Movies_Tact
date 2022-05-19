import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import Position from "react-native/Libraries/Components/Touchable/Position";
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
        <TouchableOpacity>
          <Image
            style={{
              borderColor: "red",
            }}
            source={require("../../assets/homelogo.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather
            style={styles.icon}
            name="plus-square"
            size={24}
            color="red"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo
            style={styles.icon}
            name="heart-outlined"
            size={24}
            color="red"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.unreadBadge}>
            <Text style={styles.unreadBadgeText}>11</Text>
          </View>
          <FontAwesome
            style={styles.icon}
            name="send-o"
            size={24}
            color="red"
          />
        </TouchableOpacity>
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
  icon: {
    width: 30,
    color: "red",
    height: 30,
    marginLeft: 10,
  },
  unreadBadge: {
    backgroundColor: "#B6FFCE",
    position: "absolute",
    top: -10,
    right: 15,
    alignItems: "center",
    height: 18,
    width: 25,

    borderRadius: 50,
    zIndex:10,
  },
  unreadBadgeText:{
      color:"black",
      fontWeight:"600",
  }
});
