import React, { useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions, TouchableOpacity, Button, StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../utils/redux/rootReducer';
import { fetchDestinationsStart } from './redux/HomeSlice';
import Card from '../ScreenHome/components/Card'; 
import Headsvg from '../ScreenHome/Assets/headsvg'; 
import Bell from '../ScreenHome/Assets/bell';
import  styles  from './styleHome';
import { HomeScreenProps } from '../../utils/types/interface';
import { logoutUser } from '../../utils/firebaseAuth';
import Logout from '../../Assets/logout';

const { width } = Dimensions.get('window');

const HomeScreen: React.FC<HomeScreenProps> = () => {
  const dispatch = useDispatch();
  const { destinations, loading, error } = useSelector((state: RootState) => state.home);
  
  useEffect(() => {
    dispatch(fetchDestinationsStart());
  }, [dispatch]);

  const handleLogout =  () =>  {
     logoutUser(dispatch);
  }

  return (
    <View style={styles.container}>
    <StatusBar translucent backgroundColor='transparent' barStyle="light-content" />
      <View style={styles.header}>
        <Headsvg style={styles.headSVG} /> 
        <TouchableOpacity onPress={handleLogout}>
        <Logout style={styles.LogoutIcon} />
        </TouchableOpacity>
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
