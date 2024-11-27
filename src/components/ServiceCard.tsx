import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

interface ServiceCardProps {
  title: string;
  price: string;
  reviews: string;
  image: any;
  bookmarkIcon: any;
  onBookmark?: () => void;
}

const ServiceCard = ({
  title,
  price,
  reviews,
  image,
  bookmarkIcon,
  onBookmark,
}: ServiceCardProps) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="contain" />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>₦ {price}</Text>
        <Text style={styles.reviews}>{reviews} reviews</Text>
      </View>
      <TouchableOpacity onPress={onBookmark}>
        <Image source={bookmarkIcon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginHorizontal: 15,
  },
  image: {
    width: 99,
    height: 100,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    color: '#000',
  },
  price: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    color: '#000',
    marginVertical: 5,
  },
  reviews: {
    fontFamily: 'Outfit-Regular',
    fontSize: 12,
    color: '#545454',
  },
  icon: {
    height: 24,
    width: 24,
  },
});

export default ServiceCard;
