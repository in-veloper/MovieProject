import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { SearchBar } from 'react-native-elements';

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
      flexDirection: 'column'
    },
    case2: {
      backgroundColor: 'transparent',
    },
    item: {
        backgroundColor: 'lightblue',
        padding: 20,
        marginVertical: 3,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 20
    },
    movieContainer: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
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
    
];

const Item = ({title}: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
);

const ReviewScreen = () => {
    const [searchText, setSearchText] = useState('');

    const handleSearch = (text) => {
        setSearchText(text);
    }

    const renderItem = ({item}) => (
        <Item title={item.title} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.case1}>
                <SearchBar 
                    placeholder="Search"
                    onChangeText={ handleSearch }
                    value={searchText}
                    inputContainerStyle={{ backgroundColor: 'lightgray', 'borderRadius': 15, height: 40 }}
                    inputStyle={{ color: 'black' }}
                    containerStyle={{  backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
                    searchIcon={{ color: 'black', size: 20 }}
                    clearIcon={{ color:'black'}}
                />
            </View>
            <View style={styles.movieContainer}>
                <FlatList 
                    data={ data }
                    renderItem={ renderItem }
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        </View>
    );
};

export default ReviewScreen;