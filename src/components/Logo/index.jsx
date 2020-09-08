import React from 'react';
import { StyleSheet, Image, Dimensions } from 'react-native';

export const Logo = () => (

    <Image source={require('../../img/logo.png')} style={getLogoStyle()} resizeMode="contain"/>

)

const getLogoStyle = () => {

    return {
  
        height: 110,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth
  
    }

}