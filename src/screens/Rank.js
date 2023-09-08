import React from 'react';
import { StyleSheet, View, Text, Image, FlatList, StatusBar } from 'react-native';
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
      backgroundColor: 'transparent',
    },
    case1: {
      flex: 0.20,
      backgroundColor: 'transparent',
    },
    case2: {
      flex: 0.80,
      backgroundColor: 'transparent',
    },
    item: {
        backgroundColor: 'lightblue',
        padding: 15,
        marginVertical: 3,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 15
    },
})

// Test Data
const data = [
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id: '3',
        title: 'Third Item',
    },
    {
        id: '4',
        title: 'Fourth Item',
    },
    {
        id: '5',
        title: 'Fifth Item',
    },
    {
        id: '6',
        title: 'Sixth Item',
    },    {
        id: '7',
        title: 'Seventh Item',
    },
    {
        id: '8',
        title: 'Eighth Item',
    },
    {
        id: '9',
        title: 'Ninth Item',
    },
    {
        id: '10',
        title: 'Tenth Item',
    },
];

const Item = ({title}: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

const RankScreen = () => {

    const renderReviewItem = ({item}) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.case1}>
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2633/2633865.png'}} style={{ height: 80, width: 100, marginLeft: 143, marginTop: 20 }} />
            </View>
            <View style={styles.case2}>
                <FlatList 
                    data={ data }
                    renderItem={ renderReviewItem }
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};

export default RankScreen;