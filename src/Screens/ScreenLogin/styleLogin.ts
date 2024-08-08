import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
    position: 'relative',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    marginTop: 100,
    alignSelf:'flex-start',
    color: '#000000',
    fontFamily: 'Roboto',
     
  },
  input: {
    height: 56,
    width: '100%',
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#Ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,
    marginTop: 10,
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerPrompt: {
    marginTop: 160,
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
  },
  registerLink: {
    color: '#000000',
    fontWeight: 'bold',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: 20,
  },
  socialIcon: {
    marginTop: 20,
    width: 116,
    height: 60,
    // borderRadius: 8,
    borderWidth: 2,
  },
  headerImage: {
    position: 'absolute',
    top: 10,
    right: 15,
    width: 50,
    height: 50,
  },
  alreadyMember: {
    textAlign: 'center',
    fontSize: 14,
    color: '#000000',
  },
  loginText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  googleButton: {
    width: '100%',
    height: 48,
    marginVertical: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default styles;