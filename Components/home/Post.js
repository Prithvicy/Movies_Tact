import { View, Text, Image, StyleSheet ,TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
    </View>
  );
};
const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image style={styles.story} source={post.profile_picture} />
      <Text
        style={{
          color: "white",
          marginLeft: 5,
          marginTop: 8,
          fontWeight: "600",
        }}
      >
        {post.user}
      </Text>
    </View>
    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  <View
    style={{
      width: "100%",
      height: 450,
    }}
  >
    <Image
      source={post.imageUrl}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
);
const postFooterIcons = [
  {
    name: "Like",
    imgUrl: require("../../assets/footerIcons/like.png"),
    likedImageUrl: require("../../assets/footerIcons/liked.png"),
  },
  {
    name: "Comment",
    imgUrl: require("../../assets/footerIcons/comment.png"),
  },
  {
    name: "Share",
    imgUrl: require("../../assets/footerIcons/share.png"),
  },
  {
    name: "Save",
    imgUrl: require("../../assets/footerIcons/save.png"),
  },
];
const PostFooter = () => (
  <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imgUrl} />
);
const Icon = ({imgStyle, imgUrl}) => (
  <TouchableOpacity>
    <Image source={imgUrl} style={imgStyle} />
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  story: {
    marginTop: 10,
    width: 35,
    height: 35,
    borderRadius: 50,
    marginLeft: 6,
    borderWidth: 1.6,
    borderColor: "#ff8501",
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
});

export default Post;
