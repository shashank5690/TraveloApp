import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Destination} from '../utils/Interface';
import styles from './styleCard';
import Rating from '../Assets/rating';
import Location from '../Assets/location';
import {useNavigation} from '@react-navigation/native';
import {NavigationProps} from '../../../utils/types/navigation';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from 'react-native-reanimated';

interface CardProps {
  item: Destination;
}

const Card: React.FC<CardProps> = ({item}) => {
  const navigation = useNavigation<NavigationProps<'Details'>['navigation']>();


  const translateY = useSharedValue(80);
  const scale = useSharedValue(1); // Start with smaller scale
  const opacity = useSharedValue(0); // Start with fully transparent

  // Animate card appearance
  useEffect(() => {
    translateY.value = withSpring(2, {damping: 8});
    opacity.value = withSpring(1, {duration: 800});
    scale.value = withSpring(1, {duration: 800});
  }, [translateY, opacity, scale]);

  const animatedStyle = useAnimatedStyle(() => {
    // Interpolate scale based on translateY value
    const scaleInterpolation = interpolate(
      translateY.value,
      [0, 80], // Scale interpolation range
      [1, 0.8], // Scale value range
    );

    return {
      opacity: opacity.value,
      transform: [{translateY: translateY.value}, {scale: scaleInterpolation}],
    };
  });

  const handlePress = () => {
    navigation.navigate('Details', {item});
  };

  return (
    <Animated.View style={[styles.card, animatedStyle]}>
      <TouchableOpacity onPress={handlePress}>
        <Image source={{uri: item.image}} style={styles.image} />
        <View style={styles.cardContent}>
          <View style={styles.nameHeader}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.country}>📍({item.country})</Text>
            <Rating height={55} width={50} style={styles.Rating} />
          </View>
          <View style={styles.infoRow}>
            <Location height={20} width={20} style={styles.Location} />
            <Text style={styles.topAttractions}>
              Top Places: {item.top_attractions.slice(0, 1).join(', ')}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Card;
