import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/Navigation/AppNavigator'; // Adjust the path as necessary
import store from './src/utils/redux/store'; // Adjust the path as necessary


const App: React.FC = () => {
  return (
    <Provider store={store}>

        <AppNavigator />

    </Provider>
  );
};

export default App;
