import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Dashboard from './src/screens/Dashboard';
import Movies from './src/screens/Movies';
import MovieDetail from './src/screens/MovieDetail';
import More from './src/screens/More';
import MediaLibrary from './src/screens/MediaLibrary';
import Watch from './src/screens/Watch';
import {Text} from 'react-native';
import BookSeatsListing from './src/screens/BookSeatsListing';
import BookSeatDetail from './src/screens/BookSeatDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Dashboard" component={Dashboard} />
  </Stack.Navigator>
);

const WatchStackNavigator = () => (
  <Stack.Navigator
    initialRouteName="Movies"
    screenOptions={{
      headerTintColor: '#202C43',
      headerTitleStyle: {fontSize: 16, lineHeight: 20, fontWeight: 500},
      headerTitleAlign: 'left',
      headerRight: () => <Text style={{marginRight: 15}}>HI</Text>,
    }}>
    <Stack.Screen name="Movies" component={Movies} />
    <Stack.Screen
      options={{headerShown: false}}
      name="MovieDetail"
      component={MovieDetail}
    />
    <Stack.Screen
      name="BookSeatsListing"
      component={BookSeatsListing}
    />
    <Stack.Screen
      name="BookSeatDetail"
      component={BookSeatDetail}
    />
  </Stack.Navigator>
);

const MediaLibraryStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="MediaLibrary" component={MediaLibrary} />
  </Stack.Navigator>
);

const MoreStackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="More" component={More} />
  </Stack.Navigator>
);

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {backgroundColor: 'purple', borderRadius: 50},
      tabBarActiveTintColor: 'white',
      tabBarHideOnKeyboard: true,
      tabBarIconStyle: {marginTop: 10},
    }}>
    <Tab.Screen
      name="Dashboard"
      component={DashboardStackNavigator}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name="Watch"
      component={WatchStackNavigator}
      options={{
        headerShown: false,
        // tabBarStyle: {display: 'none'}
      }}
    />
    <Tab.Screen
      name="MediaLibrary"
      component={MediaLibraryStackNavigator}
      options={{headerShown: false}}
    />
    <Tab.Screen
      name="More"
      component={MoreStackNavigator}
      options={{headerShown: false}}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

{
  /* <Tab.Screen
name="Movies"
component={Movies}
options={{ tabBarLabel: 'Watch' }}
/>
<Tab.Screen
name="MovieDetail"
component={MovieDetail}
options={{ tabBarLabel: 'Media Library' }}
/> */
}
export default App;
