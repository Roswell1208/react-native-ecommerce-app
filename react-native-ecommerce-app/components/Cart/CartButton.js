// React
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

// React Navigation
import { useNavigation } from '@react-navigation/native';

// Store
import { useCartStore } from '../../store/CartStore';



const CartButton = () => {

  const navigation = useNavigation();

  const totalQuantityInCart = useCartStore((state) =>
    state.cart.reduce((total, product) => total + product.quantity, 0)
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Panier')}>
        <Image source={require('../../assets/cart.png')} style={styles.image} />
      </TouchableOpacity>
      {totalQuantityInCart > 0 && (
        <View style={styles.badge}>
          <Text style={styles.quantity}>{totalQuantityInCart}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  badge: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  quantity: {
    color: 'white',
    fontSize: 14,
  },
});

export default CartButton