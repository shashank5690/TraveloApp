import { StyleSheet } from "react-native";
import { widthPercentageToDP, heightPercentageToDP } from '../../Assets/responsive/res';


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: heightPercentageToDP('2%'),
    padding: widthPercentageToDP('4%'),
  },
  headSVG: {
    width: widthPercentageToDP('85%'),
    height: heightPercentageToDP('20%'),
  },
  LogoutIcon: {
    width: widthPercentageToDP('10%'),
    height: heightPercentageToDP('5%'),
    marginTop: -heightPercentageToDP('5%'),
    marginRight: widthPercentageToDP('4%'),
  },
  destinationsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPercentageToDP('2%'),
    paddingHorizontal: widthPercentageToDP('4%'),
  },
  bestDestinations: {
    fontSize: widthPercentageToDP('6%'),
    fontWeight: 'bold',
    color: '#000',
  },
  viewAllContainer: {
    flexDirection: 'row',
  },
  viewAll: {
    fontSize: widthPercentageToDP('4%'),
    color: '#007bff',
    marginHorizontal: widthPercentageToDP('2%'),
  },
  flatListContent: {
    paddingBottom: heightPercentageToDP('2%'),
  },
  loading: {
    fontSize: widthPercentageToDP('5%'),
    textAlign: 'center',
    marginTop: heightPercentageToDP('5%'),
  },
  error: {
    fontSize: widthPercentageToDP('5%'),
    textAlign: 'center',
    marginTop: heightPercentageToDP('5%'),
    color: 'red',
  },
});

export default styles;