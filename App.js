import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Logo } from './src/components/Logo';
import { HomeScreen } from './src/components/HomeScreen';
import { DetailsScreen } from './src/components/DetailsScreen';

import { TransitionSpecs } from '@react-navigation/stack';

// TODO - animate stack navigation
export default function App() {

  	const Stack = createStackNavigator();
  	return (

		<NavigationContainer>

			<Logo/>

			<Stack.Navigator animationEnabled={"true"} qqq="qqq">

				<Stack.Screen name="Home" component={HomeScreen} options={{
    		transitionSpec: {
      		open: TransitionSpecs.TransitionIOSSpec,
      		close: TransitionSpecs.TransitionIOSSpec,
    	}}}/>
				<Stack.Screen name="Details" component={DetailsScreen}/ >

			</Stack.Navigator>

		</NavigationContainer>

  	);

}