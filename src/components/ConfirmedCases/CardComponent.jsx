import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card } from 'react-native-elements';
import moment from 'moment';

const styles = StyleSheet.create({
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    color: {
        color: 'black'
    }
});

const CardComponent = ({ item }) => {
    return (
        <Card>
            <View>
                <Text key={item.Date} style={[styles.title, styles.color]}>
                    Fecha: {moment(new Date(item.Date)).format("YYYY-MM-DD")}
                </Text>
                <Text key={item.Cases} style={[styles.title, styles.color]}>
                    Casos: {item.Cases}
                </Text>
            </View>
        </Card>
    );
};

export default CardComponent;