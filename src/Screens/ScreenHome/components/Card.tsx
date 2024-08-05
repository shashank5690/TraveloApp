import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Destination } from '../utils/Interface';
import styles from './styleCard';
import Rating from '../Assets/rating';
import Location from '../Assets/location'; // Import the 'Loaction' component

interface CardProps {
  item: Destination;
}

const Card: React.FC<CardProps> = ({ item }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.cardContent}>
      <View style={styles.nameHeader}>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.country}>📍({item.country})</Text>
        <Rating height={55} width={50} style={styles.Rating}/>
      </View>
      <View style={styles.infoRow}>
       <Location height={20} width={20} style={styles.Location}/>
        <Text style={styles.topAttractions}>Top Places: {item.top_attractions.slice(0, 2).join(', ')}</Text>
      </View>
    </View>
  </TouchableOpacity>
);
export default Card;
