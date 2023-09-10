import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-elements';

const { width } = Dimensions.get('window'); // 화면 너비 가져오기

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
`;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#fff',
    },
    case1: {
      flex: 0.1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center', // 세로 중앙 정렬
      justifyContent: 'space-between', // 좌우 정렬
      paddingHorizontal: 15, // 좌우 여백 추가
    },
    case2: {
      flex: 0.45,
      backgroundColor: 'red',
    },
    case3: {
        flex: 0.45,
        backgroundColor: 'blue'
    },
    menuLabel: {
        fontSize: 17,
        marginTop: 10
    },
    menuGroup: {
        marginBottom: 16,
        marginTop: 30
    },
    menuGroupLabel: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    bottomLine: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: width, // 화면 너비만큼 그리기
        marginLeft: -16,
    },
    menuContainer: {
        flex: 1,
        backgroundColor: '#fff',
    },
})

const Menu = ({ label, onPress }) => {
return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.menuItem}>
            <Text style={styles.menuLabel}>{label}</Text>
        </View>
    </TouchableOpacity>
    );
};
  
const MenuGroup = ({ label, menus }) => {
return (
    <View style={styles.menuGroup}>
        <Text style={styles.menuGroupLabel}>{label}</Text>
        {menus.map((menu, index) => (
            <Menu key={index} label={menu.label} onPress={menu.onPress} />
        ))}
    </View>
    );
};
const MyPageScreen = () => {

    const handleMenuItemPress = (label) => {
        // 각 메뉴 클릭 시 실행할 동작 추가
        console.log(`Clicked: ${label}`);
      };

    return (
        <View style={styles.container}>
            <View style={styles.case1}>
                <View style={{flexDirection: 'row'}}>
                    <Ionicon name='person-circle-outline' style={{ fontSize: 30, marginLeft: -10 }}></Ionicon>
                    <Text style={{ marginLeft: 10, marginTop: 7 }}>접속한 사용자</Text>
                </View>
                <Button title='프로필' type='outline' buttonStyle={{ borderColor: 'black', backgroundColor: 'transparent' }} titleStyle={{ color: 'black', fontSize: 13 }} />
            </View>
            <View style={styles.menuContainer}>
                <MenuGroup
                    label="공지사항"
                    menus={[
                        { label: '앱 소개', onPress: () => handleMenuItemPress('시스템 공지사항') },
                        { label: '시스템 공지사항', onPress: () => handleMenuItemPress('시스템 공지사항') },
                        { label: '업데이트 공지사항', onPress: () => handleMenuItemPress('업데이트 공지사항') },
                    ]}
                />
                <View style={styles.bottomLine}></View>
                <MenuGroup
                    label="나의 무비어워드"
                    menus={[
                        { label: '관심 영화', onPress: () => handleMenuItemPress('관심 영화') },
                        { label: '관심 영화평', onPress: () => handleMenuItemPress('관심 영화평') },
                        { label: '스포일러 글', onPress: () => handleMenuItemPress('관심 영화평') },
                        { label: '차단 사용자', onPress: () => handleMenuItemPress('차단 사용자') },
                    ]}
                />
                <View style={styles.bottomLine}></View>
                <MenuGroup
                    label="기타"
                    menus={[
                        { label: '자주하는 질문', onPress: () => handleMenuItemPress('자주하는 질문') },
                        { label: '친구 초대', onPress: () => handleMenuItemPress('친구 초대') },
                    ]}
                />
                <View style={styles.bottomLine}></View>
            </View>
        </View>
    );
};

export default MyPageScreen;