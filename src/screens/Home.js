import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, FlatList, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');
const itemWidth = width / 3.2;

const movieData = [
    { id: '1', image: 'https://cdn.rnx.kr/news/photo/202005/105545_121293_640.jpg' },
    { id: '2', image: 'https://mblogthumb-phinf.pstatic.net/data28/2007/12/29/113/1_busstop138.jpg?type=w420' },
    { id: '3', image: 'https://img.fruugo.com/product/2/44/14488442_max.jpg' }
]

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const StyledText = styled.Text`
    font-size: 30px;
    marginTop: 25px;
`;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
    case1: {
        height: 80,
        backgroundColor: 'lightgray',
    },
    case2: {
        height: 200,
        backgroundColor: 'transparent',
    },
    case3: {
        backgroundColor: 'blue',
    },
    case4: {
        height: 110,
        flexDirection: 'row',
    },
    poster: {
        width: itemWidth,
        height: 180, 
        marginVertical: 10,
        marginHorizontal: 4,
        alignContent: 'center'
    },
    movieContainer: {
        flexDirection: 'row',
    },
    item: {
        backgroundColor: 'lightblue',
        padding: 15,
        marginVertical: 3,
        marginHorizontal: 5,
    },
    myReviewItem: {
        backgroundColor: 'lightpink',
        padding: 5,
        marginVertical: 3,
        marginHorizontal: 5,
    },
    title: {
        fontSize: 15
    },
    reviewContainer: {
        height: 380,
        // marginTop: StatusBar.currentHeight || 0,
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

const MyReviewItem = ({title}: any) => (
    <View style={styles.myReviewItem}>
        <Text style={styles.title}>{title}</Text>
    </View>
)

const HomeScreen = () => {

    const renderItem = ({ item }) => (
        <Image source={{ uri: item.image }} style={styles.poster}/>
    )

    const renderReviewItem = ({item}) => (
        <Item title={item.title} />
    );

    const renderMyReviewItem = ({item}) => (
        <MyReviewItem title={item.title} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.case1}>
                <Container>
                    <StyledText>Advertisement</StyledText>
                </Container>
            </View>
            <View style={ styles.case2 }>
                <FlatList 
                    data={ movieData }
                    renderItem={ renderItem }
                    keyExtractor={ (item) => item.id }
                    horizontal
                    showsHorizontalScrollIndicator={ false }
                    contentContainerStyle={ styles.movieContainer }
                />
            </View>
            <View style={styles.reviewContainer}>
                <FlatList 
                    data={ data }
                    renderItem={ renderReviewItem }
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
            <View style={styles.case4}>
                <View style={{ backgroundColor : 'transparent', flex: 1 }}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/7420/7420629.png'}} style={{ height: 80, width: 100, marginLeft: 15, marginTop: 10 }} />
                </View>
                <View style={{ backgroundColor : 'transparent', flex: 2 }}>
                    <FlatList
                        data={ data }
                        renderItem={ renderMyReviewItem }
                        keyExtractor={ (item) => item.id.toString() }
                    />
                    {/* <StyledText>5</StyledText> */}
                </View>
            </View>
        </View>
    );
};

export default HomeScreen;