import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';

const AccountCreationScreen = () => {
  const [organizationName, setOrganizationName] = useState('');
  const [workPhone, setWorkPhone] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = () => {
    // Add account creation logic here

    
    Alert.alert('Account Creation', 'Your account is being created.', [{ text: 'OK' }]);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.headerText}>Just Bargain</Text>
      <Text style={styles.subHeaderText}>Create an account</Text>
      <Text style={styles.descriptionText}>Let's get started by filling out the form below.</Text>
      
      <TextInput
        style={styles.input}
        onChangeText={setOrganizationName}
        value={organizationName}
        placeholder="Organization's name"
      />
      <TextInput
        style={styles.input}
        onChangeText={setWorkPhone}
        value={workPhone}
        placeholder="Work Phone"
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        onChangeText={setGstNumber}
        value={gstNumber}
        placeholder="GST"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <TextInput
        style={styles.input}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder="Confirm Password"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.createButton} onPress={handleCreateAccount}>
        <Text style={styles.createButtonText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.signInText}>Already have an account? Sign In here</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 60, 
  },
  subHeaderText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 30, 
  },
  descriptionText: {
    fontSize: 16,
    color: '#000',
    marginTop: 10, 
    marginBottom: 20, 
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    marginBottom: 15,
    color: '#000',
  },
  createButton: {
    backgroundColor: '#6200EE',
    borderRadius: 5,
    paddingVertical: 15,
    marginTop: 20, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  createButtonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  signInText: {
    fontSize: 16,
    color: '#6200EE',
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 20, 
  },
});

export default AccountCreationScreen;
