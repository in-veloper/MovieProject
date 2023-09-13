import React from 'react';
import { View, Button } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

function LoginScreen() {
  const navigation = useNavigation();

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

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
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={handleGoogleSignIn}
      />
    </View>
  );
}

export default LoginScreen;