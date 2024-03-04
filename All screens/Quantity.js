import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const SetPriceScreen = () => {
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (type) => {
    setQuantity((prevQuantity) => {
      if (type === 'increase' && prevQuantity < 99) {
        return prevQuantity + 1;
      } else if (type === 'decrease' && prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        return prevQuantity;
      }
    });
  };

  const handlePublish = () => {
    // Handle the publish action
    console.log('Price:', price, 'Quantity:', quantity);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Set Price</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Initial Amount</Text>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            placeholder="Price"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.quantityContainer}>
          <Text style={styles.label}>Quantity</Text>
          <View style={styles.quantitySelector}>
            <TouchableOpacity onPress={() => handleQuantityChange('decrease')} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={() => handleQuantityChange('increase')} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={styles.publishButton} onPress={handlePublish}>
          <Text style={styles.publishButtonText}>PUBLISH</Text>
        </TouchableOpacity>

        <Text style={styles.stepIndicator}>Step 2/2</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  inputContainer: {
    width: '80%',
    marginBottom: 24,
  },
  label: {
    color: '#000',
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    fontSize: 16,
    color: '#000',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 24,
  },
  quantitySelector: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#CCC',
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  quantityButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
  quantity: {
    color: '#000',
    fontSize: 16,
  },
  publishButton: {
    backgroundColor: '#6200EE',
    borderRadius: 30,
    paddingVertical: 15,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  publishButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  stepIndicator: {
    color: '#000',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default SetPriceScreen;