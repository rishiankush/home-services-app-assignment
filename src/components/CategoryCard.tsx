import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

interface CategoryCardProps {
  name: string;
  icon: any;
}

const CategoryCard = ({name, icon}: CategoryCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginVertical: 15,
    flex: 1,
    maxWidth: '25%',
  },
  iconContainer: {
    height: 52,
    width: 52,
    borderRadius: 26,
    backgroundColor: 'rgba(0, 0, 0, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  name: {
    fontFamily: 'Outfit-Medium',
    fontSize: 14,
    color: '#545454',
    marginTop: 5,
    textAlign: 'center',
  },
});

export default CategoryCard;
