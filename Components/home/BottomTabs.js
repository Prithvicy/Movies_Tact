import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { React, useState } from "react";
import { Divider } from "react-native-elements";

export const bottomTabIcons = [
  {
    name: "Home",
    active: require("../../assets/footerIcons/home.png"),
    inactive: require("../../assets/footerIcons/home-inactive.png"),
  },
  {
    name: "Search",
    active: require("../../assets/footerIcons/search.png"),
    inactive: require("../../assets/footerIcons/search-inactive.png"),
  },
  {
    name: "Reels",
    active: require("../../assets/footerIcons/reels.png"),
    inactive: require("../../assets/footerIcons/reels-inactive.png"),
  },
  {
    name: "Shop",
    active: require("../../assets/footerIcons/shop.png"),
    inactive: require("../../assets/footerIcons/shop-inactive.png"),
  },
  {
    name: "Profile",
    active: require("../../assets/p1.jpeg"),
    inactive: require("../../assets/p1.jpeg"),
  },
];
const BottomTabs = ({ icons }) => {
  const [activeTab, setActiveTab] = useState("Home");
  const Icon = ({ icon }) => (
    <TouchableOpacity>
      <Image source={icon.active} style={styles.icon} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
    <Divider width={1} orientation="vertical" style={{borderColor:"white"}}/>
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  icon: {
    width: 30,
    height: 30,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    height: 50,
    paddingTop: 10,
  },
});

export default BottomTabs;
