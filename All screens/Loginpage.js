import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const maxCharCount = 10; 

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {
    // Authentication logic would go here mc burhan
    Alert.alert('Login Attempt', `Phone Number: ${phoneNumber}`, [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Just Bargain</Text>
      <Text style={styles.labelText}>Enter your phone number:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        maxLength={maxCharCount}
      />
      <Text style={styles.charCount}>
        {`${maxCharCount - phoneNumber.length}/${maxCharCount} characters left`}
      </Text>
      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    color: '#6200EE',
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  labelText: {
    fontSize: 16,
    color: '#6200EE',
    marginBottom: 5,
  },
  input: {
    height: 50,
    borderColor: '#6200EE',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#6200EE',
    marginBottom: 5,
    width: '100%', 
  },
  charCount: {
    fontSize: 14,
    color: '#6200EE',
  
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#6200EE',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    width: '100%', 
  },
  submitButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});


export default LoginScreen;
