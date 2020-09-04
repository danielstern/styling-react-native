import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { Text, View } from 'react-native';

export const ConcertListItem = ({navigation, item}) => {
    
    return (

      <TouchableHighlight onPress={()=> navigation.navigate("Details", {item})}>

			<View>

				<View>
				
					<Text>

						{item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}

					</Text>

				</View>

				<View>

					<Text>

						{item.name}

					</Text>

				</View>
			
			</View>

		</TouchableHighlight>

    )

}