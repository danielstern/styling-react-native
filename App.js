import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, View } from "react-native";

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './src/components/HomeScreen';
import { DetailsScreen } from './src/components/DetailsScreen';
import { Logo } from './src/components/Logo';


const styles = StyleSheet.create({
  appContainer: {
    display: "flex",
    flexDirection:"column",
    // flexDirection:"row",
    flex: 1 // without flex 1 the container has a size of 0 and does not display
    // height: "100%",
    // width: "100%"
  },
  logo: {
    // flex: 1,
    height: 150
  },
  navigator: {
    flex: 1
  }
});



export default function App() {

  const Stack = createStackNavigator();

  return (

    <View style={styles.appContainer}>

      <NavigationContainer>

          <Logo style={styles.logo}/>

            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen}/ >

            </Stack.Navigator>

      </NavigationContainer>

    </View>

  );

}
