import React from 'react';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const RenderLikeButton = (progress, dragX)=>{

    const x = progress.interpolate({
        inputRange: [0, 2],
        outputRange: [0, 40],
      });

    //   console.log(x.toJSON(), progress.toJSON())

    console.log(progress.toJSON(), dragX.toJSON());

    console.log(x.toJSON())

    return (
        <View style={{width: x.toJSON() + 10 + "%"}}>
            <View style={styles.tab}>
                <Text style={styles.tabText}>
                LIKE
                </Text> 
            </View> 
        </View>
    )

}
export const ConcertListItem = ({navigation, item}) => {
    
    return (

    // <Swipeable renderRightActions={RenderLikeButton}>
      
        <TouchableHighlight  activeOpacity={0.6}underlayColor="#DDDDDD" onPress={()=> navigation.push("Details", {item})}>

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
        flex: 1, 
        backgroundColor: "steelblue", 
        justifyContent:"center", 
        alignItems:"center"
    },
    tabText: {
        color: "white", 
        fontSize: 14, 
        whiteSpace: "nowrap"
    },
    tabCenter: {
        flex: 4, 
        justifyContent:"center", 
        alignItems:"center",
    },
    item: {
        padding: 10,
        height: 44,
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth
    }
});