import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '50%',
      resizeMode: 'cover',
    },
    content: {
      paddingTop: '50%', // Offset for the fixed background
    },
    detailsContainer: {
      flex: 1,
      backgroundColor: 'white',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    country: {
      fontSize: 18,
      color: 'gray',
    },
    topAttractions: {
      marginTop: 10,
      fontSize: 16,
    },
    description: {
      marginTop: 10,
      fontSize: 14,
      color: 'black',
    },
    error: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 18,
      color: 'red',
    },
  });

  export default styles;