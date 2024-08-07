import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Destination } from '../utils/Interface';
import styles from './styleCard';
import Rating from '../Assets/rating';
import Location from '../Assets/location'; 
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '../../../utils/types/navigation';

interface CardProps {
  item: Destination;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const navigation = useNavigation<NavigationProps<'Details'>['navigation']>();

  const handlePress = () => {
    navigation.navigate('Details', { item });
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <View style={styles.cardContent}>
        <View style={styles.nameHeader}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.country}>📍({item.country})</Text>
          <Rating height={55} width={50} style={styles.Rating} />
        </View>
        <View style={styles.infoRow}>
          <Location height={20} width={20} style={styles.Location} />
          <Text style={styles.topAttractions}>Top Places: {item.top_attractions.slice(0, 1).join(', ')}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
