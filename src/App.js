import React from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './store';
import List from './features/list';

const App: () => React$Node = () => (
  <Provider store={store}>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <List />
    </SafeAreaView>
  </Provider>
);

export default App;
