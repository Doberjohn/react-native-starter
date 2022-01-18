import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState("");

    const onChangeText = (value) => {
        setName(value);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Enter name:</Text>
            <TextInput
                value={name}
                style={styles.input}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onChangeText}/>
            {name.length < 5 ? (
                <Text>Name must be longer than 5 characters</Text>) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    label: {
        fontSize: 20,
    },
    input: {
        marginVertical: 15,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1
    }
})

export default TextScreen
