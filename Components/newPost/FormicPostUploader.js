import { View, Text, TextInput, Image, Button } from "react-native";
import * as Yup from "yup";
import { Formik, formik } from "formik";

import React from "react";
import { useState } from "react";
import { Divider } from "react-native-elements";
const PLACEHOLDER_IMG =
  "https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-cloud-upload-icon-png-image_316794.jpg";
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("A URL is required"),
  caption: Yup.string().max(2200, "Caption has reached the character limit"),
});
const FormicPostUploader = () => {
  const [thumbnailUrl, setThumbnailUrl] = useState(PLACEHOLDER_IMG);
  return (
    <Formik
      initialValues={{ caption: "", imageUrl: "" }}
      onSubmit={uploadPostSchema}
      validationSchema={uploadPostSchema}
      validateOnMount={true}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        isValid,
      }) => (
        <>
          <View
            style={{
              margin: 20,
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <Image
              style={{ height: 100, width: 100 }}
              source={{ uri: thumbnailUrl ? thumbnailUrl : PLACEHOLDER_IMG }}
            />
            <View style={{ flex: 1, marginLeft: 12 }}>
              <TextInput
                style={{ color: "white", fontSize: 20 }}
                placeholderTextColor="grey"
                placeholder="Write a caption"
                multiline={true}
                onChangeText={handleChange("caption")}
                onBlur={handleBlur("caption")}
                value={values.caption}
              />
            </View>
          </View>
          <Divider width={0.2} orientation="vertical" />

          <TextInput
            onChange={(e) => setThumbnailUrl(e.nativeEvent.text)}
            style={{ color: "white", fontSize: 18 }}
            placeholder="Enter Image Url"
            placeholderTextColor="gray"
            onChangeText={handleChange("imageUrl")}
            onBlur={handleBlur("imageUrl")}
            value={values.imageUrl}
            autoCorrect={false}
            autoCapitalize="none"
          />

          {errors.imageUrl && (
            <Text style={{ fontSize: 10, color: "red" }}>
              {errors.imageUrl}
            </Text>
          )}
          <Button onPress={handleSubmit} title="Share" disabled={!isValid} />
        </>
      )}
    </Formik>
  );
};

export default FormicPostUploader;
