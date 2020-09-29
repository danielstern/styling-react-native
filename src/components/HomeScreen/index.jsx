import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, SectionList, Animated, LayoutAnimation, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';



// TODO:
// - replace animated with LayoutAnimation
// - animate slide out... but how?
// https://reactnative.dev/docs/layoutanimation
export const HomeScreen = ({navigation})=>{

    return (
            <View style={styles.container}>

				<ScrollView style={{height: 100}}>

                	<SectionList
	                    sections={defaultState} 
                        renderItem={ ({item}) => {

                                if (item.isCarousel) {

                                    return (
                                        <ScrollView horizontal={true} style={styles.carouselContainer}>

                                            {
                                                item.contents.map((content,i) => (
                                                    <View key={i} style={styles.carouselItem}>

                                                        <Text style={styles.carouselText}>{content.title}</Text>
                                                        <Image source={require(`./../../img/${content.img}`)} style={styles.carouselImage} resizeMode="contain"/>

                                                    </View>
                                                ))
                                                
                                            }

                                        </ScrollView>
                                    )

                                } else {

                                    return <ConcertListItem item={item} navigation={navigation}/> 

                                }
                                
                            
                            }}
                            renderSectionHeader={({section}) => {

                                if (section.isCarousel) {

                                    return (
                                        <View style={styles.carouselHeader}>
                                            <Text>
                                                {section.title}
                                            </Text>
                                        </View>
                                    )

                                } else {

                                    return <Text style={styles.sectionHeader}>

                                        {section.title}

                                    </Text>

                                    

                                }
                            
                            }
						  
                	    }/>

            	</ScrollView>
      
				<Text style={styles.footer}>

              		(C)2020 Globoticket

        		</Text>

        	</View>
	)
	
  }

  
const styles = StyleSheet.create({
    container:{
		backgroundColor: "white",
        height: "100%",
    },
    carouselHeader:{
        padding: 10,
        // fontWeight: 700
    },
    carouselItem: {
        height: 100,
        width: "50%",
        backgroundColor: "darkslategray",
        marginLeft: 10,
        padding: 4,
    },
    carouselContainer:{

        display: "flex",
        height: 120,
        flexDirection: "row"

    },
    carouselImage:{

        height: "70%",
        // width: "80%"

    },
    carouselText: {
        color: "white",
        marginBottom: 6,
        textAlign: "center"

    },
    tab:{
        flex: 1, 
        backgroundColor: "steelblue", 
        justifyContent:"center", 
        alignItems:"center"
    },
    footer: {
        textAlign: "center",
        borderTopColor: "lightgray",
        borderTopWidth: StyleSheet.hairlineWidth,
        margin: 4,
        fontSize: 10,
        // backgroundColor: 

    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    concertList:{
        alignSelf: "stretch" // this has the same effect as width: 100 but is more correct for mobile
    },
    itemDate:{
        flex: 1,
        backgroundColor: 'blue'
    }
});