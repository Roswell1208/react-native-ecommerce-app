// React
import React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Store
import { useCartStore } from '../../store/CartStore';

const Cart = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  const navigation = useNavigation();

  const renderCartItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} />
      <Text style={styles.price}>{item.price} €</Text>
      <View style={styles.quantityContainer}>
        <Text>Quantité: </Text>
        <Button
          title="-"
          onPress={() => updateQuantity(item.id, item.quantity - 1)}
          disabled={item.quantity === 1}
        />
        <Text>   {item.quantity}   </Text>
        <Button title="+" onPress={() => updateQuantity(item.id, item.quantity + 1)} />
      </View>
      <Button title="Retirer du panier" onPress={() => removeFromCart(item.id)} />
    </View>
  );

  const renderEmptyCart = () => {
    return (
      <View style={styles.emptyCartContainer}>
        <Text style={styles.emptyCartText}>Votre panier est vide</Text>
        <Button title="Voir la liste des produits" onPress={() => { navigation.navigate('Produits') }} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          renderItem={renderCartItem}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        renderEmptyCart()
      )}

      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>Total: {totalAmount.toFixed(2)} €</Text>
        <Button title="Passer la commande" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  totalAmountContainer: {
    backgroundColor: '#eee',
    padding: 16,
    alignItems: 'center',
  },
  totalAmountText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});

export default Cart;
