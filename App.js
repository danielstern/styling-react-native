import 'react-native-gesture-handler';
import React, { useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'
import { HomeScreen } from './src/components/HomeScreen';
import { DetailsScreen } from './src/components/DetailsScreen';
import { Logo } from './src/components/Logo';
import { StyleSheet, View, Button, Text, LayoutAnimation, UIManager, Animated } from 'react-native';


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
    // position: "absolute",
    
    // transform: translate(0, 0),
    // left: 20,
    // transform: ["translate(50px)"],
    width: 200,
    height: 200,
    backgroundColor: "sandybrown",
    // transition: "width 5s ease-in"
  },

  animateMe2: {
    // position: "absolute",
    
    // transform: translate(0, 0),
    // left: 20,
    // transform: ["translate(50px)"],
    width: 200,
    height: 200,
    margin: 20,
    backgroundColor: "indianred",
    // transition: "width 5s ease-in"
  },

  moveRight: {

    alignSelf:"flex-end"

  },

  animated: {
    // left: 200,
    // transform: ["translate(250px)"],
    // width: 100,
    backgroundColor: "pink",
    // transition: "width 5s",
    // animation: "1s bounch"
    
  }
})

function DemoScreen () {

  const [ animated, setAnimated ] = useState();

  // const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0
  const widthAnim = useRef(new Animated.Value(100)).current  // Initial value for opacity: 0

  // const animateIn = () => {

  //   React.useEffect(() => {
  //     Animated.timing(
  //       widthAnim,
  //       {
  //         toValue: 50,
  //         duration: 1000,
  //       }
  //     ).start();
  //   }, [widthAnim])

  // }

  

  // it doesn't matter what you do to the code
  // the application just don't work

  return (
    <View>
      <Animated.View key={1} style={[styles.animateMe, {width: widthAnim}]} />
      <Animated.View key={2} style={[styles.animateMe2, animated ? styles.moveRight : null]} />

      {animated && (

        <View key={3} style={[styles.animateMe2, styles.animated]} />

      )}
      <View>
        <Button onPress={()=>{

// animateIn();

          // animateIn();

          Animated.timing(
            widthAnim,
            {
              toValue: 150,
              duration: 1000,
            }
          ).start();
          // widthAnim.start()

       

          LayoutAnimation.configureNext(

            LayoutAnimation.create(
              500,
              LayoutAnimation.Types.spring,
              LayoutAnimation.Properties.scaleXY
            )
            // LayoutAnimation.create({
            //   duration: 5500,
            //   update: {
            //     // property: LayoutAnimation.Properties.left,
            //     property: LayoutAnimation.Properties.backgroundColor,
            //     type: LayoutAnimation.Types.linear
            //   },
            //   create: {
            //     property: LayoutAnimation.Properties.backgroundColor,
            //     type: LayoutAnimation.Types.linear
            //   }
            // }
            // )
          );

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
