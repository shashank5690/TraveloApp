import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/rootReducer';
import { fetchDestinationsStart } from './redux/HomeSlice';
import Card from '../ScreenHome/components/Card'; 
import Headsvg from '../ScreenHome/Assets/headsvg'; 
import Bell from '../ScreenHome/Assets/bell';
import  styles  from './styleHome';

const { width } = Dimensions.get('window');

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { destinations, loading, error } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(fetchDestinationsStart());
  }, [dispatch]);



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Headsvg style={styles.headSVG} /> 
        <Bell style={styles.bellIcon} />
      </View>
      <View style={styles.destinationsHeader}>
        <Text style={styles.bestDestinations}>Best Destinations</Text>
        <View style={styles.viewAllContainer}>
          <TouchableOpacity>
            <Text style={styles.viewAll}>View All</Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={destinations}
        renderItem={({ item }) => <Card item={item} />} 
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};



export default HomeScreen;
