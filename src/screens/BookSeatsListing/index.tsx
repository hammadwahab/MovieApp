import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const BookSeatsListing = () => {
  const {height, width} = Dimensions.get('window');
  const dates = [
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
    {title: '5 mar'},
  ];
  const seats = [
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
    {
      time: '12:30',
      venue: 'Cinetech + hall 1',
      minPrice: '50$',
      maxPrice: '2500',
    },
  ];
  return (
    <>
      <View style={{justifyContent: 'center', flex: 1}}>
        <View>
          <Text style={{paddingLeft: 20, fontSize: 16, fontWeight: 500}}>
            Date
          </Text>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{padding: 20}}
            horizontal>
            {dates.map((i, index) => {
              return (
                <View
                  style={{
                    backgroundColor: 'gray',
                    borderRadius: 10,
                    marginRight: 10,
                  }}>
                  <Text style={{paddingVertical: 10, paddingHorizontal: 15}}>
                    {i.title}
                  </Text>
                </View>
              );
            })}
          </ScrollView>
          <ScrollView
            horizontal
            style={{height: 250}}
            contentContainerStyle={{padding: 20}}
            showsHorizontalScrollIndicator={false}>
            {seats.map(i => {
              return (
                <View
                  style={{
                    width: width * 0.664,
                    height: 160,
                    marginHorizontal: 10,
                  }}>
                  <Text>
                    {i.time}
                    <Text style={{color: '#8F8F8F'}}>{`  ${i.venue}`}</Text>
                  </Text>
                  <View
                    style={{
                      marginVertical: 5,
                      width: '100%',
                      // height: '100%',
                      borderRadius: 10,
                      borderWidth: 1,
                      borderColor: '#61C3F2',
                      overflow: 'hidden',
                      alignItems: 'center',
                      // justifyContent: 'center',
                      paddingHorizontalorizontal: 50,
                      paddingVertical: 20,
                    }}>
                    <Image
                      style={{width: 114, height: 113}}
                      source={require('../../assets/dummy2.png')}></Image>
                  </View>
                  <Text style={{color: '#8F8F8F'}}>
                    {'From '}
                    <Text style={{color: '#202C43', fontWeight: '700'}}>
                      {i.minPrice}
                      <Text style={{color: '#8F8F8F', fontWeight: '400'}}>
                        {' or'}
                        <Text
                          style={{
                            color: '#202C43',
                            fontWeight: '700',
                          }}>{` ${i.maxPrice} bonus`}</Text>
                      </Text>
                    </Text>
                  </Text>
                </View>
              );
            })}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity
        style={{
          borderRadius: 10,
          marginHorizontal: 20,
          backgroundColor: '#61C3F2',
          alignItems: 'center',
        }}>
        <Text
          style={{
            paddingVertical: 20,
            fontWeight: '700',
            fontSize: 16,
            color: 'white',
          }}>
          Select Seats
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default BookSeatsListing;
