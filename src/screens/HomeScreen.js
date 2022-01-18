import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const HomeScreen = ({navigation}) => {

    const goToComponents = () => {
        navigation.navigate('Components');
    }

    const goToList = () => {
        navigation.navigate('List');
    }

    const goToImages = () => {
        navigation.navigate('Images');
    }

    const goToCounter = () => {
        navigation.navigate('Counter');
    }

    const goToColors = () => {
        navigation.navigate('Colors');
    }

    const goToSquare = () => {
        navigation.navigate('Square');
    }

    const goToText = () => {
        navigation.navigate('Text');
    }

    const goToBox = () => {
        navigation.navigate('Box');
    }

    return (
        <View>
            <Button onPress={goToComponents} title={"Go to components demo"}/>
            <Button onPress={goToList} title={"Go to list demo"}/>
            <Button onPress={goToImages} title={"Go to images demo"}/>
            <Button onPress={goToCounter} title={"Go to counter demo"}/>
            <Button onPress={goToColors} title={"Go to colors demo"}/>
            <Button onPress={goToSquare} title={"Go to square demo"}/>
            <Button onPress={goToText} title={"Go to text demo"}/>
            <Button onPress={goToBox} title={"Go to box demo"}/>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
    },
});

export default HomeScreen;
