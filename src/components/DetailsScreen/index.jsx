import React from 'react';
import { Text, Image, Button, ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({

    image: {

        height: "12em",
        display: "flex",
        alignItems: "stretch",
        // width: 90,
        // alignSelf: "center"

    },

    container: {

        backgroundColor: "white",
        margin: 20,
        padding: 20,
        // alignContent: "center",
        // justifyContent: "center"

    },

    imageThumb: {

        width: 50,
        height: 40,
        display: "flex"
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

        <ScrollView contentContainerStyle={styles.container}>

            <Image source={img1} style={styles.image}/>

            <View style={styles.imageThumbContainer}>

                <Image style={styles.imageThumb} source={img1}/>
                <Image style={styles.imageThumb} source={img2}/>
                <Image style={styles.imageThumb} source={img3}/>

                <Image style={styles.imageThumb} source={img1}/>
                <Image style={styles.imageThumb} source={img2}/>
                <Image style={styles.imageThumb} source={img3}/>

                <Image style={styles.imageThumb} source={img1}/>
                <Image style={styles.imageThumb} source={img2}/>
                <Image style={styles.imageThumb} source={img3}/>

                <Image style={styles.imageThumb} source={img1}/>
                <Image style={styles.imageThumb} source={img2}/>
                <Image style={styles.imageThumb} source={img3}/>
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