import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';

const MovieDetail = ({ route }) => {
  const { movie } = route.params;
  console.log({movie})

  return (
    <ScrollView style={styles.container}>
        {/* 영화 포스터 */}
        <View style={styles.imageContainer}>
            <Image
                source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}` }}
                style={styles.poster}
                resizeMode='cover'
            />
        </View>
        <View style={styles.descriptionContainer}>
            <Text style={styles.title}>{movie.title}</Text>
            <Text style={styles.description}>{movie.overview}</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
  poster: {
    width: '100%',
    aspectRatio: 2/3
  }
});

export default MovieDetail;