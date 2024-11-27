import React, {useRef} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
  Animated,
} from 'react-native';
import {banners} from '../data/banner';

const {width} = Dimensions.get('window');

const SpecialOfferBanner = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderBannerItem = ({item}: {item: (typeof banners)[0]}) => (
    <ImageBackground
      source={item.background}
      resizeMode="contain"
      style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.offerText}>{item.offer}</Text>
        <Text style={styles.specialText}>{item.title}</Text>
        <Text style={styles.details}>{item.details}</Text>
      </View>
      <Image source={item.image} resizeMode="contain" style={styles.image} />
    </ImageBackground>
  );

  const renderDots = () => {
    return (
      <View style={styles.dotsContainer}>
        {banners.map((_, index) => {
          const inputRange = [
            (index - 1) * width,
            index * width,
            (index + 1) * width,
          ];

          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 24, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={[
                styles.dot,
                {
                  width: dotWidth,
                  opacity,
                },
              ]}
            />
          );
        })}
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={banners}
        renderItem={renderBannerItem}
        keyExtractor={item => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        snapToAlignment="center"
        decelerationRate="fast"
      />
      {renderDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 15,
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 16,
    width: width - 30,
    height: 160,
  },
  textContainer: {
    flex: 1,
  },
  offerText: {
    fontFamily: 'Outfit-Bold',
    fontSize: 36,
    color: '#FFF',
  },
  specialText: {
    fontFamily: 'Outfit-Medium',
    fontSize: 18,
    color: '#FFF',
    marginTop: 5,
  },
  details: {
    fontFamily: 'Outfit-Regular',
    fontSize: 12,
    color: '#FFF',
    marginTop: 5,
    width: 150,
  },
  image: {
    width: 114,
    height: 141,
  },
  dotsContainer: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    height: 4,
    borderRadius: 4,
    backgroundColor: '#FFF',
    marginHorizontal: 4,
  },
});

export default SpecialOfferBanner;
