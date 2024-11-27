import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, Image, Pressable} from 'react-native';
import ServiceCard from '../components/ServiceCard';
import CategoriesFilter from '../components/CategoriesFilter';
import {homeData} from '../data/home';
import {useNavigation} from '@react-navigation/native';
import {Images} from '../constants/Images';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const MyBookmarkScreen = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const insets = useSafeAreaInsets();

  const filteredServices =
    selectedCategory === 'All'
      ? homeData.services
      : homeData.services.filter(service =>
          service.title.toLowerCase().includes(selectedCategory.toLowerCase()),
        );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backContainer}>
          <Image source={Images.back} style={styles.icon} />
        </Pressable>
        <Text style={styles.title}>My Bookmark</Text>
        <Pressable style={styles.menuContainer}>
          <Image source={Images.menu} style={styles.icon} />
        </Pressable>
      </View>
      <View>
        <CategoriesFilter
          categories={[{id: 0, name: 'All'}, ...homeData.categories]}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </View>

      <FlatList
        data={filteredServices}
        renderItem={({item}) => (
          <ServiceCard
            title={item.title}
            price={item.price}
            reviews={item.reviews}
            image={item.image}
            bookmarkIcon={item.bookmarkIcon}
          />
        )}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.serviceList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backContainer: {
    height: 48,
    width: 48,
    backgroundColor: 'rgba(51, 51, 51, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  icon: {
    height: 24,
    width: 24,
  },
  menuContainer: {
    height: 48,
    width: 48,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(84, 84, 84, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  title: {
    fontFamily: 'Outfit-Regular',
    fontSize: 18,
    color: '#000',
  },
  serviceList: {
    paddingBottom: 20,
    marginTop: 10,
  },
});

export default MyBookmarkScreen;
