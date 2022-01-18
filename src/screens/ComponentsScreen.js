import React from 'react';
import {Text, StyleSheet, View} from "react-native";

const ComponentsScreen = () => {
    const name = 'John';

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Getting started with React Native!</Text>
            <Text style={styles.name}>My name is {name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    text: {
        fontSize: 30,
        paddingBottom: 10
    },
    name: {
        fontSize: 20,
    }
})

export default ComponentsScreen;
