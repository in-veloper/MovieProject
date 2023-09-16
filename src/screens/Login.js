import React from 'react';
import { View, Button, TouchableOpacity, Text, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext'; // AuthContext에서 useAuth 임포트
// import Icon from 'react-native-vector-icons/FontAwesome'; 
import googleIcon from '../assets/image/google_icon.png';


function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth(); // useAuth 훅 사용

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      login(userInfo);
      // 로그인 성공 시 Home 화면으로 이동
      navigation.navigate('TabNavigation');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // 사용자가 로그인을 취소한 경우
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // 로그인이 이미 진행 중인 경우
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Google Play 서비스를 사용할 수 없는 경우
      } else {
        // 기타 오류
      }
    }
  };

    // navigationOptions 설정
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, // 헤더를 숨김
        });
    }, [navigation]);

    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity
        style={{ width: 192, height: 48, borderColor: 'gray', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
        onPress={handleGoogleSignIn}
      >
        <Image source={googleIcon} style={{ height: 20, width: 20 }}/>
        {/* <Icon name="google" size={24} style={{ marginRight: 10 }} /> */}
        <Text style={{ color: 'black', marginLeft: 20 }}>구글 계정으로 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;