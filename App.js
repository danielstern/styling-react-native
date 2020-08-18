import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Image } from 'react-native';
import { HomeScreen } from './components/HomeScreen';
import { DetailsScreen } from './components/DetailsScreen';

const Stack = createStackNavigator();
export default function App() {

  return (

      <NavigationContainer >

          <Image source={require('./img/logo.png')} style={styles.logo} />

              <Stack.Navigator>

                  <Stack.Screen name="Home" component={HomeScreen}/>
                  <Stack.Screen name="Details" component={DetailsScreen}/>

              </Stack.Navigator>

      </NavigationContainer>

  );

}


const styles = StyleSheet.create({
  logo: {
      alignSelf: "stretch", 
      height: 100,
      borderBottomColor: "lightgray",
      borderBottomWidth: StyleSheet.hairlineWidth
  }
});