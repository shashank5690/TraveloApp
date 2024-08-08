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
    textAlign: 'center',
    marginTop: heightPercentageToDP('15%'),
    alignSelf: 'flex-start',
    color: '#000000',
    fontFamily: 'Roboto',
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
    fontWeight: 'bold',
  },
  label: {
    fontSize: widthPercentageToDP('5%'),
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: heightPercentageToDP('1%'),
    marginTop: heightPercentageToDP('1%'),
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingVertical: heightPercentageToDP('2%'),
    alignItems: 'center',
    marginBottom: heightPercentageToDP('2%'),
    marginTop: heightPercentageToDP('2%'),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: widthPercentageToDP('5%'),
    fontWeight: 'bold',
  },
  registerPrompt: {
    marginTop: heightPercentageToDP('15%'),
    textAlign: 'center',
    fontSize: widthPercentageToDP('4%'),
    color: '#000000',
  },
  registerLink: {
    color: '#000000',
    fontWeight: 'bold',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  socialIcon: {
    marginTop: heightPercentageToDP('2%'),
    width: widthPercentageToDP('19.5%'),
    height: heightPercentageToDP('5%'),
    borderWidth: 2,
  },
  headerImage: {
    position: 'absolute',
    top: heightPercentageToDP('3%'),
    right: widthPercentageToDP('4%'),
    width: widthPercentageToDP('12%'),
    height: widthPercentageToDP('12%'),
  },
  alreadyMember: {
    textAlign: 'center',
    fontSize: widthPercentageToDP('4%'),
    color: '#000000',
  },
  loginText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  googleButton: {
    width: '100%',
    height: heightPercentageToDP('8%'),
    marginVertical: heightPercentageToDP('2%'),
  },
  errorText: {
    color: 'red',
    fontSize: widthPercentageToDP('3%'),
    marginBottom: heightPercentageToDP('1%'),
    marginLeft: widthPercentageToDP('2%'),
  },
});

export default styles;
