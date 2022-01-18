import React, {useReducer, useState} from 'react';
import {Text, Button, View, StyleSheet} from 'react-native';

const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return {...state, count: state.count + 1};
        case 'DECREASE':
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}

const CounterScreen = () => {
    let [state, dispatch] = useReducer(reducer, {count: 0});
    const {count} = state;

    const increase = ()=> {
        dispatch({type: 'INCREASE'});
    }

    const decrease = ()=> {
        dispatch({type: 'DECREASE'});
    }

    return (
        <View style={styles.container}>
            <Button title={'Increase'} onPress={increase}/>
            <Button title={'Decrease'} onPress={decrease}/>
            <Text>Current count: {count}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})

export default CounterScreen
