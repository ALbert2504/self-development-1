import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {
  View,
  StyleSheet,
  Image,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

// Vector icons
import Icon from 'react-native-vector-icons/FontAwesome';

// UIKit
import {
  BaseTitle,
  FormGroup,
  BaseInput,
  BaseButton,
} from '../../../UiKit';

// Helpers
import { handleStateChange } from '../../../helpers';

// Hooks
import { useFormState } from '../../../hooks';

// Constants
import { sizes, mixins, formValuesFields, colors } from '../../../constants';

// Actions
import { createPost } from '../../../store/posts/posts.actions';


const { addNewPost: { title, description } } = formValuesFields;

const AddNewPostForm = () => {
  const dispatch = useDispatch();

  const [values, setValues, resetValues] = useFormState(title, description);
  console.log(values, 'values');
  const [image, setImage] = useState(null);

  const handleChange = handleStateChange(setValues);

  const handleChooseImage = () => {
    const options = {
      noData: true,
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (!response?.assets?.[0]) {
        return void 0;
      }

      setImage(response.assets[0]);
    });
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  const handleSubmit = async () => {
    const { title, description } = values;

    await dispatch(createPost({
      title: title.value,
      description: description.value,
      image,
    }));

    await resetValues();
  };

  return (
    <View style={styles['add-new-form-post']}>
      <BaseTitle size="base" color="primary" weight="bold">
        Add memory
      </BaseTitle>
      <View style={styles['add-new-form-post__inputs']}>
        <FormGroup label="Title">
          <BaseInput onChangeText={(value) => handleChange(title, value)} value={values.title.value}/>
        </FormGroup>
        <FormGroup style={{ ...mixins.margins.marginVertical2 }} label="Description">
          <BaseInput onChangeText={(value) => handleChange(description, value)} value={values.description.value}/>
        </FormGroup>
        {!image ? (
          <BaseButton variant="secondary" onPress={handleChooseImage}>
            <Icon name="image" size={30} />
          </BaseButton>
        ) : (
          <View style={styles['add-new-form-post__img-container']}>
            <View style={styles['add-new-form-post__close']} onTouchStart={handleDeleteImage}>
              <Icon
                name="close"
                size={50}
                color={colors.red}
              />
            </View>
            <Image
              source={{ uri: image.uri }}
              resizeMode="cover"
              style={{ ...mixins.width100, height: 200 }}
            />
          </View>
        )}
        <BaseButton style={{ ...mixins.margins.marginVertical2 }} variant="primary" onPress={handleSubmit}>
          Post
        </BaseButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  'add-new-form-post': {
    padding: sizes.small,
    ...mixins.borders.border1,
    ...mixins.borders.primary,
    ...mixins.borders.rounded,
  },
  'add-new-form-post__inputs': {
    ...mixins.margins.marginTop3,
  },
  'add-new-form__uploaded-image': {
    ...mixins.width100,
  },
  'add-new-form-post__img-container': {
    position: 'relative',
  },
  'add-new-form-post__close': {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 9,
  },
});

export default AddNewPostForm;
