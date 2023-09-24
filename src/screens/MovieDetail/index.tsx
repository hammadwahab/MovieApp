import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  ImageBackground,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import axios from 'axios';
import Video from 'react-native-video';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

interface MovieDetails {
  title: string;
}

const MovieDetail: React.FC<{route: any}> = ({navigation}) => {
  const {height, width} = Dimensions.get('window');
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={{flex: 1}}>
      <View style={{backgroundColor: 'orange', height: height * 0.573}}>
        <ImageBackground
          style={{height: '100%', width: '100%'}}
          source={require('../../assets/dummy.png')}>
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
            style={{height: '100%', width: '100%'}}
          />
        </ImageBackground>

        <View
          style={{
            position: 'absolute',
            width: '75%',
            alignSelf: 'center',
            alignItems: 'center',
            bottom: 40,
          }}>
          <Text
            numberOfLines={2}
            style={{
              fontWeight: '500',
              fontSize: 16,
              lineHeight: 20,
              color: 'white',
              textTransform: 'capitalize',
              textAlign: 'center',
            }}>
            In theaters december 22, 2021
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('BookSeatsListing')}
            style={{
              borderRadius: 10,
              backgroundColor: '#60C3F2',
              marginTop: 10,
              width: width * 0.64,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 20,
                color: 'white',
                paddingVertical: 15,
              }}>
              Get Tickets
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{
              width: width * 0.64,
              borderRadius: 10,
              marginTop: 10,
              backgroundColor: 'transparent',
              borderWidth: 1,
              borderColor: '#60C3F2',
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '500',
                fontSize: 16,
                lineHeight: 20,
                color: 'white',
                paddingVertical: 15,
              }}>
              Watch Trailer
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{margin: 30}}>
        <Text
          style={{
            marginBottom: 5,
            color: '#202C43',
            lineHeight: 20,
            fontSize: 16,
            fontWeight: '500',
          }}>
          Genres
        </Text>
        <View
          style={{flexDirection: 'row', flexWrap: 'wrap', marginVertical: 5}}>
          {[{}, {}, {}, {}].map(() => {
            return (
              <View
                style={{
                  borderRadius: 30,
                  marginRight: 5,
                  backgroundColor: 'red',
                  marginVertical: 5,
                }}>
                <Text
                  style={{
                    padding: 8,
                    color: 'white',
                    fontWeight: '500',
                    paddingHorizontal: 13,
                  }}>
                  {'Hiad,awawdawawdawdwada'.substring(0, 8)}...
                </Text>
              </View>
            );
          })}
        </View>
        <View
          style={{marginVertical: 15, backgroundColor: 'lightgrey', height: 1}}
        />
        <Text
          style={{
            marginBottom: 10,
            color: '#202C43',
            lineHeight: 20,
            fontSize: 16,
            fontWeight: '500',
          }}>
          Overview
        </Text>
        <Text style={{color: '#8F8F8F', fontSize: 12, lineHeight: 19.2}}>
          As a collection of history's worst tyrants and criminal masterminds
          gather to plot a war to wipe out millions, one man must race against
          time to stop them. Discover the origins of the very first independent
          intelligence agency in The King's Man. The Comic Book “The Secret
          Service” by Mark Millar and Dave Gibbons.
        </Text>
        <Modal animationType="slide" visible={modalVisible} style={{flex: 1}}>
          <Video style={{backgroundColor: 'red', flex:1}}
            source={require('../../assets/VID-20220216-WA0028.mp4')}
            controls
            paused={false}
            onError={(onError) => {console.log(onError, 'onErroronError')}}
            onVideoError={(onVideoError) => {console.log(onVideoError, 'onVideoErroronVideoError')}}
            fullscreen
            onFullscreenPlayerWillDismiss={null}
          />
        </Modal>
      </View>
    </ScrollView>
  );
};

export default MovieDetail;
