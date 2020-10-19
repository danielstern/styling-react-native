import React, {useState} from 'react';
import { Text, Image, Button, ScrollView, StyleSheet, View, LayoutAnimation, Platform, UIManager } from 'react-native';

const styles = StyleSheet.create({

    image: {

        height: "32vh",
        display: "flex",
        // alignItems: "stetch"

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
    },

    inactive: {

        transform: "scale(0.5)"

    },

    active: {

        transform: "scale(2)"
    }

})

if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

export const DetailsScreen = ({route})=>{

    const { name, date } = route.params.item;

    const [activated, setActivated] = useState(false);

    const [ img1, img2, img3 ] = [

        require('./../../img/img-1.jpg'),
        require('./../../img/img-2.jpg'),
        require('./../../img/img-3.jpg')        

    ];

    return (

        <ScrollView style={styles.container}>

            <Image source={img3} style={styles.image} />


                {/* <View style={styles.imageThumbContainer}>

                    <Image source={img1} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img2} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img3} style={styles.imageThumb} resizeMode="contain"/>

                    <Image source={img1} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img2} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img3} style={styles.imageThumb} resizeMode="contain"/>

                    <Image source={img1} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img2} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img3} style={styles.imageThumb} resizeMode="contain"/>

                    <Image source={img1} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img2} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img3} style={styles.imageThumb} resizeMode="contain"/>

                    <Image source={img2} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img3} style={styles.imageThumb} resizeMode="contain"/>
                    <Image source={img3} style={styles.imageThumb} resizeMode="contain"/>


                </View> */}

            

            
  
            <Text>
               
                <h1>

                    {name}

                </h1>

            </Text>
            <Text style={activated ? styles.active : styles.inactive}>
                <h2>

                    {date.toLocaleDateString("en-us", {day: "numeric", weekday: "long", month: "long", year:"numeric"})}

                </h2> 
                <p>

                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget tellus fringilla, tempus magna ut, accumsan lectus. 
                    Sed pellentesque, mi non tempor auctor, nisl sem cursus sem, sed ultricies augue metus non ex. 
                    Morbi venenatis suscipit nunc vel facilisis. Sed sit amet dictum mauris, quis blandit velit. 

                </p>

            </Text>

            <Button title="Purchase Tickets" onPress={()=>{

                console.info("BOOP");
                LayoutAnimation.configureNext(
                    // LayoutAnimation.Presets.spring,
                    LayoutAnimation.create(
                        2500,
                        LayoutAnimation.Types.spring,
                        LayoutAnimation.Properties.scaleXY
                      )
                );
                setActivated(true);

            }}></Button>

        </ScrollView>
    )

}