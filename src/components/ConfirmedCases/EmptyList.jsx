import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { AppContext } from '../../store/reducer';

const EmptyList = () => {
    const { state } = useContext(AppContext);

    return (
        <View style={styles.center}>
            <Text style={styles.listEmpty}>
                {state.slug ?
                    'No se han registrado casos hasta la fecha para el país seleccionado' :
                    'Para ver los datos, debe seleccionar un país'}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        padding: 20
    },
    listEmpty: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: "bold",
    }
});

export default EmptyList;