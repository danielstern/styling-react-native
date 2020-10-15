import React from 'react';
import { Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    image: {

        height: "32vh",
        display: "flex",
        alignItems: "stetch"

    },

    container: {

        backgroundColor: "white",
        height: 480,
        margin: 20,
        padding: 20

    }

})


export const DetailsScreen = ({route})=>{

    const { name, date } = route.params.item;

    return (

        <ScrollView style={styles.container}>
  
            <Text>

                <Image resizeMode="cover" source={require('./../../img/img-3.jpg')} style={styles.image}/>
               
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