import React, {useState, useMemo} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Header from '../components/Header';
import SpecialOfferBanner from '../components/SpecialOfferBanner';
import CategoryCard from '../components/CategoryCard';
import ServiceCard from '../components/ServiceCard';
import SectionHeader from '../components/SectionHeader';
import SearchBar from '../components/SearchBar';
import LocationBar from '../components/LocationBar';
import {useNavigation} from '@react-navigation/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {homeData} from '../data/home';
import CategoriesFilter from '../components/CategoriesFilter';

const HomeScreen = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredServices = useMemo(() => {
    return selectedCategory === 'All'
      ? homeData.services
      : homeData.services.filter(service =>
          service.title.toLowerCase().includes(selectedCategory.toLowerCase()),
        );
  }, [selectedCategory]);

  const renderCategories = () => (
    <FlatList
      data={homeData.categories}
      renderItem={({item}) => (
        <CategoryCard name={item.name} icon={item.icon} />
      )}
      keyExtractor={item => item.id.toString()}
      numColumns={4}
      columnWrapperStyle={styles.columnWrapper}
      scrollEnabled={false}
    />
  );

  const renderRecommendedServices = () => (
    <FlatList
      data={homeData.services}
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
      scrollEnabled={false}
    />
  );

  return (
    <View style={[styles.container, {paddingTop: insets.top}]}>
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
        ListHeaderComponent={
          <>
            <Header />
            <SearchBar />
            <LocationBar />
            <SectionHeader title="Special Offers" onPress={() => {}} />
            <SpecialOfferBanner />
            <SectionHeader title="Categories" onPress={() => {}} />
            {renderCategories()}
            <SectionHeader title="Recommended Services" onPress={() => {}} />
            {renderRecommendedServices()}
            <SectionHeader
              title="Discover & Explore Services"
              onPress={() => navigation.navigate('MyBookmark' as never)}
            />
            <CategoriesFilter
              categories={[{id: 0, name: 'All'}, ...homeData.categories]}
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        removeClippedSubviews={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  columnWrapper: {
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
});

export default HomeScreen;
