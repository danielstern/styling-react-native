import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './src/components/HomeScreen';
import { DetailsScreen } from './src/components/DetailsScreen';
import { Logo } from './src/components/Logo';
import { View } from 'react-native';

// animation configuration from documentation...
const x ={
  options: {
    animations: {
      push: {
        content: {
          translationX: {
            from: require('react-native').Dimensions.get('window').width,
            to: 0,
            duration: 300
          }
        }
      }
    }
  }
};

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const configB = {
  animation: "timing",
  config: {
    duration: "1s",
    easing: "ease-in-out"
  }
}

export default function App() {

  const Stack = createStackNavigator();

  return (

      <NavigationContainer>

            <Logo/>

            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeScreen}   options={{
    transitionSpec: {
      open: configB,
      close: configB,
    },
  }}/>
                <Stack.Screen name="Details" component={DetailsScreen}   options={{animations:{
                  transitionSpec: {
                    open: configB,
                    close: configB,
                  }},
                }}/>

            </Stack.Navigator>

      </NavigationContainer>

  );

}


const styles = {
  webAppWrapper: {
    maxWidth: 900
  }
}
