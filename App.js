import React, { useEffect } from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigation from './src/navigations/Tab';
import SplashScreen from 'react-native-splash-screen';
import StackNavigator from './src/navigations/StackNavigator';
import LoginScreen from './src/screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Home';
import { AuthProvider, useAuth } from './src/context/AuthContext'; // AuthProvider 임포트

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator();

const App = () => {

  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1500);
    } catch(e) {
      console.warn('Error Occured');
      console.warn(e);
    }
  });

  return (
    <NavigationContainer>
      <AuthProvider>
          <AppNavigator />
      </AuthProvider>
    </NavigationContainer>
  )
};

const AppNavigator = () => {
  const { userInfo } = useAuth();

  return (
    <Stack.Navigator>
      {userInfo ? ( // 로그인 상태에 따라 화면을 렌더링
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      ) : (
        <Stack.Screen name="Login" component={LoginScreen} />
      )}
    </Stack.Navigator>
  );
};

export default App;
