import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

export const ConcertListItem = ({navigation, item}) => {
    
    return (
      
        <TouchableHighlight  activeOpacity={0.6} underlayColor="#DDDDDD" onPress={()=> navigation.push("Details", {item})}>

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


const styles = StyleSheet.create({
    tab:{

        width: 68,
        backgroundColor: "steelblue", 
        padding: 12,
        position: "absolute",
        left: 0

    },
    tabText: {

        color: "white", 
        fontSize: 14, 
        whiteSpace: "nowrap",

    },

    tabCenter: {

        width: 272,
        padding: 12,
        position: "absolute",
        right: 0

    },
    item: {

        padding: 10,
        height: 44,
        padding: 0,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth
        
    }
    
});