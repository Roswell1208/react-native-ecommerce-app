// React
import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';

// Store
import { useCartStore } from '../../store/CartStore';

// React Navigation
import { useNavigation } from '@react-navigation/native';

const ProductDetails = ({ route }) => {
  const { product } = route.params;
  const addToCart = useCartStore((state) => state.addToCart);

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: product.title,
    });
  }, []);

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <TouchableOpacity onPress={toggleModal}>
        <Image source={{ uri: product.image }} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>{product.price} €</Text>

      <Button title="Ajouter au panier" onPress={handleAddToCart} />

      <Modal visible={isModalVisible} transparent={true} onRequestClose={toggleModal}>
        <View style={styles.modalContainer}>
          <Image source={{ uri: product.image }} style={styles.modalImage} />
          <Button title="Fermer" onPress={toggleModal} style={styles.modalCloseButton} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  modalImage: {
    width: '100%',
    height: 350,
    resizeMode: 'contain',
    marginBottom: 20,
  },
});

export default ProductDetails;
