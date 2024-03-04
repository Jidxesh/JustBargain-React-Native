import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const data = {
  topRatedShops: [
    { id: '1', title: 'A-1 Mobile', rating: '5', imageUrl: 'https://images.jdmagicbox.com/comp/palghar/p7/022pxx22.xx22.130219133830.p3p7/catalogue/a1-mobile-shop-nalasopara-east-palghar-mobile-phone-dealers-c927o.jpeg' },
    { id: '2', title: 'B-1 Mobile', rating: '4', imageUrl: 'https://images.jdmagicbox.com/comp/satara/l4/9999p2162.2162.150518214229.q9l4/catalogue/famous-mobile-shop-phaltan-satara-mobile-phone-dealers-3nrg2mokjg.jpg' },
    { id: '3', title: 'C-1 Mobile', rating: '3', imageUrl: 'https://onlinehyderabad.in/wp-content/uploads/2019/01/Best-Mobile-Phone-Stores-in-Hyderabad-1000x484.jpeg' },
    // ... add more shops
  ],
  pastDeals: [
    { id: '1', title: 'Redmi A1', initialPrice: '15,000', finalPrice: '12,500', imageUrl: 'https://m.media-amazon.com/images/I/41JM3Ra+tiL._SY300_SX300_.jpg' },
    { id: '2', title: 'OPPO F1', initialPrice: '12,000', finalPrice: '10,000', imageUrl: 'https://5.imimg.com/data5/YT/PN/GLADMIN-15627335/oppo-f1-plus-mobile-500x500.jpg' },
    // ... add more deals
  ]
};

const ShopScreen = () => {
  const renderShopItem = ({ item }) => (
    <TouchableOpacity style={styles.shopItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.shopImage} />
      <Text style={styles.shopTitle}>{item.title}</Text>
      <Text>{`${item.rating} Stars`}</Text>
    </TouchableOpacity>
  );

  const renderDealItem = ({ item }) => (
    <TouchableOpacity style={styles.dealItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.dealImage} />
      <Text style={styles.dealTitle}>{item.title}</Text>
      <Text>{`Initial: ${item.initialPrice}`}</Text>
      <Text>{`Final: ${item.finalPrice}`}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Kalyan:Thane</Text>
        <Text style={styles.welcomeText}>Welcome User</Text>
      </View>

      <Text style={styles.sectionTitle}>Top Rated Shop</Text>
      <FlatList
        horizontal
        data={data.topRatedShops}
        renderItem={renderShopItem}
        keyExtractor={item => item.id}
      />

      <Text style={styles.sectionTitle}>Past Deals</Text>
      <FlatList
        data={data.pastDeals}
        renderItem={renderDealItem}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  welcomeText: {
    fontSize: 14,
    color: 'grey',
  },
  sectionTitle: {
    fontSize: 16,
    padding: 16,
    fontWeight: 'bold',
  },
  shopItem: {
    margin: 8,
    alignItems: 'center',
  },
  shopImage: {
    width: 100,
    height: 100,
  },
  shopTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dealItem: {
    margin: 8,
    alignItems: 'center',
  },
  dealImage: {
    width: 100,
    height: 100,
  },
  dealTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  // Add more styling here as needed
});

export default ShopScreen;
