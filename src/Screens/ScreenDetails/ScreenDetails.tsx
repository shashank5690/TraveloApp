import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../utils/types/navigation';
import { useRoute } from '@react-navigation/native';
import DetailsBack from '../../Assets/DetailBack'; 
import Face from '../../Assets/face';
import Group from '../../Assets/group';

type DetailsRouteProp = RouteProp<RootStackParamList, 'Details'>;

const Details: React.FC = () => {
  const route = useRoute<DetailsRouteProp>();
  const { item } = route.params;
  


  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor= 'transparent' barStyle="dark-content" />
      <DetailsBack style={styles.bgImage} />
      <View style={styles.cardContainer}>
        <View style={styles.viewRow}>
        <Text style={styles.title}>{item.name}</Text>
        <Face style={styles.face}/>
        </View>
        <Text style={styles.country}>Country: {item.country}</Text>
        <Group style={styles.group}/>
        <Text style={styles.About}>About Destination</Text>
        <Text style={styles.description}>{item.description}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', 
  },
  bgImage: {
    position: 'absolute',
    top: 0,
    left: -10,
    right: 40,
    height: '60%', 
    width: '100%',
  },
  cardContainer: {
    flex: 1,
    marginTop: '110%', 
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    elevation: 5, 
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#000',
  },
  face: {
    width: 40,
    height: 40,
    marginRight: 10,
    marginTop: 20,
  },
  country: {
    fontSize: 18,
    color: 'gray',
    marginTop: -8,
  },
  group: {  
    width: 40,
    height: 40,
    marginTop: 25,  
    alignSelf: 'center',
    marginBottom: 10,

  },
  About:{
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  description: {
    fontSize: 16,
    marginTop: 6,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  listContainer: {
    paddingVertical: 8,
  },
  listItem: {
    fontSize: 16,
    marginVertical: 4,
  },
  button: {
    marginTop: 20,
    paddingVertical: 16,
    borderRadius: 15,
    backgroundColor: '#0D6EFD', 
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Details;
