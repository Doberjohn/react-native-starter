import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Child 1</Text>
            <Text style={styles.text2}>Child 2</Text>
            <Text style={styles.text3}>Child 3</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
    },
    text1: {
        borderWidth: 3,
        borderColor: 'red',
    },
    text2: {
        borderWidth: 3,
        borderColor: 'red',
        ...StyleSheet.absoluteFillObject
    },
    text3: {
        borderWidth: 3,
        borderColor: 'red',
    }
})

export default BoxScreen
