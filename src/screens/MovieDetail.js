import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image'; // FastImage 라이브러리 추가

const MovieDetail = ({ route }) => {
  const { movie } = route.params;
  const [review, setReview] = useState(''); // 영화 평 저장 상태
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

  const submitReview = () => {
    // review 상태를 이용하여 사용자가 입력한 평을 서버에 전송하거나 다른 동작 수행
    console.log('Submitted Review:', review);
    // 여기에서 서버에 평 등록 요청을 보낼 수 있습니다.
    // 예: axios.post('/api/reviews', { movieId: movie.id, reviewText: review })
    // 또는 다른 로직을 수행할 수 있습니다.

    // 평 등록 후, review 상태 초기화
    setReview('');
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

        {/* 영화 평 등록창 */}
        <View style={styles.reviewContainer}>
            <TextInput
            style={styles.reviewInput}
            placeholder="영화 평을 입력하세요"
            multiline
            value={review}
            onChangeText={(text) => setReview(text)}
            />
            <TouchableOpacity style={styles.submitButton} onPress={submitReview}>
                <Text style={styles.submitButtonText}>등록</Text>
            </TouchableOpacity>
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
  
  },
  poster: {
    width: '100%',
    aspectRatio: 2/3
  },
  reviewContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    flexDirection: 'row',
    paddingBottom: 50
  },
  reviewInput: {
    height: 30,
    width: 280,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 2,
    marginRight: 10
  },
  submitButton: {
    backgroundColor: 'white',
    borderColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: -10,
  },
  submitButtonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default MovieDetail;