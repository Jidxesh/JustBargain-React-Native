import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Alert,
  Platform,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const ListProductScreen = () => {
  const [productName, setProductName] = useState('');
  const [company, setCompany] = useState('');
  const [model, setModel] = useState('');
  const [description, setDescription] = useState('');
  const [ram, setRam] = useState('');
  const [rom, setRom] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  const handleNext = () => {
    // Validation or processing logic before going to the next step mc burhan
    console.log('Next button pressed');
  };

  const handleImageUpload = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>List Product</Text>
      <TouchableOpacity style={styles.imageUpload} onPress={handleImageUpload}>
        {image ? (
          <Image source={{ uri: image }} style={styles.uploadedImage} />
        ) : (
          <Text style={styles.imageUploadText}>Add Cover Image</Text>
        )}
      </TouchableOpacity>
      
      <TextInput
        style={styles.input}
        onChangeText={setProductName}
        value={productName}
        placeholder="PRODUCT NAME"
      />
      <TextInput
        style={styles.input}
        onChangeText={setCompany}
        value={company}
        placeholder="COMPANY"
      />
      <TextInput
        style={styles.input}
        onChangeText={setModel}
        value={model}
        placeholder="MODEL"
      />
      <TextInput
        style={styles.input}
        onChangeText={setDescription}
        value={description}
        placeholder="DESCRIPTION"
        multiline
      />
      <TextInput
        style={styles.input}
        onChangeText={setRam}
        value={ram}
        placeholder="RAM (In GB)"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setRom}
        value={rom}
        placeholder="ROM (In GB)"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>NEXT</Text>
      </TouchableOpacity>

      <Text style={styles.stepText}>Step 1/2</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageUpload: {
    backgroundColor: '#E0E0E0',
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageUploadText: {
    color: '#757575',
  },
  uploadedImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  input: {
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  stepText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default ListProductScreen;
