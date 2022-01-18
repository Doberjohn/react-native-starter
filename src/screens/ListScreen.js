import React from "react";
import {View, Text, StyleSheet, FlatList} from "react-native";

const ListScreen = () => {
    const friends = [
        {
            name: 'John',
            age: 27,
        },
        {
            name: 'Panos',
            age: 32,
        },
        {
            name: 'Nikos',
            age: 28
        }
    ]

    const renderFriend = ({item}) => {
        return (
            <Text style={styles.textStyle}>{item.name} - {item.age} years old</Text>
        )
    }

    const extractKey = item => {
        return item.name;
    }

    return (
        <FlatList
            style={styles.container}
            keyExtractor={extractKey}
            data={friends}
            renderItem={renderFriend}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    textStyle: {
        marginVertical: 10
    }
});

export default ListScreen
