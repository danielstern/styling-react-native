import React from 'react';
import { Text, Image, Button, ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({

    image: {

        height: "32vh",
        display: "flex",

    },

    container: {

        backgroundColor: "white",
        height: 480,
        margin: 20,
        padding: 20

    },

    imageThumb: {

        display: "flex",
        height: "6vh",
        width: "7vh"

    },

    imageThumbContainer: {

        display: "flex",
        marginTop: "2vh",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around"
    }

})




export const DetailsScreen = ({route})=>{

    const { name, date } = route.params.item;

    const [ img1, img2, img3 ] = [

        require('./../../img/img-1.jpg'),
        require('./../../img/img-2.jpg'),
        require('./../../img/img-3.jpg')        

    ];

    // console.log(a.b);

    //  Problem... for some reason stlyeSheet.create just does not work sometimes
    // Solution.... style created by "stylesheet.create" only works with components importeted from React native... not regular div tags!

    return (

        <ScrollView style={styles.container}>

            <Image resizeMode="cover" source={img3} style={styles.image}/>

            <View style={styles.imageThumbContainer}>

                <Image resizeMode="cover" source={img1} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>

                <Image resizeMode="cover" source={img1} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>

                <Image resizeMode="cover" source={img1} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>

                <Image resizeMode="cover" source={img1} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>

                <Image resizeMode="cover" source={img2} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>
                <Image resizeMode="cover" source={img3} style={styles.imageThumb} resizeMode="contain"/>


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

            <Button title="Purchase Tickets" onPress={()=>{ console.info("Handle Button Press;" )}}></Button>

        </ScrollView>
    )

}