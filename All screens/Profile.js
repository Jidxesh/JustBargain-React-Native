import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

const LoginScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    // Implement your login logic here
    Alert.alert('Login Action', `Name: ${name}, Email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://www.solidbackgrounds.com/images/1920x1080/1920x1080-light-pastel-purple-solid-color-background.jpg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://cdn.pixabay.com/photo/2016/08/31/11/55/icon-1633250_960_720.png' }}
            style={styles.logo}
          />
        </View>
        <View style={styles.formContainer}>
          <View style={styles.card}>
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={name}
              onChangeText={setName}
            />
          </View>
          <View style={styles.card}>
            <TextInput
              placeholder="Email"
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  formContainer: {
    padding: 20,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    padding: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    marginBottom: 10,
  },
  input: {
    height: 40,
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default LoginScreen;
