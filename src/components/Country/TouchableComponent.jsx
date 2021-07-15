import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Card } from 'react-native-elements'

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
        color:'#006DCB',
        fontWeight: "bold",
    },
    titleIS02: {
        fontSize: 20,
        fontWeight: "bold",
        color: 'grey',
        fontStyle: 'italic'
    }
});

const TouchableComponent = ({ item, onPress }) => {
    return (
        <TouchableOpacity
            key={item.id}
            onPress={() => onPress(item)} >
            <Card>
                <Card.Title style={styles.titleIS02}>{item.ISO2}</Card.Title>
                <Card.Divider/>
                <View key={item.Date}>
                    <Text key={item.Date} style={styles.title}>{item.Country}</Text>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

export default TouchableComponent;