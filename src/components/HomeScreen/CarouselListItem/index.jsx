import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export const CarouselListItem = ({item}) => {

    return (
        <ScrollView horizontal={true} style={styles.carouselContainer}>

            {
                item.contents.map((content,i) => (
                    <View key={i} style={styles.carouselItem}>

                        <Text style={styles.carouselText}>{content.title}</Text>
                        <ImageBackground source={require(`./../../../img/${content.img}`)} style={styles.carouselImage} resizeMode="contain"/>

                    </View>
                ))
            
            }

        </ScrollView>
    )

}

export const CarouselHeader = ({title}) => {

    return (
        <View>
            <Text style={styles.carouselHeader}>
                {title}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    carouselItem: {
        // height: 140,
        width: "50%",
        backgroundColor: "darkslategray",
        marginLeft: 10,
        padding: 4,
    },

    carouselHeader:{
        padding: 10,
        fontSize: 18,
        // fontVariant: "bold"
        // fontWeight: 700
    },

    carouselContainer:{

        display: "flex",
        height: 120,
        flexDirection: "row",
        marginBottom: 10

    },
    carouselImage:{

        // height: "90%",
        height: 120,
        flex: 1,
        resizeMode: "cover"

        // width: "80%"

    },
    carouselText: {

        color: "white",
        marginBottom: 6,
        textAlign: "center"

    }
 
});