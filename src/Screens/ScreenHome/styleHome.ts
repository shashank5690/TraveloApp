import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 24,
      padding: 16,
    },
    headSVG: {
      width: 322 ,
      height: 150, 
    },
    bellIcon: {
      width: 40,
      height: 40,
      marginTop:-50,
      marginRight: 20,
    },
    destinationsHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 16,
      paddingHorizontal: 16,
    },
    bestDestinations: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#000',
    },
    viewAllContainer: {
      flexDirection: 'row',
    },
    viewAll: {
      fontSize: 16,
      color: '#007bff',
      marginHorizontal: 8,
    },
    flatListContent: {
      paddingBottom: 16,
    },
    loading: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 20,
    },
    error: {
      fontSize: 18,
      textAlign: 'center',
      marginTop: 20,
      color: 'red',
    },
  });

  export default styles;