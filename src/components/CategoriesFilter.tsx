import React from 'react';
import {Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

interface CategoriesFilterProps {
  categories: {id: number; name: string}[];
  selectedCategory: string;
  onCategorySelect: (category: string) => void;
}

const CategoriesFilter = ({
  categories,
  selectedCategory,
  onCategorySelect,
}: CategoriesFilterProps) => {
  return (
    <FlatList
      data={categories}
      horizontal
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => (
        <TouchableOpacity
          style={[
            styles.filterButton,
            selectedCategory === item.name && styles.selectedFilterButton,
          ]}
          onPress={() => onCategorySelect(item.name)}>
          <Text
            style={[
              styles.filterText,
              selectedCategory === item.name && styles.selectedFilterText,
            ]}>
            {item.name}
          </Text>
        </TouchableOpacity>
      )}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.filterList}
    />
  );
};

const styles = StyleSheet.create({
  filterList: {
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  filterButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#fff',
    marginRight: 10,
    borderWidth: 1,
    height: 35,
  },
  selectedFilterButton: {
    backgroundColor: '#000',
  },
  filterText: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: '#545454',
  },
  selectedFilterText: {
    color: '#FFF',
  },
});

export default CategoriesFilter;
