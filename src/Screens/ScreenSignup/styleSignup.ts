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
    alignSelf:'flex-start',
    color: '#000000',
    fontFamily: 'Roboto',
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 5,

  },
  input: {
    height: 56,
    width: '100%',
    borderColor: '#CCCCCC',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: '#ffffff',
    fontSize: 16,
    fontWeight: 'normal', // Changed to normal for better readability
  },
  button: {
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingVertical: 15,
    alignItems: 'center',
    marginVertical: 20, // Combined top and bottom margin into a single property
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerPrompt: {
    textAlign: 'center',
    fontSize: 16,
    color: '#000000',
    marginTop: 30, // Adjusted top margin for better spacing
  },
  loginText: {
    color: '#000000',
    fontWeight: 'bold',
  },
  socialMediaIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
   
  },
  socialIcon: {
    width: 116,
    height: 60,
    borderWidth: 2,
  },

  registerLink: {

    // ... register link styles ...

  },
  headerImage: {
    position: 'absolute',
    top: 10,
    right: 15,
    width: 50,
    height: 50,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default styles;