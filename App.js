/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

// Label 숨기기로 bottom-tab 선택시 하단 Text 숨기기 가능

import React, { useEffect } from 'react';
import type { Node } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import TabNavigation from './src/navigations/Tab';
import SplashScreen from 'react-native-splash-screen';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

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

const Tab = createBottomTabNavigator();

const App = () => {
  useEffect(() => {
    try {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1500);

      // googleSigninConfigure();
      
    } catch(e) {
      console.warn('Error Occured');
      console.warn(e);
    }
  });

  // const googleSigninConfigure = () => {
  //   GoogleSignin.configure({
  //     webClientId : '243453934490-gv7b4okfk1h3fu7lm00d9hscchv685st.apps.googleusercontent.com'  // Web Client ID
  //   })
  // }

  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
};

export default App;
