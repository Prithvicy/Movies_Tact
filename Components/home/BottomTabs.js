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
    <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
      <Image
        source={activeTab === icon.name ? icon.active : icon.inactive}
        //the current one that is clicked if it matched the icon name then make it active else render inactive
        style={[
          styles.icon,
          icon.name === "Profile" ? styles.profilePic() : null, //square to circle
          activeTab === "Profile" && icon.name === activeTab 
            ? styles.profilePic(activeTab) //
            : null,
        ]}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.wrapper}>
      <Divider
        width={1}
        orientation="vertical"
        style={{ borderColor: "white" }}
      />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    zIndex: 999,
    bottom: "3%",
    width: "100%",
    backgroundColor: "#000",
  },
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
  profilePic: (activeTab = " ") => ({
    borderRadius: 50,
    borderWidth: activeTab === "Profile" ? 2 : 0,
    borderColor: "#fff",
  }),
});

export default BottomTabs;
