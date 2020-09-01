import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './src/components/HomeScreen';
import { DetailsScreen } from './src/components/DetailsScreen';
import { Logo } from './src/components/Logo';



// todo-- clean up
// the code below only works with navigation@4.x
// const transitionConfig = () => {
//   return {
//     transitionSpec: {
//       duration: 750,
//       easing: Easing.out(Easing.poly(4)),
//       timing: Animated.timing,
//       useNativeDriver: true,
//     },
//     screenInterpolator: sceneProps => {      
//       const { layout, position, scene } = sceneProps

//       const thisSceneIndex = scene.index
//       const width = layout.initWidth

//       const translateX = position.interpolate({
//         inputRange: [thisSceneIndex - 1, thisSceneIndex],
//         outputRange: [width, 0],
//       })

//       return { transform: [ { translateX } ] }
//     },
//   }
// }

export default function App() {

  const Stack = createStackNavigator();

  return (

      <NavigationContainer>

            <Logo/>

            <Stack.Navigator>

                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen}/ >

            </Stack.Navigator>

      </NavigationContainer>

  );

}
