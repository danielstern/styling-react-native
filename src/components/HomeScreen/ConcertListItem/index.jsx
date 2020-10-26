import React, { useState, useRef} from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View, StyleSheet, Animated } from 'react-native';

const styles = StyleSheet.create({

	item: {

		borderBottomColor: "lightsteelblue",
		borderBottomWidth: StyleSheet.hairlineWidth,
		flex: 1,
		flexDirection: "row"
	},

	tab: {

		flex: 2,
		backgroundColor: "black",
		justifyContent: "center",
		alignItems: "center"

	},

	tabCenter: {
		
		flex: 5,
		padding: 12,
		
	},

	tabText: {

		color: "white",
		fontSize: "2vh",
		whiteSpace: "nowrap"
	},

	tabCenterText: {

		fontSize: "2vh"
	}

})

export const ConcertListItem = ({item, handleInteraction}) => {

	const flexWidthAnimation = useRef(new Animated.Value(2)).current;

	function handleComponentPress(){

		Animated.timing(

			flexWidthAnimation,
			{
				  toValue: 0,
				  duration: 750,
			}

		).start(()=>{

			handleInteraction(item, flexWidthAnimation);
	
		});		

	};

    return (

      <TouchableHighlight onPress={handleComponentPress}>

			<Animated.View style={[styles.item, {opacity: 1}]}>

				<Animated.View style={[styles.tab, {flex:flexWidthAnimation}]}>
				
					<Text style={[styles.tabText]}>

						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}

					</Text>

				</Animated.View>

				<View style={styles.tabCenter}>

					<Text style={[styles.tabCenterText]}>

						{item.name}

					</Text>

				</View>
			
			</Animated.View>

		</TouchableHighlight>

    )

}