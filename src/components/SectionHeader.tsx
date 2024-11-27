import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

interface SectionHeaderProps {
  title: string;
  onPress: () => void;
}

const SectionHeader = ({title, onPress}: SectionHeaderProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.seeAll}>See All</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontFamily: 'Outfit-Medium',
    fontSize: 18,
    color: '#000',
  },
  seeAll: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: '#545454',
  },
});

export default SectionHeader;
