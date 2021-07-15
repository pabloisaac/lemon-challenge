import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import FlatComponent from "../components/FlatComponent";
import HeaderComponent from "../components/ConfirmedCases/HeaderComponent";
import HeaderApp from "../components/HeaderApp";
import { AppContext } from '../store/reducer';
import EmptyList from "../components/ConfirmedCases/EmptyList";

const ConfirmedCases = ({ navigation }) => {
    const { state } = useContext(AppContext);

    return (
        <View style={styles.container}>
            <HeaderApp navigation={ navigation } />
            <HeaderComponent />
            {state.listCases.length > 0 ?
                <FlatComponent info={state.listCases} mode='cases' /> :
                <EmptyList />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ConfirmedCases;