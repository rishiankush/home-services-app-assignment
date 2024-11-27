import React from 'react';
import {View, TextInput, StyleSheet, Image} from 'react-native';
import {Images} from '../constants/Images';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Image source={Images.search} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#545454"
      />
      <Image source={Images.filter} style={styles.filterIcon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    marginHorizontal: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 44,
  },
  input: {
    flex: 1,
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: '#545454',
    marginLeft: 10,
  },
  searchIcon: {
    height: 18,
    width: 18,
    marginHorizontal: 5,
  },
  filterIcon: {
    height: 24,
    width: 24,
    marginHorizontal: 5,
  },
});

export default SearchBar;
