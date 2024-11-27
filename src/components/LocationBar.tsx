import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Images} from '../constants/Images';

const LocationBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mainLocationView}>
        <Image source={Images.location} style={styles.locationIcon} />
        <Text style={styles.text}>267 New Avenue Park, Indore</Text>
      </View>
      <View style={styles.currentLocationView}>
        <Image source={Images.currentLocation} style={styles.currentLocation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 12,
  },
  mainLocationView: {
    flex: 0.85,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    marginLeft: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 50,
    borderColor: '#E7E8EA',
    borderWidth: 1,
  },
  currentLocationView: {
    flex: 0.15,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    marginRight: 15,
    paddingHorizontal: 10,
    marginBottom: 10,
    height: 50,
    borderColor: '#E7E8EA',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: '#545454',
    marginLeft: 10,
  },
  locationIcon: {
    height: 20,
    width: 20,
  },
  currentLocation: {
    height: 24,
    width: 24,
  },
});

export default LocationBar;
