import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';

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

export const ConcertListItem = ({navigation, item}) => {
    
    return (

      <TouchableHighlight onPress={()=> navigation.navigate("Details", {item})}>

			<View style={styles.item}>

				<View style={styles.tab}>
				
					<Text style={styles.tabText}>

						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}

					</Text>

				</View>

				<View style={styles.tabCenter}>

					<Text style={styles.tabCenterText}>

						{item.name}

					</Text>

				</View>
			
			</View>

		</TouchableHighlight>

    )

}