import React, {useReducer, useState} from 'react';
import {Button, View, StyleSheet, FlatList} from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COLOR':
            return {...state, colors: [...state.colors, action.payload]};
        default:
            return state;
    }
}

const ColorScreen = () => {
    let [state, dispatch] = useReducer(reducer, {colors: []});
    const {colors} = state;

    const generateColor = () => {
        const newColor = randomRgb();
        dispatch({type: 'SET_COLOR', payload: newColor});
    }

    const renderColorBox = ({item}) => {
        return (
            <View style={{height: 100, width: 100, backgroundColor: item}}/>
        )
    }

    return (
        <View style={styles.container}>
            <Button title={'Add color'} onPress={generateColor}/>
            <FlatList keyExtractor={item => item} data={colors} renderItem={renderColorBox}/>
        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor((Math.random() * 256));
    const green = Math.floor((Math.random() * 256));
    const blue = Math.floor((Math.random() * 256));

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})

export default ColorScreen
