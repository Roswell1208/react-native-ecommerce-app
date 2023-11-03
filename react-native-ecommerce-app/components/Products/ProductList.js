// React
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

// Data source
import { fetchProductsData } from '../../datas/ProductsDataSource';

// Components
import ProductCard from './ProductCard';

// React Navigation
import { useNavigation } from '@react-navigation/native';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProductsData();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products.filter(item => item.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <View style={styles.container}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 10, margin: 10, padding: 10 }}
        placeholder="Rechercher un produit..."
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Details', {product: item})}>
              <ProductCard product={item} />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 65,
  }
});

export default ProductList;
