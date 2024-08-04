import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Destination } from '../utils/Interface';

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

const styles = StyleSheet.create({
  card: {
    width: '95%',
    marginBottom: 16,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    shadowColor: '#8d99ae',
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.6,
    shadowRadius: 6,
    elevation: 12,
    marginHorizontal: 12,
  },
  image: {
    width: '100%',
    height: 200,
  },
  cardContent: {
    padding: 16,
  },
  nameHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#000',
  },
  country: {
    fontSize: 18,
    color: '#FF7029',
    fontWeight: 'bold',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  language: {
    fontSize: 14,
    color: '#000',
  },
  topAttractions: {
    fontSize: 16,
    color: '#000',
    textAlign: 'right',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: '#555',
    marginTop: 8,
  },
});

export default Card;
