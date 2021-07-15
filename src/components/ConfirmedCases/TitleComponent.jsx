import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";;
import { AppContext } from '../../store/reducer';
import _ from 'lodash';

const TitleComponent = () => {
    const { state } = useContext(AppContext);

    return (
        <View>
            <Text style={styles.title}>
                {state.slug ? state.slug.toUpperCase() : 'NaN'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 20,
        color: '#006DCB'
    }
});

export default TitleComponent;