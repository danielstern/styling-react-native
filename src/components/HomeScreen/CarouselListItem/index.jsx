import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, ImageBackground } from 'react-native';

export const CarouselListItem = ({item}) => {

    let _styles = spacedStyles;

    return (
        <ScrollView horizontal={true} style={_styles.carouselContainer}>

            <View style={_styles.carouselInner}>



            {
                item.contents.map((content,i) => (
                    <View key={i} style={_styles.carouselItem}>

                        <Text style={_styles.carouselText}>{content.title}</Text>
                        <ImageBackground source={require(`./../../../img/${content.img}`)} style={_styles.carouselImage} resizeMode="contain"/>

                    </View>
                ))
            
            }

            </View>

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

        height: 120,
        flex: 1,
        // resizeMode: "cover"

    },
    carouselText: {

        color: "white",
        marginBottom: 6,
        textAlign: "center"

    }
 
});

const spacedStyles = {
    ... styles,
    ...StyleSheet.create({

        carouselInner:{

            // display: "flex",
            flexDirection: "row",
            // marginBottom: 10,
            justifyContent: "space-evenly",
            // justifyContent: "flex-end",
            width: "200%"
    
        },

        carouselItem: {
            // height: 140,
            width: "200",
            backgroundColor: "darkslategray",
            // marginLeft: 10,
            // padding: 4,
        }

    })
}