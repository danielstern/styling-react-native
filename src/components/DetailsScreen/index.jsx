import React from 'react';
import { Text, Image, Button, ScrollView, StyleSheet, ImageBackground, View } from 'react-native';

const styles = StyleSheet.create({

    imageContainer: {
        // display: "flex",
        // flexDirection: "row",
        // justifyContent: "center",
        // // alignItems: "stretch",
        // alignItems: "center",
        // width: "100%",
        // height: "20rem",
        // backgroundColor: "pink",
    },
    image: {

        height: "20vh",
        // width: null,
        // heiht: "100%",
        // height: "100%",
        // flex: 1,
        // width: null,
        // width: "100%",
        // height: null,
        // height: "400",
        // width: "100",
        // alignItems: "stretch"
        // width: "auto",
        // width: "100%",
        // objectFit: "cover",
        // alignItems: "stretch",
        // maxWidth: "100%",
        // alignItems:"center",
    
        // height: "auto",
        // display: "flex",
        // alignItems: "stretch",
        // height: "12em",
        // // height: "100%",
        // display: "flex",
        // // flex: "row",
        // height: "100%",
        // display :"flex",
        // flexWrap: "wrap",
        // width: "100%",

        // world record??

    },

    container: {

        backgroundColor: "white",
        // height: 480,
        margin: 20,
        padding: 20

    },

    imageThumb: {

        // width: 50,
        // height: 40,
        height: "6vh",
        width: "7vh",
        display: "flex",
        // flex: 3
    },

    imageThumbContainer: {

        marginTop: 20,
        display: "flex",
        flexDirection: "row", // arrranges elements left-to-right
        flexWrap: "wrap",
        // justifyContent: "space-around",
        justifyContent: "center",

    }

})


export const DetailsScreen = ({route})=>{

    const { name, date } = route.params.item;

    const [img1, img2, img3] = [

        require('./../../img/img-1.jpg'),
        require('./../../img/img-2.jpg'),
        require('./../../img/img-3.jpg')

    ]

    return (

        <ScrollView style={styles.container}>

            <Image source={img1} style={styles.image} resizeMode="contain"/>

            
            <View style={styles.imageThumbContainer}>

                <Image style={styles.imageThumb} source={img1} resizeMode="cover"/>
                <Image style={styles.imageThumb} source={img2} resizeMode="cover"/>
                <Image style={styles.imageThumb} source={img3} resizeMode="cover"/>

                <Image style={styles.imageThumb} source={img1} resizeMode="cover"/>
                <Image style={styles.imageThumb} source={img2} resizeMode="cover"/>
                <Image style={styles.imageThumb} source={img3} resizeMode="cover"/>

                <Image style={styles.imageThumb} source={img1} resizeMode="cover"/>
                <Image style={styles.imageThumb} source={img2} resizeMode="cover"/>
                <Image style={styles.imageThumb} source={img3} resizeMode="cover"/>

                <Image style={styles.imageThumb} source={img1} resizeMode="cover"/>
                <Image style={styles.imageThumb} source={img2} resizeMode="cover"/>
                <Image style={styles.imageThumb} source={img3} resizeMode="cover"/>

                <Image style={styles.imageThumb} source={img3} resizeMode="cover"/>

            </View>
  
            <Text>

                <h1>

                    {name}

                </h1>
                <h2>

                    {date.toLocaleDateString("en-us", {day: "numeric", weekday: "long", month: "long", year:"numeric"})}

                </h2> 
                <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tellus fringilla, tempus magna ut, accumsan lectus. 
                    Sed pellentesque, mi non tempor auctor, nisl sem cursus sem, sed ultricies augue metus non ex. 
                    Morbi venenatis suscipit nunc vel facilisis. Sed sit amet dictum mauris, quis blandit velit. 

                </p>

            </Text>

            <Button title="Purchase Tickets" onPress={()=>{}}></Button>

        </ScrollView>
    )

}