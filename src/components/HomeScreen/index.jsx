import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, SectionList, Animated, LayoutAnimation } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';



// TODO:
// - replace animated with LayoutAnimation
// - animate slide out... but how?
// https://reactnative.dev/docs/layoutanimation
export const HomeScreen = ({navigation})=>{

	const fadeAnim = useRef(new Animated.Value(0)).current;
	const slideAnim = useRef(new Animated.Value(0)).current;
	
    useFocusEffect(() => {

      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 350,
        }

	  ).start();

	  Animated.timing(
        slideAnim,
        {
          toValue: 0,
          duration: 350,
        }
	  ).start();
	  
	  return function(){

		console.log("unfocusing");

		Animated.timing(
			slideAnim,
			{
			  toValue: 500,
			  duration: 350,
			}
		  ).start();

		

		Animated.timing(
			fadeAnim,
			{
			  toValue: 0,
			  duration: 0,
			}
		  ).start();

	  }
      
	}, [fadeAnim]);
	
	// Troubleshooting: Scrolling does not seem to work with any height value measured in %
	// solution: every parent View must have height 100%

    return (
        <Animated.View style={{opacity: fadeAnim, marginLeft: slideAnim, height: "100%"}} >
            <View style={styles.container}>

				<ScrollView style={{height: 100}}>

                	<SectionList
	                    sections={defaultState} 
						          renderItem={ ({item}) => <ConcertListItem item={item} navigation={navigation}/> }
                  		renderSectionHeader={({section}) => (
                      		<Text style={styles.sectionHeader}>
                        		{section.title}
                      		</Text>
						  )
						  
                	}/>

            	</ScrollView>
      
				<Text style={styles.footer}>

              		(C)2020 Globoticket

        		</Text>

        	</View>
        </Animated.View>
	)
	
  }

  
const styles = StyleSheet.create({
    container:{
		backgroundColor: "white",
		// height: 200,
        height: "100%",
        // maxWidth: 900
    },
    tab:{
        flex: 1, 
        backgroundColor: "steelblue", 
        justifyContent:"center", 
        alignItems:"center"
    },
    footer: {
        textAlign: "center",
        borderTopColor: "lightgray",
        borderTopWidth: StyleSheet.hairlineWidth,
        margin: 4,
        fontSize: 10,
        // backgroundColor: 

    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    concertList:{
        alignSelf: "stretch" // this has the same effect as width: 100 but is more correct for mobile
    },
    itemDate:{
        flex: 1,
        backgroundColor: 'blue'
    }
});