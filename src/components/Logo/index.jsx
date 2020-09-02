import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

export const Logo = () => (

    <Image source={require('../../img/logo.png')} style={getLogoStyle()} resizeMode="contain"/>

)

const getLogoStyle = () => {

    const { height } = Dimensions.get('window');

    return {
  
        height: height / 6,
        alignSelf: "stretch", 
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth
  
    }

}