import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../Assets/responsive/res';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: heightPercentageToDP('50%'),
    resizeMode: 'cover',
  },
  content: {
    paddingTop: heightPercentageToDP('50%'), // Offset for the fixed background
  },
  detailsContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: widthPercentageToDP('5%'),
    borderTopRightRadius: widthPercentageToDP('5%'),
    padding: widthPercentageToDP('5%'),
  },
  title: {
    fontSize: widthPercentageToDP('6%'),
    fontWeight: 'bold',
  },
  country: {
    fontSize: widthPercentageToDP('5%'),
    color: 'gray',
  },
  topAttractions: {
    marginTop: heightPercentageToDP('2%'),
    fontSize: widthPercentageToDP('4.5%'),
  },
  description: {
    marginTop: heightPercentageToDP('2%'),
    fontSize: widthPercentageToDP('4%'),
    color: 'black',
  },
  error: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: widthPercentageToDP('5%'),
    color: 'red',
  },
});

export default styles;
