import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const img = require('../../img/logo.png');

const styles = StyleSheet.create({

    logo: {
        height: 110,
        borderBottomColor: "darksteelblue",
        borderBottomWidth: StyleSheet.hairlineWidth
    }

})

export const Logo = () => (
    // <View style={styles.logo}>
        <Image source={img} style={styles.logo} />
    // </View>
)