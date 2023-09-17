import React from 'react';
import { View, Button, TouchableOpacity, Text, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext'; // AuthContext에서 useAuth 임포트
// import Icon from 'react-native-vector-icons/FontAwesome'; 
import googleIcon from '../assets/image/google_icon.png';
import { db, collection, addDoc } from '../firebase';


function LoginScreen() {
  const navigation = useNavigation();
  const { login } = useAuth(); // useAuth 훅 사용

  const handleGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      
      // await db.collection("users").add({
      //   displayName: userInfo.user.name,
      //   email: userInfo.user.email
      // });
      console.log('데이터 삽입 성공');

      login(userInfo);
      // 로그인 성공 시 Home 화면으로 이동
      navigation.navigate('TabNavigation');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // 사용자가 로그인을 취소한 경우
        console.log('사용자가 로그인 취소');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // 로그인이 이미 진행 중인 경우
        console.log('이미 로그인 진행 중');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // Google Play 서비스를 사용할 수 없는 경우
        console.log('구글 플레이 서비스 이용 불가');
      } else {
        // 기타 오류
        console.log('기타 오류');
        console.log(db);
        console.log(collection);
        console.log(addDoc);      }
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
        style={{ width: 250, height: 48, borderColor: 'lightgray', borderWidth: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
        onPress={handleGoogleSignIn}
      >
        <Image source={googleIcon} style={{ height: 20, width: 20 }}/>
        {/* <Icon name="google" size={24} style={{ marginRight: 10 }} /> */}
        <Text style={{ color: 'black', marginLeft: 20 }}>Google 계정으로 로그인</Text>
      </TouchableOpacity>
    </View>
  );
}

export default LoginScreen;