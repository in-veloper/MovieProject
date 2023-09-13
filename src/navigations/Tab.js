import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/Home';
import Review from '../screens/Review';
import Rank from '../screens/Rank';
import MyPage from '../screens/MyPage';
import MovieDetail from '../screens/MovieDetail';
import { TouchableOpacity, Text, View, Modal, StyleSheet, Dimensions } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native'; // useNavigation 추가
import StackNavigator from './StackNavigator';


const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    const navigation = useNavigation(); // navigation 객체 가져오기

    // 뒤로가기 버튼을 눌렀을 때 Home 화면으로 이동하는 함수
    const goBackToHome = () => {
        navigation.goBack(); // 뒤로가기
    };

    const [sortOption, setSortOption] = useState('Popular');

    const handleSortOptionChange = (option) => {
        setSortOption(option);
        // 여기에서 선택된 정렬 옵션에 따라 API 호출 등의 작업을 수행할 수 있습니다.
    };

    // navigationOptions 설정
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false, // 헤더를 숨김
        });
    }, [navigation]);

    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='Home' 
                options={{
                    headerLeft: ({onPress}) => (
                        <SortDropdown
                            sortOption={sortOption}
                            handleSortOptionChange={handleSortOptionChange}
                        />
                    ),
                    headerTitle: ({children}) => (
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15}}>{children}</Text>
                        </View>
                    ),
                    headerRight: ({onPress}) => (
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <FeatherIcon name='search' size={20} style={{ marginRight: 10 }}/>
                            <FeatherIcon name='bell' size={20} style={{ marginRight: 10, marginTop: 1 }} />
                        </TouchableOpacity>
                    ),
                    title : '홈',
                    tabBarActiveTintColor: '#fb8c00',   // 아이콘 클릭 시 활성화 됐을 때 색상
                    tabBarIcon: ({color, size}) => (    // 각 아이콘 설정
                        <FeatherIcon name="home" color={color} size={size} />
                    )
                }}
            >
            {() => <Home sortOption={sortOption} />}  
            </Tab.Screen>
            <Tab.Screen 
                name='Review'
                component={Review} 
                options={{
                    headerRight: ({onPress}) => (
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <FeatherIcon name='bell' size={20} style={{ marginRight: 10, marginTop: 1 }} />
                        </TouchableOpacity>
                    ),
                    title : '리뷰',
                    tabBarActiveTintColor: '#fb8c00',   // 아이콘 클릭 시 활성화 됐을 때 색상
                    tabBarIcon: ({color, size}) => (    // 각 아이콘 설정
                        <FeatherIcon name="feather" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name='Rank' 
                component={Rank} 
                options={{
                    title : '랭킹',
                    tabBarActiveTintColor: '#fb8c00',   // 아이콘 클릭 시 활성화 됐을 때 색상
                    tabBarIcon: ({color, size}) => (    // 각 아이콘 설정
                        <MaterialCommunityIcon name="trophy-variant-outline" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name='MyPage' 
                component={MyPage} 
                options={{
                    headerRight: ({onPress}) => (
                        <TouchableOpacity style={{ flexDirection: 'row' }}>
                            <AntDesignIcon name='setting' size={20} style={{ marginRight: 10, marginTop: 1 }} />
                        </TouchableOpacity>
                    ),
                    title : '내 정보',
                    tabBarActiveTintColor: '#fb8c00',   // 아이콘 클릭 시 활성화 됐을 때 색상
                    tabBarIcon: ({color, size}) => (    // 각 아이콘 설정
                        <FeatherIcon name="user" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name='MovieDetail' // MovieDetail 스크린 추가
                component={MovieDetail} // MovieDetail 스크린을 추가
                options={({ route }) => ({
                    title: '영화 상세 정보',
                    tabBarButton: () => null, // 해당 탭을 숨깁니다.
                    // tabBarStyle: false, // 탭 바를 숨길 때 사용 (옵션은 필요에 따라 조정),
                    headerLeft: ({onPress}) => (
                        <TouchableOpacity onPress={goBackToHome}>
                            <MaterialIcons name='arrow-back' size={20} style={{ paddingLeft: 15 }}/>
                        </TouchableOpacity>
                    ),
                    headerRight: ({onPress}) => (
                        <TouchableOpacity>
                            <MaterialCommunityIcon name='heart-outline' size={20} style={{ paddingRight: 15 }}/>
                        </TouchableOpacity>
                    )
                })}
            />
        </Tab.Navigator>
    );
};

const SortDropdown = ({ sortOption, handleSortOptionChange }) => {
    const dropdownOptions = ['Popular', 'Latest', 'Top Rated'];
  
    return (
      <ModalDropdown
        options={dropdownOptions}
        onSelect={(index, option) => handleSortOptionChange(option)}
        style={styles.dropdownContainer} // 스타일 적용
        dropdownStyle={styles.dropdownStyle}
      >
        <View style={styles.dropdownContent}>
          <Text style={{ fontSize : 15, fontWeight: 'bold'}}>{sortOption}</Text>
          <FeatherIcon name='chevron-down' size={20} />
        </View>
      </ModalDropdown>
    );
};

const styles = StyleSheet.create({
    dropdownContainer: {
      width: 100, // 드랍다운 박스의 가로 크기를 조절 (필요에 따라 조절)
      marginLeft: 10
    },
    dropdownContent: {
      width: 110,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: 40,
      paddingBottom: -30
    },
    dropdownStyle: {
        width: 85,
        height: 101,
        marginLeft: -4
    }
});

export default TabNavigation;