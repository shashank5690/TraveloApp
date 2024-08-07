import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, TouchableOpacity, StatusBar } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import Onboard1 from '../ScreenOnboard/Assets/onboard1';
import Onboard2 from '../ScreenOnboard/Assets/onboard2';
import Onboard3 from '../ScreenOnboard/Assets/onboard3';
import styles from './styleOnboard';
import { RootStackParamList } from '../../utils/types/navigation';

const { width } = Dimensions.get('window');

const slides = [Onboard1, Onboard2, Onboard3];

const ScreenOnboard: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const CurrentSlide = slides[currentSlideIndex];

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor='transparent' barStyle="light-content" />
      <View style={styles.imageContainer}>
        <View style={styles.image}>
          <CurrentSlide width={width} height={500} />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.heading}>
          Life is short and the {'\n'} world is 
          <Text style={styles.orangeText}> wide.</Text>
        </Text>
        <Text style={styles.paragraph}>
          At Friends tours and travel, we customize {'\n'} reliable and trustworthy educational tours to {'\n'} destinations all over the world.
        </Text>
      </View>
      <View style={styles.dotContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentSlideIndex === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('ScreenLogin')} 
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ScreenOnboard;
