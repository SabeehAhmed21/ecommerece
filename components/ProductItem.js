import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const ProductItem = ({product, onAddToCart, onViewDetails, onRemoveToCart}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Button title="View Details" onPress={() => onViewDetails(product)} />
      <Button title="Add to Cart" onPress={() => onAddToCart(product)} />
      <Button
        title="Remove from Cart"
        onPress={() => onRemoveToCart(product)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: '#888',
  },
});

export default ProductItem;
