import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AddNewPost from "../Components/newPost/AddNewPost";
import FormicPostUploader from "../Components/newPost/FormicPostUploader";

const NewPostScreen = () => {
  return (
    <SafeAreaView style={{backgroundColor: "black" , flex:1}}>
    <AddNewPost/>
    <FormicPostUploader/>
    </SafeAreaView>
  );
};

export default NewPostScreen;
