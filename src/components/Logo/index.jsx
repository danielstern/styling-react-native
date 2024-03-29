import React from 'react';
import { Image, StyleSheet } from 'react-native';

const img = require('../../img/logo.png');

const styles = StyleSheet.create({

    logo: {
        height: "16vh",
        borderBottomColor: "darksteelblue",
        borderBottomWidth: StyleSheet.hairlineWidth
    }

})

export const Logo = () => (

    <Image source={img} style={styles.logo} resizeMode="contain"/>
    
)