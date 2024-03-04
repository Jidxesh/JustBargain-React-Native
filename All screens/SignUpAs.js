import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SignInScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Sign in</Text>
      <Button
        title="As a Buyer"
        onPress={() => navigation.navigate('NextScreen')}
      />
      <Button
        title="As a Seller"
        onPress={() => navigation.navigate('AnotherScreen')} // Assuming you have another screen
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default SignInScreen;
