import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
    return (
        <View style={styles.container}>
            <ImageDetail title={'Forest'} imageSrc={require('../../assets/forest.jpg')} score={9}/>
            <ImageDetail title={'Beach'} imageSrc={require('../../assets/beach.jpg')} score={5}/>
            <ImageDetail title={'Mountain'} imageSrc={require('../../assets/mountain.jpg')} score={7}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
})

export default ImageScreen
