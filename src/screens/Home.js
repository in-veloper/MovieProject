import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image'; // FastImage 라이브러리 추가
import styled from 'styled-components/native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_KEY = 'd9bc45137ad3d4468ecd3d59bf553f9f';
// const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;

const { width } = Dimensions.get('window');
const itemWidth = width / 3.2;

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
    headerView: {
        height: 80,
        backgroundColor: 'lightgray',
    },
    movieView: {
        backgroundColor: 'transparent',
        paddingLeft: 5,
        paddingRight: 5,
        paddingTop: 5
    },
    poster: {
        width: itemWidth,
        height: 173, 
        marginVertical: -2,
        alignContent: 'center'
    },
    movieContainer: {
        // flexDirection: 'row',
        alignItems: 'center'
    },
    movieItem: {
        alignItems: 'center',
        margin: 5
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
        fontSize: 13,
        textAlign: 'center',
        width: 118,
        marginTop: 5,
        fontWeight: 'bold'
    },
    reviewContainer: {
        height: 380,
        // marginTop: StatusBar.currentHeight || 0,
    }
});

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

const HomeScreen = ({ sortOption }) => {
    const navigation = useNavigation();

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        let apiUrl;

        if(sortOption === 'Latest') {
            apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`;
        }else if(sortOption === 'Top Rated') {
            apiUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`;
        } else {
            apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`;
        }

        axios.get(apiUrl)
            .then(response => {
                setMovies(response.data.results);
                console.log(movies);
            })
            .catch(error => {
                console.log('Error fetching data : ', error);
            })
    }, [sortOption]);

    const MovieItem = ({movie}) => (
        // <TouchableOpacity onPress={() => navigation.navigate('MovieDetail', { movie })}>
        <TouchableOpacity onPress={ () => handleMoviePress(movie)}>
            <View style={styles.movieItem}>
                <FastImage source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, priority: FastImage.priority.normal }} style={styles.poster} resizeMode={FastImage.resizeMode.cover} />
                <Text style={styles.title}>{movie.title}</Text>
            </View>
        </TouchableOpacity>
    )

    const renderItem = ({ item }) => (
        <MovieItem movie={item} />
    )

    const renderReviewItem = ({item}) => (
        <Item title={item.title} />
    );

    const renderMyReviewItem = ({item}) => (
        <MyReviewItem title={item.title} />
    );

    const [pageNumber, setPageNumber] = useState(1); // 현재 페이지 번호

    const loadMoreData = () => {
        const nextPage = pageNumber + 1;
        const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=ko-KR&page=${nextPage}`; // 인기도순
        // https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${nextPage}    // 최신순
        // https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=${nextPage}  // 높은 평점순

        axios.get(apiUrl)
          .then(response => {
            const newMovies = response.data.results;
            setMovies([...movies, ...newMovies]);
            setPageNumber(nextPage);
          })
          .catch(error => {
            console.log('Error fetching data: ', error);
        });
    };

    const handleEndReached = () => {
        loadMoreData();
    };

    // 포스터 클릭 시 영화 상세 정보 페이지로 이동
    const handleMoviePress = (movie) => {
        navigation.navigate('MovieDetail', { movie });  // 'MovieDetail'은 상세 정보 페이지의 이름, 'movie'는 전달할 데이터
    };
  
    return (
        <View style={styles.container}>
            <View style={ styles.movieView }>
                <FlatList 
                    data={movies}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3} // 열의 수를 3으로 설정
                    showsVerticalScrollIndicator={false} // 수직 스크롤바 비활성화
                    onEndReached={handleEndReached} // 스크롤이 끝에 도달하면 호출됨
                    onEndReachedThreshold={0.5} // 스크롤이 화면 하단 10% 지점에서 호출됨
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.movieContainer}
                />
            </View>
        </View>
    );
};

export default HomeScreen;
