import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#fff',
      paddingVertical: 2, 
    },
    imageContainer: {
      width: '100%',
      height: 400,
    },
    image: {
      width: '100%',
      height: '100%',
      justifyContent: 'flex-start',
      borderRadius: 16,
      marginTop: -30,
    },
    textContainer: {
      alignItems: 'center',
      marginVertical: 25,
    },
    heading: {
      fontSize: 32,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 10,
      marginTop: 70 ,
      color: '#000',
    },
    paragraph: {
      fontSize: 16,
      lineHeight: 30,
      textAlign: 'center',
      marginTop: 15,
      marginBottom: 20,
    },
    orangeText: {
      color: '#fb5607',
    },
    buttonContainer: {
      width: '90%',
      backgroundColor: '#0D6EFD',
      borderRadius: 15,
      padding: 15,
      alignItems: 'center',
      marginBottom: 30, 
    },
    buttonText: {
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    dotContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000',
      marginBottom: 20,
    },
    dot: {
      width: 8,
      height: 8,
      borderRadius: 10,
      margin: 5,
    },
    activeDot: {
      backgroundColor: '#0D6EFD',
    },
    inactiveDot: {
      backgroundColor: '#ccc',
    },
  });

  export default styles;