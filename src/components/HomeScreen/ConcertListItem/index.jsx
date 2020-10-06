import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

	item: {

		borderBottomColor: "lightsteelblue",
		borderBottomWidth: StyleSheet.hairlineWidth,
		flex: 1,
		flexDirection: "row"

		// padding: 10,
		// height: 100,
		// flex: 1,
	},
	itemContainer: {

		/// seems to work with no styles at all?
		// height: 44, // these elements need some kind of height - 
		// flex: "stretch"
		// flex: 1,
		// alignSelf: "stretch"

	},

	tab: {

		flex: 1,
		backgroundColor: "black",
		alignContent: "center",
		justifyContent: "center"

		// flexDirection:"column",
		// padding: 24,
		// justifyContent: "flex-end"
		// height: 90,
		// width: 68,
		// position: "absolute",
		// left: 0
	},

	tabCenter: {

		flex: 5,
		padding: 12, // try different padding values, note effect on justification of other elements

		// position: "absolute",
		// right: 0
		// width: 272,
		
	},

	tabText: {

		color: "white",
		fontSize: 14,
		whiteSpace: "nowrap",
		alignSelf: "center",

	}

})

export const ConcertListItem = ({navigation, item}) => {
    
    return (

      <TouchableHighlight style={styles.itemContainer} onPress={()=> navigation.navigate("Details", {item})}>

			<View style={styles.item}>

				<View style={styles.tab}>
				
					<Text style={styles.tabText}>

						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}

					</Text>

				</View>

				<View style={styles.tabCenter}>

					<Text>

						{item.name}

					</Text>

				</View>
			
			</View>

		</TouchableHighlight>

    )

}