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
		// padding: 12,
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

export const ConcertListItem = ({navigation, item, handleInteraction}) => {

	const flexAnim = useRef(new Animated.Value(2)).current;
	// const opacityAnim = useRef(new Animated.Value(1)).current;
	// const fontSizeAnim = useRef(new Animated.Value(1)).current;

	// console.log(fontSizeAnim.current);
    
    return (

      <TouchableHighlight onPress={()=> {

		//   console.log("navigating...");

		//   Animated.timing(
		// 	  fontSizeAnim,
		// 	  {
		// 		  toValue:2,
		// 		  duration: 500
		// 	  }
		//   )

		

		Animated.stagger(
			500,
			[
				Animated.timing(
           			flexAnim,
					{
              			toValue: 0,
              			duration: 750,
            		}
				),
				// Animated.timing(
				// 	opacityAnim,
				// 	{
				// 		toValue: 0,
				// 		duration: 500
				// 	}
				// )
				  
			]
		).start(()=>{

			handleInteraction();
			
		});

		// )
		// Animated.timing(
        //     flexAnim,
        //     {
        //       toValue: 0,
        //       duration: 750,
        //     }
        //   ).start

		//   Animated.timing(
        //     flexAnim,
        //     {
        //       toValue: 0,
        //       duration: 750,
        //     }
        //   ).start(() => {

		// 	  navigation.navigate("Details", {item});
		// 	  flexAnim.setValue(2);

		//   });
		

	  }}>

			<Animated.View style={[styles.item, {opacity: 1}]}>

				<Animated.View style={[styles.tab, {flex:flexAnim}]}>
				
					<Text style={[styles.tabText]}>

						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}

					</Text>

				</Animated.View>

				<View style={styles.tabCenter}>

					<Text style={[styles.tabCenterText]}>

					{/* <Text style={[styles.tabCenterText, {fontSize:fontSizeAnim.interpolate({
						inputRange:[1,2],
						outputRange:['2vh','4vh']
					})}]}> */}

						{item.name}

					</Text>

				</View>
			
			</Animated.View>

		</TouchableHighlight>

    )

}