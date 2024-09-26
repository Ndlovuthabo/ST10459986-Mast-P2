



 



import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList, Image, Alert } from 'react-native';

interface MenuItem {
  dishName: string;
  description: string;
  course: string;
  price: string;
  imageUrl: string;
}

const ChefMenuApp = () => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleAddItem = () => {
    // Validation: ensure that fields are not empty
    if (!dishName || !description || !course || !price || !imageUrl) {
      Alert.alert('Error', 'Please fill all fields before adding an item.');
      return;
    }

    // Validation: ensure that price is a valid number
    if (isNaN(Number(price))) {
      Alert.alert('Error', 'Please enter a valid number for the price.');
      return;
    }

    const newItem = { dishName, description, course, price, imageUrl };
    setMenuItems([...menuItems, newItem]);
    setDishName('');
    setDescription('');
    setCourse('');
    setPrice('');
    setImageUrl('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Menu Item</Text>

      <TextInput
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
        style={styles.input}
      />
      <TextInput
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
        style={styles.input}
      />
      <TextInput
        placeholder="Course (e.g., Starter, Main, Dessert)"
        value={course}
        onChangeText={setCourse}
        style={styles.input}
      />
      <TextInput
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        placeholder="Image URL"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={styles.input}
      />

      <Button title="Add Item" onPress={handleAddItem} />

      <FlatList
        data={menuItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.menuItemCard}>
            <Image source={{ uri: item.imageUrl }} style={styles.menuImage} />
            <View style={styles.menuTextContainer}>
              <Text style={styles.menuItemText}>{item.dishName}</Text>
              <Text style={styles.menuItemDescription}>{item.description}</Text>
              <Text style={styles.menuItemCourse}>{item.course}</Text>
              <Text style={styles.menuItemPrice}>${item.price}</Text>
            </View>
          </View>
        )}
      />

      <Text style={styles.totalItemsText}>Total Items: {menuItems.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 10,
    backgroundColor: '#fff',
  },
  menuItemCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  menuImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  menuTextContainer: {
    flex: 1,
    padding: 10,
  },
  menuItemText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  menuItemDescription: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  menuItemCourse: {
    fontSize: 16,
    color: '#555',
    marginBottom: 5,
  },
  menuItemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  totalItemsText: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ChefMenuApp;
