import React, { useState } from 'react';
import { StyleSheet, Alert, Text, Image, Dimensions, SafeAreaView, StatusBar, View, TouchableOpacity, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const COLORS = { primary: '#3b8132', white: '#fff', green: '#4EA837', gray: '#6c757d' };
const { width, height } = Dimensions.get('screen');

function formatPriceWithCommas(price) {
  const numericPrice = Number(price);
  if (isNaN(numericPrice)) {
    return price;
  }
  const [integerPart, decimalPart] = numericPrice.toFixed(2).split('.');
  const formattedPrice = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const finalPrice = decimalPart ? `${formattedPrice}.${decimalPart}` : formattedPrice;
  return finalPrice;
}

const data = [
  {
    id: 1,
    title: 'Ogbono soup',
    price: 1500,
    rating: '4.8 ',
    star: require('../../assets/cartlist/star.png'),
    image: require('../../assets/cartlist/ogbono.png'),
    cartTotal: 1500,
    delivery: 500,
    promoDiscount: 0,
    count: 1
  },
  {
    id: 2,
    title: 'Okro soup',
    price: 2800,
    rating: '3.5 ',
    star: require('../../assets/cartlist/star.png'),
    image: require('../../assets/cartlist/ogbono.png'),
    cartTotal: 2800,
    delivery: 800,
    promoDiscount: 0,
    count: 1
  },
];

const MyCartScreen = () => {
  const navigation = useNavigation('');
  const [cartData, setCartData] = useState(data);

  const incrementCount = (item) => {
    const updatedCartData = cartData.map((cartItem) => {
      if (cartItem.id === item.id) {
        return { ...cartItem, count: cartItem.count + 1 };
      }
      return cartItem;
    });
    setCartData(updatedCartData);
  };

  const decrementCount = (item) => {
    const updatedCartData = cartData.map((cartItem) => {
      if (cartItem.id === item.id && cartItem.count > 1) {
        return { ...cartItem, count: cartItem.count - 1 };
      }
      return cartItem;
    });
    setCartData(updatedCartData);
  };

  const calculateCartTotal = (item) => {
    return item.cartTotal * item.count;
  };

  const calculateDelivery = (item) => {
    return item.delivery * item.count;
  };

  const calculatePromoDiscount = (item) => {
    return item.promoDiscount * item.count;
  };

  const calculateGrandTotal = (item) => {
    const total = item.cartTotal + item.delivery - item.promoDiscount;
    return total * item.count;
  };

  const deleteItem = (item) => {
    Alert.alert(
      'Are you sure?',
      'Do you really want to delete this item?',
      [
        {
          text: 'Cancel',
        },
        {
          text: 'Yes',
          onPress: () => {
            const updatedCartData = cartData.filter((cartItem) => cartItem.id !== item.id);
            setCartData(updatedCartData);
          },
        },
      ],
      { cancelable: false }
    );
  };

  const addMoreItems = () => {
    const newItem = {
      id: cartData.length + 1,
      title: 'New Item',
      price: 1000,
      rating: '4.5',
      star: require('../../assets/cartlist/star.png'),
      image: require('../../assets/cartlist/ogbono.png'),
      cartTotal: 1000,
      delivery: 200,
      promoDiscount: 0,
      count: 1
    };

    setCartData([...cartData, newItem]);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar backgroundColor={COLORS.white} />
      <TouchableOpacity onPress={() => navigation.navigate('OgbonoScreen')}>
        <Image source={require('../../assets/cartlist/back-button.png')} style={{ width: 25, height: 25, marginLeft: 20, marginTop: 10 }} />
      </TouchableOpacity>
      <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, alignSelf: 'center' }}>Your Food Cart</Text>

      <FlatList
        data={cartData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#FCF8D9', marginTop: 20, height: 130, width: 370, flexDirection: 'row' }}>
              <View style={{ marginTop: 30, marginLeft: 20 }}>
                <TouchableOpacity onPress={() => incrementCount(item)}>
                  <Image source={require('../../assets/cartlist/plus.png')} style={{ width: 15, height: 15, marginBottom: 10 }} />
                </TouchableOpacity>
                <Text style={{ fontSize: 12, marginBottom: 8, marginLeft: 1 }}>{item.count}</Text>
                <TouchableOpacity onPress={() => decrementCount(item)}>
                  <Image source={require('../../assets/cartlist/minus.png')} style={{ width: 15, height: 15 }} />
                </TouchableOpacity>
              </View>
              <Image style={{ width: 120, height: 120, marginLeft: 20, marginTop: 5 }} source={item.image} />
              <View style={{ marginLeft: 15, marginTop: 30 }}>
                <Text style={{ fontSize: 12 }}>{item.title} </Text>
                <Text style={{ fontSize: 12, marginTop: 10, marginBottom: 10 }}>#{formatPriceWithCommas(item.price * item.count)} </Text>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require('../../assets/cartlist/star.png')} style={{ width: 10, height: 10, marginTop: 3, marginRight: 5 }} />
                  <Text style={{ fontSize: 12 }}>{item.rating}</Text>
                </View>
              </View>
              <View style={{ marginTop: 60, marginLeft: 30 }}>
                <TouchableOpacity onPress={() => deleteItem(item)}>
                  <Image source={require('../../assets/cartlist/delete.png')} style={{ width: 20, height: 20 }} />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity onPress={addMoreItems} style={{ flexDirection: 'row', width: 130, height: 40, borderColor: COLORS.green, borderRadius: 3, borderWidth: 2, marginLeft: 200, marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('../../assets/cartlist/plus.png')} style={{ width: 10, height: 10, tintColor: COLORS.green, marginRight: 5 }} />
              <Text style={{ fontSize: 12, color: COLORS.green }}>Add more items </Text>
            </TouchableOpacity>

            <View style={{ flexDirection: 'row', position: 'absolute', top: 250, marginLeft: 20 }}>
              <Text>Cart Total </Text>
              <Text style={{ marginLeft: 170 }}>#{formatPriceWithCommas(calculateCartTotal(item))} </Text>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 20, position: 'absolute', top: 300 }}>
              <Text>Delivery </Text>
              <Text style={{ marginLeft: 185 }}>#{formatPriceWithCommas(calculateDelivery(item))} </Text>
            </View>
            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 20, position: 'absolute', top: 350 }}>
              <Text>Promo Discount </Text>
              <Text style={{ marginLeft: 130 }}>#{formatPriceWithCommas(calculatePromoDiscount(item))} </Text>
            </View>
            <View style={{ borderTopWidth: 1, width: width * 0.9, alignSelf: 'center', position: 'absolute', top: 400, borderColor: COLORS.gray }} />

            <View style={{ flex: 1, flexDirection: 'row', marginLeft: 20, position: 'absolute', top: 420 }}>
              <Text>Grand Total </Text>
              <Text style={{ marginLeft: 160 }}>#{formatPriceWithCommas(calculateGrandTotal(item))} </Text>
            </View>
          </View>
        )}
      />

      <View style={{ position: 'absolute', top: 600, left: 15 }}>
        <TouchableOpacity style={{ height: 40, width: width * 0.9, alignSelf: 'center', borderRadius: 50, backgroundColor: COLORS.green, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: COLORS.white }} onPress={() => navigation.navigate('CheckoutScreen')}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyCartScreen;

const styles = StyleSheet.create({});
