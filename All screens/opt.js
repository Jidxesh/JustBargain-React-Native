import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const OTPVerificationScreen = ({ navigation }) => {
  const [otp, setOtp] = useState('');

  const handleVerifyOTP = () => {
    // Here is backend to verify the OTP and burhan is gay fr real 
    // placeholder logic for demonstration purposes read this burhan 
    if (otp === '123456') { // Replace with your own logic
      Alert.alert('Success', 'OTP Verified!', [{ text: 'OK' }]);
      // next screen logic be carefully arryan 
      navigation.navigate('Home');
    } else {
      Alert.alert('Failed', 'Invalid OTP. Please try again.', [{ text: 'OK' }]);
    }
  };

  const handleResendOTP = () => {
    // Implement resend OTP logic here
    
    Alert.alert('OTP Sent', 'A new OTP has been sent to your phone.', [{ text: 'OK' }]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign In</Text>
      <Text style={styles.instructionText}>Enter the OTP</Text>
      <TextInput
        style={styles.input}
        onChangeText={setOtp}
        value={otp}
        placeholder="000000"
        keyboardType="number-pad"
        maxLength={6} // Assuming OTP length of 6
      />
      <Text style={styles.infoText}>Ready to create an account?</Text>
      <TouchableOpacity style={styles.button} onPress={handleResendOTP}>
        <Text style={styles.buttonText}>Resend OTP</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleVerifyOTP}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#6200EE',
    alignSelf: 'center',
    marginTop: 20,
  },
  instructionText: {
    fontSize: 20,
    color: '#6200EE',
    alignSelf: 'center',
    marginVertical: 20,
  },
  input: {
    height: 50,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#6200EE',
    borderRadius: 10,
    padding: 10,
    fontSize: 18,
    color: '#6200EE',
  },
  infoText: {
    fontSize: 18,
    color: '#6200EE',
    alignSelf: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#6200EE',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});

export default OTPVerificationScreen;

