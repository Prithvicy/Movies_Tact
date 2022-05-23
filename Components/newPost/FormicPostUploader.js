import { View, Text } from 'react-native'
import * as Yup from 'yup';
import {Formik} from 'formik';

import React from 'react'
const uploadPostSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required('A URL is required'),
  caption: Yup.string().max(2200, 'Caption has reached the character limit'),
});
const FormicPostUploader = () => {
  return (
    <View>
      <Text style={{color:"white"}}>FormicPostUploader</Text>
    </View>
  )
}

export default FormicPostUploader