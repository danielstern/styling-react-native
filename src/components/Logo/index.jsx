import React from 'react';
import { StyleSheet, Image } from 'react-native';

export const Logo = () => (
    <Image source={require('../../img/logo.png')} style={styles.logo} />
)

const styles = StyleSheet.create({

    logo: {
  
        alignSelf: "stretch", 
        height: 100,
        borderBottomColor: "lightgray",
        borderBottomWidth: StyleSheet.hairlineWidth
  
    }
    
  });