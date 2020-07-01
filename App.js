import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
// import BottomTabNavigator from './navigation/BottomTabNavigator';
// import LinkingConfiguration from './navigation/LinkingConfiguration';
// import LoginScreen from './screens/LoginScreen';
// import RegisterScreen from './screens/RegisterScreen';
// import Colors from './constants/Colors';

import HomeScreen from './screens/HomeScreen';
import LinksScreen from './screens/LinksScreen';
import CardScreen from './screens/CardScreen';
import ListingDetailScreen from './screens/ListingDetailScreen';
import MyAccountScreen from './screens/MyAccountScreen';
import ListingScreen from './screens/ListingScreen';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      // <View style={styles.container}>
      //   {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <NavigationContainer>
        <Stack.Navigator initialRouteName="MyAccount" ScreenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Links" component={LinksScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Card" component={CardScreen} />
          <Stack.Screen name="ListingDetail" component={ListingDetailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="MyAccount" component={MyAccountScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Listing" component={ListingScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="Root" component={BottomTabNavigator} /> */}
          {/* <Stack.Screen name="Login" component={LoginScreen} options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: Colors.tintColor,
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerShown: false
          }} />
          <Stack.Screen name="Register" component={RegisterScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
