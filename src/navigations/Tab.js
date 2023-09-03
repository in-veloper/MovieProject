import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import Review from '../screens/Review';
import Rank from '../screens/Rank';
import MyPage from '../screens/MyPage';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name='Home' 
                component={Home} 
                options={{
                    title : '홈',
                    headerShown: false, // 각 페이지의 Header 가리기 위한 설정
                    tabBarActiveTintColor: '#fb8c00',   // 아이콘 클릭 시 활성화 됐을 때 색상
                    tabBarIcon: ({color, size}) => (    // 각 아이콘 설정
                        <FeatherIcon name="home" color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen 
                name='Review'
                component={Review} 
                options={{
                    title : '리뷰',
                    headerShown: false, // 각 페이지의 Header 가리기 위한 설정
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
                    headerShown: false, // 각 페이지의 Header 가리기 위한 설정
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
                    title : '내 정보',
                    headerShown: false,
                    tabBarActiveTintColor: '#fb8c00',   // 아이콘 클릭 시 활성화 됐을 때 색상
                    tabBarIcon: ({color, size}) => (    // 각 아이콘 설정
                        <FeatherIcon name="user" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;