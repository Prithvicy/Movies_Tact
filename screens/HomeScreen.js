import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../Components/home/Header";
import Stories from "../Components/home/Stories";
import Post from "../Components/home/Post";
import { POSTS } from "../data/post";
import BottomTabs, { bottomTabIcons } from "../Components/home/BottomTabs";
import { useEffect, useState } from "react";
import { db } from "../firebase";
const HomeScreen = ({navigation}) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collectionGroup('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        setPosts(snapshot.docs.map(post => ({id: post.id, ...post.data()})));
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});

export default HomeScreen;
