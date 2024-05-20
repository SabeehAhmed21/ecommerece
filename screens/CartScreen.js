import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const CartScreen = () => {
  // const [cartItems, setCartItems] = useState([
  //   {id: '1', name: 'Product 1', quantity: 2},
  //   {id: '2', name: 'Product 2', quantity: 1},
  // ]);
  const allCart = useSelector(state => state.cart.cart);
  const [cartItems, setCartItems] = useState([]);

  console.log(cartItems, 'item');
  useEffect(() => {
    const aggregatedItems = allCart.reduce((acc, product) => {
      const existingProduct = acc.find(item => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        acc.push({...product, quantity: 1});
      }
      return acc;
    }, []);

    setCartItems(aggregatedItems);
  }, [allCart]);

  return (
    <View style={styles.container}>
      {cartItems.length > 0 ? (
        <FlatList
          data={cartItems}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            </View>
          )}
        />
      ) : (
        <Text style={{fontSize: 20}}>No items in the cart</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  item: {
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
  quantity: {
    fontSize: 16,
    color: '#888',
  },
});

export default CartScreen;
