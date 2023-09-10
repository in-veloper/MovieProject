import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import FastImage from 'react-native-fast-image'; // FastImage 라이브러리 추가

const MovieDetail = ({ route }) => {
  const { movie } = route.params;
  console.log({movie})

  const NotExistOverview = () => {
    if(!movie.overview) {
        return (
            <Text style={styles.description}>현재 등록되어 있는 영화 소개가 존재하지 않습니다.</Text>
        )
    }else{
        return (
            <Text style={styles.description}>{movie.overview}</Text>
        )
    }
  }

  return (
    <ScrollView style={styles.container}>
        {/* 영화 포스터 */}
        <View style={styles.imageContainer}>
            <FastImage
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`, priority: FastImage.priority.normal }}
                style={styles.poster}
                resizeMode={FastImage.resizeMode.cover}
            />
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <NotExistOverview />
            {/* <Text style={styles.description}>{movie.overview}</Text> */}
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  descriptionContainer: {
    padding: 5,
    marginTop: 5
  },    
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    marginTop: 8,
    paddingBottom: 50
  },
  poster: {
    width: '100%',
    aspectRatio: 2/3
  }
});

export default MovieDetail;