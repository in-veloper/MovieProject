import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import styled from 'styled-components/native';

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
      backgroundColor: 'white',
    },
    case1: {
      flex: 0.1,
      backgroundColor: 'orange',
    },
    case2: {
      flex: 0.45,
      backgroundColor: 'red',
    },
    case3: {
        flex: 0.45,
        backgroundColor: 'blue'
    }
})

const MyPageScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.case1}>
                <Container>
                    <StyledText>1</StyledText>    
                </Container>
            </View>
            <View style={styles.case2}>
                <Container>
                    <StyledText>2</StyledText>
                </Container>
            </View>
            <View style={styles.case3}>
                <Container>
                    <StyledText>3</StyledText>
                </Container>
            </View>
        </View>
    );
};

export default MyPageScreen;