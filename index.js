/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {name as appName} from './app.json';

// Google Sign-In 초기화
GoogleSignin.configure({
    webClientId: '302854401220-m8oofl78s2r63imd9ktnm73m7tv43i8h.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
