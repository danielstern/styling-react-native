import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Text, View, SectionList, StyleSheet } from 'react-native';

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';


export const HomeScreen = ({navigation})=>{

    return (
        <View style={styles.container}>

			<View style={styles.homebody}>

				  <ScrollView>

                	<SectionList
	                    sections={defaultState} 
						renderItem={({item}) => (
						
							<ConcertListItem item={item} navigation={navigation}/> 
						
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

		backgroundColor: "steelblue",
		flex: 1
		// height: 470

	},
	homebody:{

		flex: 12

	},
	homefooter: {

		flex: 1,
		alignSelf: "stretch",
		// alignContent: "center",
		justifyContent: "flex-end",
		borderTopColor: "black",
		borderTopWidth: StyleSheet.hairlineWidth,
		backgroundColor: "whtie"

	},

	homefooterText: {

		fontSize: "2vh",
		textAlign: "center",
		marginBottom: "0.5vh"

	},

	sectionHeader: {

		paddingTop: 2,
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 2,
		fontWeight: "bold",
		backgroundColor: 'lightgray',
		borderBottomColor: "steelblue",
		borderBottomWidth: StyleSheet.hairlineWidth
	}

})