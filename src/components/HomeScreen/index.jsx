import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, SectionList, StyleSheet, Animated } from 'react-native';

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';

console.log(defaultState);
export const HomeScreen = ({navigation})=>{

	const opacityAnim = useRef(new Animated.Value(1)).current;
	// const staggerAnimations = new Array(20).map((v,i)=>{
	const staggerAnimations = [0,1,2,3].map((v,i)=>{
		
		return (new Animated.Value(1));
		// return 1;
		// return (new Animated.Value(1));

	});

	console.log(staggerAnimations);

    return (
        <View style={styles.container}>

			<View style={styles.homebody}>

				  <ScrollView>

                	<SectionList
	                    sections={defaultState} 
						renderItem={({item, i}) => (

							<Animated.View style={[{opacity:staggerAnimations[i % staggerAnimations.length]}]}>

								<ConcertListItem item={item} navigation={navigation} handleInteraction={()=>{

									// Animated.timing(
									// 	opacityAnim,
									// 	// staggerAnimations[i],
									// 	{
									// 		toValue: 0,
									// 		duration: 500
									// 	}
										
									// ).start(()=>{

									// 	navigation.navigate("Details", {item});

									// });

									Animated.stagger(
										300,
										[
											...staggerAnimations.map(animation => (
												Animated.timing(
													// staggerAnimations[0],
													animation,
													{
														toValue: 0,
														duration: 500
													}
												)
											))
											// staggerAnimations.map(animation => (
											// 	Animated.timing(
											// 		animation,
											// 		{
											// 			toValue: 0,
											// 			duration: 500
											// 		}
											// 	)
											// ))
										]
										// staggerAnimations[staggerAnimations.length % i],
										// staggerAnimations[i],
										// {
										// 	toValue: 0,
										// 	duration: 250
										// }
										
									).start(()=>{

										navigation.navigate("Details", {item});

									});

								}}/>

							</Animated.View> 
						
						)}
                  		renderSectionHeader={({section}) => (

                      		<Text style={styles.sectionHeader}>
                        		{section.title}
                      		</Text>

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

const styles = StyleSheet.create({

	container: {

		backgroundColor: "white",
		flex: 1
		// height: 470

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
		fontWeight: "bold",
		backgroundColor: 'rgba(247, 247, 247)',
		borderBottomColor: "steelblue",
		borderBottomWidth: StyleSheet.hairlineWidth,
		fontSize: "2.5vh"
	}

})