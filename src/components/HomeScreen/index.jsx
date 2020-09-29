import React, { useRef } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, SectionList, Animated, LayoutAnimation, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';
import { CarouselHeader, CarouselListItem } from './CarouselListItem';



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

                                    return <CarouselListItem item={item} />

                                } else {

                                    return <ConcertListItem item={item} navigation={navigation}/> 

                                }
                                
                            
                            }}
                            renderSectionHeader={({section}) => {

                                // return (<Text style={styles.sectionHeader}>

                                //     {section.title}

                                // </Text>)

                                if (section.isCarousel) {

                                    return (
                                        <CarouselHeader title={section.title} />
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