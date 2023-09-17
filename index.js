/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {name as appName} from './app.json';

// Google Sign-In 초기화
GoogleSignin.configure({
    webClientId: '779531061196-8tu7m6rjcv1smpbo6ki7g5qpn1e94805.apps.googleusercontent.com',
});

AppRegistry.registerComponent(appName, () => App);
