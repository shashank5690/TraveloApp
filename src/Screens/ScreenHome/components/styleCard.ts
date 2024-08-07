import { StyleSheet } from "react-native";
import Rating from "../Assets/rating";

const styles = StyleSheet.create({
    card: {
      width: '95%',
      marginBottom: 16,
      borderRadius: 25,
      overflow: 'hidden',
      backgroundColor: '#fff',
      shadowColor: '#8d99ae',
      shadowOffset: { width: 6, height: 5 },
      shadowOpacity: 0.6,
      shadowRadius: 3,
      elevation: 8,
      marginHorizontal: 12,
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 15,
    },
    cardContent: {
      padding: 16,
    },
    nameHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 8,
    },
    title: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#000',
      marginLeft:7,
    },
    country: {
      fontSize: 14,
      color: '#FF7029',
      fontWeight: 'bold',
      marginLeft: 6,
      marginTop: 8.5,
    },
    Rating:{
      height: 20,
      alignSelf:'center',
      marginLeft: 162 ,
      marginTop :10,
    },
    infoRow: {
      flexDirection: 'row',
 
      marginBottom: 8,
    },
    language: {
      fontSize: 14,
      color: '#000',
    },
    topAttractions: {
      fontSize: 16,
      color: '#7D848D',
      textAlign: 'right',
      marginLeft:10,
      marginTop: -5,
    },
    Location:{
      // marginLeft: -25,
      marginTop: -5,

    },
    description: {
      fontSize: 12,
      color: '#555',
      marginTop: 8,
    },
  });

  export default styles;
