import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './src/components/HomeScreen';
import { DetailsScreen } from './src/components/DetailsScreen';
import { Logo } from './src/components/Logo';
import { StyleSheet, View, Button, Text, LayoutAnimation, UIManager } from 'react-native';


UIManager.setLayoutAnimationEnabledExperimental(true);

const styles = StyleSheet.create({
  appContainer:{

    display: "flex",
    flexDirection: "column",
    flex: 1

  },
  navigator:{

    flex: 1

  },
  animateMe: {
    position: "absolute",
    left: 20,
    width: 200,
    height: 200,
    backgroundColor: "sandybrown",
    transition: "left 1s"
  },
  animated: {
    left: 200,
    width: 100,
    backgroundColor: "pink",
    transition: "left 1s"
  }
})

function DemoScreen () {

  const [ animated, setAnimated ] = useState();

  // it doesn't matter what you do to the code
  // the application just don't work

  return (
    <View>
      <View style={[styles.animateMe, animated ? styles.animated : null]} />
      <View>
        <Button onPress={()=>{

          // LayoutAnimation.configureNext(
          //   LayoutAnimation.create({
          //     duration: 2500,
          //     update: {
          //       // property: LayoutAnimation.Properties.left,
          //       property: LayoutAnimation.Properties.backgroundColor,
          //       type: LayoutAnimation.Types.linear
          //     }
          //   })
          // )

            // LayoutAnimation.configureNext(
            //   LayoutAnimation.Presets.linear
            // )


          // LayoutAnimation.configureNext(
          //   LayoutAnimation.create(
          //     2500,
          //     LayoutAnimation.Types.spring,
          //     // LayoutAnimation.Properties.scaleXY,
          //     LayoutAnimation.Properties.backgroundColor
          //   )
          // );
          setAnimated(true);
        }} title="Animation!!">
          Animation 
        </Button>
      </View>
    </View>
  )


}

export default function App() {

  const Stack = createStackNavigator();

  return (

    <View style={styles.appContainer}>

      <NavigationContainer>

      {/* <Logo/> */}

      <Stack.Navigator style={styles.navigator}>

          <Stack.Screen name="Home" component={DemoScreen} />
          {/* <Stack.Screen name="Details" component={DetailsScreen}/ > */}

      </Stack.Navigator>

      </NavigationContainer>

    </View>

  );

}
