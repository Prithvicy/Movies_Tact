import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginHorizontal: 15, marginTop: 10 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        <CommentSection post={post} />
        <Comments post={post} />
      </View>
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
    <TouchableOpacity>
      <Entypo name="dots-three-horizontal" size={20} color="white" />
    </TouchableOpacity>
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
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIcons}>
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imgUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imgUrl} />
      <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[2].imgUrl} />
    </View>
    <View style={styles.rightFooterIconsContainer}>
      <TouchableOpacity>
        <FontAwesome5 name="bookmark" size={24} color="white" />
      </TouchableOpacity>
    </View>
  </View>
);
const Likes = ({ post }) => (
  <View style={styles.likesView}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post.likes.toLocaleString("en")} likes
    </Text>
  </View>
);
const Icon = ({ imgStyle, imgUrl }) => (
  <TouchableOpacity>
    <Image source={imgUrl} style={imgStyle} />
  </TouchableOpacity>
);

const Caption = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "900" }}>{post.user} </Text>
      <Text>{post.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    {!!post.comments.length && ( //single negation 
      <Text style={{ color: "gray" }}>
        View{post.comments.length > 1 ? " all " : ""} {post.comments.length}{" "}
        {post.comments.length > 1 ? "comments" : "comment"}
      </Text>
    )}
  </View>
);
const Comments = ({post}) => (
  <>
    {post.comments.map((comment, index) => (
      <View key={index}>
          <Text style={{color:"white"}}>
            <Text style={{fontWeight: "900"}}>{comment.user}</Text>
               {' '} {comment.comment}
          </Text>
      </View>
    ))}
  </>
)
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
  leftFooterIcons: {
    flexDirection: "row",
    width: "32%",
    justifyContent: "space-between",
  },
  rightFooterIconsContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  likesView: {
    flexDirection: "row",
    marginTop: 4,
  },
});

export default Post;
