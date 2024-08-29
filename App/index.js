// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, FlatList, Image, View } from 'react-native';

const images = [
    { id: '1', width: 200, height: 200 },
    { id: '2', width: 200, height: 200 },
    { id: '3', width: 200, height: 200 },
    { id: '4', width: 200, height: 200 },
    { id: '5', width: 200, height: 200 },
];

const ImageList = () => {
    const renderItem = ({ item }) => (
        <View style={imageStyles.imageContainer}>
            <Image
                source={{ uri: `https://picsum.photos/${item.width}/${item.height}?random=${item.id}` }}
                style={imageStyles.image}
            />
        </View>
    );

    return (
        <FlatList
            data={images}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={imageStyles.list}
        />
    );
};

const imageStyles = StyleSheet.create({
    list: {
        alignItems: 'center',
    },
    imageContainer: {
        margin: 10,
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
});

export default function App() {
    return (
        <SafeAreaView style={appStyles.container}>
            <Text style={appStyles.title}>Picsum Photos</Text>
            <ImageList />
        </SafeAreaView>
    );
}

const appStyles = StyleSheet.create({
    container: {
        padding: '20px',
        backgroundColor: '#FFFFFF',
        height: '100vh',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#CE8ABD', // Light purple
        color: '#FFFFFF',
        padding: '10px 20px',
        borderRadius: '20px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        margin: '5px',
    },
    buttonHover: {
        backgroundColor: '#E5CABF', // Light peach
    },
    input: {
        padding: '10px',
        borderRadius: '10px',
        border: '1px solid #CCCCCC',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '10px',
        width: '100%',
    },
    box: {
        backgroundColor: '#FFFFFF',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '20px',
    },
});