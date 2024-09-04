import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import data from './data.json';

const App = () => {

  // Function to render each item
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.photo_url }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.email}>{item.email}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.email} // Unique key for each item
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});

export default App;