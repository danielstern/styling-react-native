import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

const img = require('../../img/logo.png');

export const Logo = () => (
    <Image source={img} style={getLogoStyle()} resizeMode="contain"/>
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