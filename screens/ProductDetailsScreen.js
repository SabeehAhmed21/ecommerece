import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const ProductDetailsScreen = ({route}) => {
  const {product} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 22,
    color: '#888',
  },
});

export default ProductDetailsScreen;
