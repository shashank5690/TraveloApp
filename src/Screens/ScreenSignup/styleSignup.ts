import { StyleSheet } from 'react-native';
import { widthPercentageToDP, heightPercentageToDP } from '../../Assets/responsive/res';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: widthPercentageToDP('5%'),
    position: 'relative',
  },
  title: {
    fontSize: widthPercentageToDP('8%'),
    fontWeight: 'bold',
    marginBottom: heightPercentageToDP('2%'),
    alignSelf: 'flex-start',
    color: '#000000',
    fontFamily: 'Roboto',
  },
  label: {
    fontSize: widthPercentageToDP('5%'),
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: heightPercentageToDP('1%'),
  },
  googleButton: {
    width: '100%',
    height: heightPercentageToDP('7%'),
    marginVertical: heightPercentageToDP('2%'),
  },
  input: {
    height: heightPercentageToDP('7%'),
    width: '100%',
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: widthPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('2%'),
    backgroundColor: '#ffffff',
    fontSize: widthPercentageToDP('4%'),
    fontWeight: 'normal',
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingVertical: heightPercentageToDP('3%'),
    alignItems: 'center',
    marginVertical: heightPercentageToDP('3%'),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: widthPercentageToDP('5%'),
    fontWeight: 'bold',
  },
  registerPrompt: {
    textAlign: 'center',
    fontSize: widthPercentageToDP('4%'),
    color: '#000000',
    marginTop: heightPercentageToDP('4%'),
  },
  loginText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: heightPercentageToDP('2%'),
  },
  socialIcon: {
    width: widthPercentageToDP('30%'),
    height: heightPercentageToDP('6%'),
    borderWidth: 2,
  },
  registerLink: {
    // Add styles if needed
  },
  headerImage: {
    position: 'absolute',
    top: heightPercentageToDP('2%'),
    right: widthPercentageToDP('4%'),
    width: widthPercentageToDP('12%'),
    height: widthPercentageToDP('12%'),
  },
  errorText: {
    color: 'red',
    fontSize: widthPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('1%'),
    marginLeft: widthPercentageToDP('2%'),
  },
});

export default styles;
