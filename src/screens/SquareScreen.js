import React, {useReducer} from 'react';
import {View, StyleSheet} from 'react-native';
import ColorCounter from "../components/ColorCounter";

const OFFSET = 20;

const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_RED':
            return state.red + action.payload > 255 || state.red + action.payload < 0
                ? state : {...state, red: state.red + action.payload}
        case 'CHANGE_GREEN':
            return state.green + action.payload > 255 || state.green + action.payload < 0
                ? state : {...state, green: state.green + action.payload}
        case 'CHANGE_BLUE':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0
                ? state : {...state, blue: state.blue + action.payload}
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    const {red, green, blue} = state;

    return (
        <View style={styles.container}>
            <ColorCounter
                onIncrease={() => dispatch({type: 'CHANGE_RED', payload: OFFSET})}
                onDecrease={() => dispatch({type: 'CHANGE_RED', payload: -1 * OFFSET})}
                color={'Red'}/>

            <ColorCounter
                onIncrease={() => dispatch({type: 'CHANGE_GREEN', payload: OFFSET})}
                onDecrease={() => dispatch({type: 'CHANGE_GREEN', payload: -1 * OFFSET})}
                color={'Green'}/>

            <ColorCounter
                onIncrease={() => dispatch({type: 'CHANGE_BLUE', payload: OFFSET})}
                onDecrease={() => dispatch({type: 'CHANGE_BLUE', payload: -1 * OFFSET})}
                color={'Blue'}/>

            <View style={{height: 100, width: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})`}}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})

export default SquareScreen
