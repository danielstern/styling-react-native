import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, SectionList, StyleSheet, Animated } from 'react-native';

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';


const styles = StyleSheet.create({

	container: {

		backgroundColor: "white",
		flex: 1

	},
	homebody:{

		flex: 15

	},
	homefooterText:{

		fontSize: "2vh",
		textAlign: "center",
		color: "white",
		marginBottom: "0.5vh"

	},
	homefooter: {

		flex: 1,
		alignSelf: "stretch",
		justifyContent: "flex-end",
		borderTopColor: "gray",
		borderTopWidth: StyleSheet.hairlineWidth,
		backgroundColor: "steelblue"

	},

	sectionHeader: {

		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		backgroundColor: 'rgba(247, 247, 247)',
		borderBottomColor: "steelblue",
		borderBottomWidth: StyleSheet.hairlineWidth,
		
	},

	sectionHeaderText: {

		fontSize: "2.5vh"

	}

})

export const HomeScreen = ({navigation})=>{

	let k = 0;

	const staggerAnimations = new Array(20)
		.fill(null)
		.map(()=>{
		
			return useRef(new Animated.Value(1)).current;

		});	

	function handleListItemInteraction(item, initialAnimation){

		Animated.stagger(
			50,
			staggerAnimations.map(animation => (

				Animated.timing(

					animation,
					{
						toValue: 0,
						duration: 300
					}

				)

			))
												
		).start(()=>{

			navigation.navigate("Details", {item});			

			for (let animation of staggerAnimations) {

				animation.setValue(1);

			}

			initialAnimation.setValue(2);

		});

	}

	return (
		
        <View style={styles.container}>

			<View style={styles.homebody}>

				  <ScrollView>

                	<SectionList
	                    sections={defaultState} 
						renderItem={({item, i}) => (

							<Animated.View style={[{opacity:staggerAnimations[k++ % staggerAnimations.length]}]}>

								<ConcertListItem item={item} navigation={navigation} handleInteraction={handleListItemInteraction}/>

							</Animated.View> 
						
						)}
                  		renderSectionHeader={({section}) => (

							<Animated.View style={[styles.sectionHeader, {opacity:staggerAnimations[k % staggerAnimations.length]}]}>

                      			<Text style={styles.sectionHeaderText}>
                        			{section.title}
                      			</Text>

							</Animated.View>

						)}/>

            	</ScrollView>

			</View>
      
			<View style={styles.homefooter}>

				<Text style={styles.homefooterText}>

              		(C)2020 Globoticket

        		</Text>

			</View>

		</View>
	)
	
}
