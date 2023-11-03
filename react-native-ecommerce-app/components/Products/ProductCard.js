// React
import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const ProductCard = (props) => {

    const {product} = props

    return (
        <View style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.title}>{product.title}</Text>
            <Image source={{ uri: product.image }} style={styles.image} resizeMode="cover" />
          </View>
        </View>
      );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
    },
    title: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
    },
    image: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
  });

export default ProductCard