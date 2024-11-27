import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {Images} from '../constants/Images';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.icons}>
        <Image source={Images.dummyProfile} style={styles.profileImage} />
        <View>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Good Morning</Text>
            <Image
              source={Images.waveHand}
              style={styles.waveHand}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.name}>Chaitanya Goyal</Text>
        </View>
      </View>
      <View style={styles.icons}>
        <Pressable>
          <Image source={Images.bell} style={styles.icon} />
        </Pressable>
        <Pressable>
          <Image source={Images.bookmarkLight} style={styles.icon} />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
  },
  greeting: {
    fontFamily: 'Outfit-Regular',
    fontSize: 14,
    color: '#545454',
  },
  name: {
    fontFamily: 'Outfit-Medium',
    fontSize: 16,
    color: '#000',
    marginTop: 5,
  },
  icons: {
    flexDirection: 'row',
    gap: 10,
  },
  icon: {
    height: 24,
    width: 24,
    color: '#545454',
  },
  greetingContainer: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  waveHand: {
    height: 22,
    width: 23,
  },
});

export default Header;
