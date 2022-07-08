import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { Provider } from 'react-redux';
import { StatusBar } from "react-native";

// Screens
import {
  Auth,
  Home,
  AddNewPost,
} from './screens';

// Components
import Header from './components/common/Header';

// Utils
import { firebaseInitializeApp } from "./utils";

// Hooks
import { useAuth } from './hooks';

// Constants
import { colors } from './constants';

// Store
import store from './store/configureStore';


const Stack = createNativeStackNavigator();


const App = () => {
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  const { user, isLoading } = useAuth(isAppInitialized);

  useEffect(() => {
    firebaseInitializeApp().then(() => setIsAppInitialized(true));
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <Provider store={store}>
      <PaperProvider theme={DefaultTheme}>
        <StatusBar backgroundColor={colors.primaryDark} />
        <NavigationContainer>
          {user ? (
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{
                animation: 'slide_from_right',
                header: () => <Header />,
              }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="AddNewPost" component={AddNewPost} />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator
              initialRouteName="Auth"
              screenOptions={{
                animation: 'slide_from_right',
                headerShown: false,
              }}
            >
              <Stack.Screen name="Auth" component={Auth} />
            </Stack.Navigator>
          )}
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  );
};


export default App;
