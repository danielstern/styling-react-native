import React from 'react';
import { Text, Image, Button, ScrollView } from 'react-native';


export const DetailsScreen = ({route})=>{

    const { name, date } = route.params.item;

    return (

        <ScrollView>
  
            <Text>

                <Image source={require('./../../img/img-3.jpg')} />
               
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