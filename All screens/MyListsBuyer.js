import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar } from 'react-native';

const data = [
  { id: '1', name: 'Pineapple Pro Max', price: '₹50,000' },
  { id: '2', name: 'Xiaomi 12 Pro', price: '₹31,000' },
  { id: '3', name: 'Realme 6 Pro', price: '₹23,700' },
  // ...more items
];

const Item = ({ name, price }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.price}>{price}</Text>
  </View>
);

const MyListsScreen = () => {
  const renderItem = ({ item }) => <Item name={item.name} price={item.price} />;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.actionBar}>
        <Text style={styles.actionBarTitle}>My Lists</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  actionBar: {
    height: 60,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  actionBarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  item: {
    flexDirection: 'row',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MyListsScreen;
