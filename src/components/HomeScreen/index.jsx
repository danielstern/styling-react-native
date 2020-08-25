// import React from 'react';
import React, { useRef, useEffect } from 'react';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, SectionList, Animated } from 'react-native';
import { useFocusEffect } from '@react-navigation/native'

import { defaultState } from '../../config';
import { ConcertListItem } from './ConcertListItem';



export const HomeScreen = ({navigation})=>{

  // this logic regarding the screens fading in probably does not belong with the actual app JSX... requires refactor?
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useFocusEffect(() => {
        Animated.timing(
          fadeAnim,
          {
            toValue: 1,
            duration: 350,
          }
        ).start();
      }, [fadeAnim]);

    return (
        <Animated.View style={{opacity: fadeAnim}} >
            <View style={styles.container}>

          <ScrollView style={{alignSelf: "stretch", height: "40%"}}>

            <SectionList
                sections={defaultState} 
            	renderItem={ ({item}) => <ConcertListItem item={item} navigation={navigation}/> }
            	renderSectionHeader={({section}) => (
              		<Text style={styles.sectionHeader}>
                		{section.title}
              		</Text>
            	)
          	}/>

          </ScrollView>
  
          <Text style={styles.footer}>

            (C)2020 Globoticket

          </Text>
        </View>
        </Animated.View>
	)
	
  }

  
const styles = StyleSheet.create({
    container:{
        backgroundColor: "white",
        height: "100%",
        // maxWidth: 900
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