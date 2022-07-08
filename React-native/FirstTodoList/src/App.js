import React from 'react';
import { Provider } from 'react-redux';
import {
  SafeAreaView,
  View,
} from 'react-native';

// Store
import store from './store/configureStore';

// Components
import Header from './components/common/Header';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Header />
        <View>
          <TodoList />
        </View>
      </SafeAreaView>
    </Provider>

  );
};

export default App;
