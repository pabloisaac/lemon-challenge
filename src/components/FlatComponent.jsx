import React from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import CardComponent from "./ConfirmedCases/CardComponent";
import TouchableComponent from "./Country/TouchableComponent";

const FlatComponent = ({ info, fncEvn, mode}) => {

    const renderItem = ({ item }) => {
        return (mode === 'country' ?
            <TouchableComponent item={item} onPress={fncEvn} /> :
            <CardComponent item={item}/>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={info}
                renderItem={renderItem}
                keyExtractor={() => Math.random().toString()}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    }
});

export default FlatComponent;