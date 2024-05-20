import React, {useState} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import ProductItem from '../components/ProductItem';
import {useDispatch} from 'react-redux';
import {setAllCart} from '../redux/cartSlice';

const initialProducts = [
  {id: '1', name: 'Product 1', price: 29.99},
  {id: '2', name: 'Product 2', price: 39.99},
  {id: '3', name: 'Product 3', price: 49.99},
  {id: '4', name: 'Product 4', price: 59.99},
  {id: '5', name: 'Product 5', price: 69.99},
];

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);

  const handleAddToCart = product => {
    setCart([...cart, product]);
    dispatch(setAllCart([...cart, product]));
  };
  const handleRemoveFromCart = product => {
    if (cart.length === 0) {
      return false;
    }
    setCart(prevCart => {
      const index = prevCart.findIndex(item => item.id === product.id);
      if (index !== -1) {
        const updatedCart = [...prevCart];
        updatedCart.splice(index, 1);
        dispatch(setAllCart(updatedCart));
        return updatedCart;
      }
      return prevCart;
    });
  };

  const handleViewDetails = product => {
    navigation.navigate('ProductDetails', {product});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.cartCount}>Items in Cart: {cart.length}</Text>
      <FlatList
        data={initialProducts}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ProductItem
            product={item}
            onAddToCart={handleAddToCart}
            onViewDetails={handleViewDetails}
            onRemoveToCart={handleRemoveFromCart}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  cartCount: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default HomeScreen;
