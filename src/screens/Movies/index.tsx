import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import LinearGradient from 'react-native-linear-gradient';

interface Movie {
  id: number;
  title: string;
}

const Movies: React.FC<{navigation: any}> = ({navigation}) => {
  console.log(navigation, 'kajwdnkaw ');
  //   const [movies, setMovies] = useState<Movie[]>([]);

  const movies = [
    {id: 1, title: 'a'},
    {id: 2, title: 'a'},
    {id: 3, title: 'a'},
    {id: 4, title: 'a'},
    {id: 5, title: 'a'},
    {id: 6, title: 'a'},
    {id: 7, title: 'a'},
    {id: 8, title: 'a'},
    {id: 9, title: 'a'},
    {id: 10, title: 'a'},
    {id: 11, title: 'a'},
    {id: 12, title: 'a'},
    {id: 13, title: 'a'},
  ];

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/movie/upcoming ', {
        params: {
          api_key: '1e5dda176c5318b95ea15dcb71df9cde', // Replace with your API key
        },
      })
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log('Error fetching movies:', error);
      });
  }, []);

  return (
    <View style={{flex: 1}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginHorizontal: 10, paddingVertical: 20}}
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('MovieDetail')}
            style={{
              backgroundColor: 'red',
              marginVertical: 10,
              borderRadius: 10,
              height: 200,
              width: '100%',
              overflow: 'hidden',
            }}>
            <Image
              style={{height: '100%', width: '100%'}}
              source={require('../../assets/dummy.png')}
            />
            <LinearGradient
              colors={[
                'rgba(0,0,0,0.1)',
                'rgba(0,0,0,0.2)',
                'rgba(0,0,0,0.3)',
                'rgba(0,0,0,0.4)',
                'rgba(0,0,0,0.5)',
                'rgba(0,0,0,0.6)',
                'rgba(0,0,0,0.7)',
                'rgba(0,0,0,0.8)',
                'rgba(0,0,0,0.9)',
              ]}
              style={{height: '100%', position: 'absolute', width: '100%'}}
            />
            <Text
              style={{
                position: 'absolute',
                bottom: 20,
                left: 20,
                fontSize: 18,
                lineHeight: 22.5,
                color: 'white',
                fontWeight: '500',
              }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Movies;
