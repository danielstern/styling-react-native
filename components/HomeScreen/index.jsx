import React from 'react';
import { ScrollView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { StyleSheet, Text, View, SectionList, Image } from 'react-native';

export const HomeScreen = ({navigation})=>{

    return (
      <View style={{
          backgroundColor: "white",
          height: "100%"
        //   alignSelf: "stretch"
      }}>
          <ScrollView style={{alignSelf: "stretch", height: "40%"}}>
          <SectionList
            sections={[
              {title: "March", data:[{
                key:"concert-1",
                name:"The Chatty Cellists",
                date: new Date("Mar 4 2020"),
                fullDate: "March 4th, 2020",
                description: "The chatty Cellists play a number of selections from Vivaldi before having a riveting conversation."
              },{
                key:"concert-2",
                name:"Vivacious Violins",
                date: new Date("Mar 18 2020")
              }]},
              {title: "April", data:[{
                key:"concert-3",
                name:"Floyd and the Flutes",
                date: new Date("Apr 6 2020")
              },{
                key:"concert-4",
                name:"The Terrific Trumpeters",
                date: new Date("Apr 12 2020")
              },{
                key:"concert-5",
                name:"The Playful Piccolo Players",
                date: new Date("Apr 16 2020")
              },{
                key:"concert-9",
                name:"Contrarian Contrabass",
                date: new Date("Apr 25 2020")
              }]},
              {title: "May", data:[{
                key:"concert-6",
                name:"The Quiet Choir",
                date:new Date("May 1 2020")
              },{
                key:"concert-7",
                name:"Awesome Euphonium",
                date:new Date("May 7 2020")
              },{
                key:"concert-8",
                name:"The Daring Drummers",
                date:new Date("May 18 2020")
              }]}
  
            ]} 
            renderItem={({item}) => (
              <TouchableWithoutFeedback onPress={()=> navigation.navigate("Details", {item})}>
              <View style={styles.item}>
                {/* <span style={styles.itemDate}> */}
                {/* <span style={{flex: 1}}> */}
                <View style={{flex: 1, backgroundColor: "steelblue", marginRight: 20}}>
                  <Text style={{color: "white", padding: 10, fontSize: 14}}>
                    {/* {item.date} */}
                    {item.date.toLocaleDateString("en-us", {day: "2-digit", month:"short"})}
                  </Text>
                </View>
                <View style={{flex: 4, paddingTop: 10}}>
                  <Text>
                    {item.name}
                  </Text>
                </View>
                
              </View>
              </TouchableWithoutFeedback>
            )}
            renderSectionHeader={({section}) => (
              <Text style={styles.sectionHeader}>
                {section.title}
              </Text>
            )
          }
          />
          </ScrollView>
  
          <View style={{flex: 1, flexDirection: 'row', width:"100%", display: "none"}}>
  
            <Image source={require('../../img/img-1.jpg')} style={{flex: 1}}/>
            <Image source={require('../../img/img-2.jpg')} style={{flex: 1}}/>
            <Image source={require('../../img/img-3.jpg')} style={{flex: 1}}/>
  
          </View>
  
          <Text style={styles.footer}>
            (C)2020 Globoticket
          </Text>
          {/* <StatusBar style="auto" /> */}
        </View>
    )
  }

  
const styles = StyleSheet.create({
    logo: {
        alignSelf: "stretch", 
        height: 100,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth
    },
    item: {
        padding: 10,
        height: 44,
        alignSelf: 'stretch',
        flex: 1,
        flexDirection: 'row',
        padding: 0,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth
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