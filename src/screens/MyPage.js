import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
`;

const MyPageScreen = () => {
    return (
        <Container>
            <StyledText>My Page</StyledText>
        </Container>
    );
};

export default MyPageScreen;