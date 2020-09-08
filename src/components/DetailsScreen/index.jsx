import React from 'react';

import { StyleSheet, Text, Image, Button, ScrollView } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'



export const DetailsScreen = ({route})=>{

    const { name, date } = route.params.item;

    useFocusEffect(() => {

        console.log("Details screen focused");
          
    });

    // console.log(a.b);

    //  Problem... for some reason stlyeSheet.create just does not work sometimes
    // Solution.... style created by "stylesheet.create" only works with components importeted from React native... not regular div tags!

    return (

        <ScrollView style={stylesFlex.container}>
  
            <Text>

                <Image source={require('./../../img/img-3.jpg')} style={stylesFlex.image}/>
                
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

  
const stylesFlex = StyleSheet.create({

    header: {

        // marginBottom: 10

    },
    image: {

        height: 200, 
        width: "100%"

    },
    container: {

        backgroundColor: "white",
        height: "100%",
        margin: 20,
        padding: 20

    },
    button: {

        padding: 10, 
        backgroundColor: "steelblue", fontSize: 18, color: "white", textTransform:"uppercase", borderRadius: 4

    }



})