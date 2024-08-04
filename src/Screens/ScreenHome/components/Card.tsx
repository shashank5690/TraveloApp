import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Destination } from '../utils/Interface';
import styles from './styleCard';

interface CardProps {
  item: Destination;
}

const Card: React.FC<CardProps> = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.cardContent}>
      <View style={styles.nameHeader}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.country}>{item.country}</Text>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.topAttractions}>Top Attractions: {item.top_attractions.slice(0, 2).join(', ')}</Text>
      </View>
    </View>
  </TouchableOpacity>
);



export default Card;
